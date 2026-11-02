import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { contactConfig, emailjsConfig } from '../data/portfolioData';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    botcheck: '',
    permission: true,
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const myEmail = contactConfig?.recipientEmail || 'progya.biswas2004@gmail.com';

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Parallax effect for background text
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%']);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear specific field error upon typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const trimmedName = formData.fullName.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      newErrors.fullName = 'Full Name is required.';
    } else if (trimmedName.length < 2) {
      newErrors.fullName = 'Please enter a valid full name.';
    }

    if (!trimmedEmail) {
      newErrors.email = 'Email Address is required.';
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!trimmedSubject) {
      newErrors.subject = 'Subject is required.';
    }

    if (!trimmedMessage) {
      newErrors.message = 'Message cannot be empty.';
    } else if (trimmedMessage.length < 5) {
      newErrors.message = 'Message must be at least 5 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (status === 'sending') return;

    // Honeypot spam trap
    if (formData.botcheck) {
      console.warn('Bot detected by honeypot.');
      setStatus('success');
      setFeedbackMessage(
        "Thank you for reaching out! Your message has been sent successfully. I'll get back to you as soon as possible."
      );
      return;
    }

    // Validate fields
    if (!validateForm()) {
      setStatus('error');
      setFeedbackMessage('Please fill in all required fields correctly.');
      return;
    }

    setStatus('sending');
    setFeedbackMessage('');

    const trimmedData = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || 'Not provided',
      company: formData.company.trim() || 'Not provided',
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    const formattedEmailBody = `New message received through your portfolio website.

━━━━━━━━━━━━━━━━━━
Name: ${trimmedData.fullName}
Email: ${trimmedData.email}
Phone: ${trimmedData.phone}
Company/Organization: ${trimmedData.company}
Subject: ${trimmedData.subject}

Message:
${trimmedData.message}
━━━━━━━━━━━━━━━━━━

Submitted from: Portfolio Contact Form`;

    const web3Key =
      contactConfig?.web3formsAccessKey ||
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    const isEmailjsConfigured =
      emailjsConfig &&
      emailjsConfig.serviceId &&
      emailjsConfig.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      emailjsConfig.serviceId !== '' &&
      emailjsConfig.templateId &&
      emailjsConfig.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      emailjsConfig.templateId !== '' &&
      emailjsConfig.publicKey &&
      emailjsConfig.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY' &&
      emailjsConfig.publicKey !== '';

    try {
      let isSuccess = false;
      let responseNote = '';

      if (web3Key && web3Key.trim() !== '') {
        // 1. Web3Forms API
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: web3Key,
            name: trimmedData.fullName,
            email: trimmedData.email,
            replyto: trimmedData.email,
            phone: trimmedData.phone,
            company: trimmedData.company,
            subject: `New Portfolio Contact — ${trimmedData.fullName}: ${trimmedData.subject}`,
            message: formattedEmailBody,
            from_name: `${trimmedData.fullName} (Portfolio Contact)`,
          }),
        });

        const data = await response.json();
        if (response.ok && data.success) {
          isSuccess = true;
        } else {
          throw new Error(data.message || 'Web3Forms submission failed');
        }
      } else if (isEmailjsConfigured) {
        // 2. EmailJS API
        const emailjs = await import('@emailjs/browser');
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          {
            from_name: trimmedData.fullName,
            user_email: trimmedData.email,
            reply_to: trimmedData.email,
            phone: trimmedData.phone,
            company: trimmedData.company,
            subject: `New Portfolio Contact — ${trimmedData.fullName}: ${trimmedData.subject}`,
            message: formattedEmailBody,
            to_email: myEmail,
          },
          emailjsConfig.publicKey
        );
        isSuccess = true;
      } else {
        // 3. FormSubmit.co Background Email API (Direct to myEmail without requiring secret keys)
        const response = await fetch(`https://formsubmit.co/ajax/${myEmail}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: trimmedData.fullName,
            email: trimmedData.email,
            phone: trimmedData.phone,
            company: trimmedData.company,
            subject: trimmedData.subject,
            message: trimmedData.message,
            _subject: `New Portfolio Contact — ${trimmedData.fullName}: ${trimmedData.subject}`,
            _replyto: trimmedData.email,
            _template: 'table',
            _captcha: 'false',
          }),
        });

        const data = await response.json();

        if (data.success === 'true' || data.success === true) {
          isSuccess = true;
        } else if (
          data.message &&
          data.message.toLowerCase().includes('activation')
        ) {
          // FormSubmit one-time activation needed
          setStatus('success');
          setFeedbackMessage(
            `Almost there! A one-time confirmation link was sent to ${myEmail}. Please click 'Activate Form' in your inbox (or spam) once to activate instant email delivery.`
          );
          return;
        } else {
          throw new Error(data.message || 'Submission error');
        }
      }

      if (isSuccess) {
        setStatus('success');
        setFeedbackMessage(
          responseNote ||
            "Thank you for reaching out! Your message has been sent successfully. I'll get back to you as soon as possible."
        );

        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          botcheck: '',
          permission: true,
        });
        setErrors({});

        setTimeout(() => {
          setStatus('idle');
          setFeedbackMessage('');
        }, 8000);
      }
    } catch (err) {
      console.error('Contact Form Error:', err);
      setStatus('error');
      setFeedbackMessage(
        'Something went wrong while sending your message. Please try again later or contact me directly by email.'
      );

      setTimeout(() => {
        setStatus('idle');
      }, 7000);
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900"
      aria-label="Contact Section"
    >
      {/* =========================================
          HUGE BACKGROUND TEXT (PARALLAX)
      ========================================= */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
        aria-hidden="true"
      >
        <h1
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{
            fontFamily: "'Impact', 'Arial Black', sans-serif",
          }}
        >
          Contact
        </h1>
      </motion.div>

      {/* =========================================
          CONTACT FORM CARD
      ========================================= */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div
          data-aos="fade-up"
          className="bg-blue-900 w-full md:w-[85%] lg:w-[75%] p-6 sm:p-8 md:p-14 lg:p-16 text-white flex flex-col justify-between shadow-2xl"
        >
          {/* =====================================
              HEADER
          ===================================== */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-10">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-white/80 block mb-2">
                Reach Me
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Let's Build Something Exceptional Together
              </h2>
            </div>
          </div>

          {/* =====================================
              FORM
          ===================================== */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-10 md:gap-12 w-full"
          >
            {/* Honeypot Spam Field (Hidden from real users) */}
            <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
              <label htmlFor="botcheck">Do not fill this field</label>
              <input
                type="text"
                id="botcheck"
                name="botcheck"
                value={formData.botcheck}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            {/* ===================================
                INPUTS + MESSAGE (2-COLUMN GRID)
            =================================== */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full">
              {/* LEFT COLUMN: Input Fields */}
              <div className="flex flex-col gap-7">
                {/* 2-col row for Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="fullName"
                      className="text-xs font-semibold tracking-wider text-white/90 uppercase mb-2"
                    >
                      Full Name <span className="text-white font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                      className={`w-full bg-transparent border-b pb-2 text-base md:text-lg focus:outline-none transition-colors placeholder-white/40 font-medium rounded-none ${
                        errors.fullName
                          ? 'border-yellow-300 focus:border-yellow-200 text-white'
                          : 'border-white/40 focus:border-white text-white'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-xs text-yellow-200 mt-1.5 font-medium flex items-center gap-1">
                        ⚠ {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold tracking-wider text-white/90 uppercase mb-2"
                    >
                      Email Address <span className="text-white font-bold">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      className={`w-full bg-transparent border-b pb-2 text-base md:text-lg focus:outline-none transition-colors placeholder-white/40 font-medium rounded-none ${
                        errors.email
                          ? 'border-yellow-300 focus:border-yellow-200 text-white'
                          : 'border-white/40 focus:border-white text-white'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-yellow-200 mt-1.5 font-medium flex items-center gap-1">
                        ⚠ {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* 2-col row for Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="phone"
                      className="text-xs font-semibold tracking-wider text-white/80 uppercase mb-2"
                    >
                      Phone Number{' '}
                      <span className="text-white/60 text-[10px] font-normal normal-case">
                        (Optional)
                      </span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-transparent border-b border-white/40 pb-2 text-base md:text-lg focus:outline-none focus:border-white transition-colors placeholder-white/40 font-medium rounded-none text-white"
                    />
                  </div>

                  {/* Company / Organization */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="company"
                      className="text-xs font-semibold tracking-wider text-white/80 uppercase mb-2"
                    >
                      Company / Org{' '}
                      <span className="text-white/60 text-[10px] font-normal normal-case">
                        (Optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Google, TechCorp"
                      className="w-full bg-transparent border-b border-white/40 pb-2 text-base md:text-lg focus:outline-none focus:border-white transition-colors placeholder-white/40 font-medium rounded-none text-white"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col">
                  <label
                    htmlFor="subject"
                    className="text-xs font-semibold tracking-wider text-white/90 uppercase mb-2"
                  >
                    Subject <span className="text-white font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship Opportunity / Freelance Project"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.subject}
                    className={`w-full bg-transparent border-b pb-2 text-base md:text-lg focus:outline-none transition-colors placeholder-white/40 font-medium rounded-none ${
                      errors.subject
                        ? 'border-yellow-300 focus:border-yellow-200 text-white'
                        : 'border-white/40 focus:border-white text-white'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-xs text-yellow-200 mt-1.5 font-medium flex items-center gap-1">
                      ⚠ {errors.subject}
                    </span>
                  )}
                </div>
              </div>

              {/* RIGHT COLUMN: Message Box */}
              <div className="flex flex-col h-full">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold tracking-wider text-white/90 uppercase mb-2"
                >
                  Message <span className="text-white font-bold">*</span>
                </label>
                <div className="relative flex-1 flex flex-col min-h-[160px] lg:min-h-[220px]">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, role, or how we can collaborate..."
                    required
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    className={`w-full flex-1 bg-transparent border-b pb-3 text-base md:text-lg focus:outline-none transition-colors placeholder-white/40 font-medium resize-none rounded-none ${
                      errors.message
                        ? 'border-yellow-300 focus:border-yellow-200 text-white'
                        : 'border-white/40 focus:border-white text-white'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <span className="text-xs text-yellow-200 mt-1.5 font-medium flex items-center gap-1">
                      ⚠ {errors.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* =====================================
                BOTTOM SECTION: Consent & Feedback Banner
            ===================================== */}
            <div className="flex flex-col gap-6 pt-2">
              {/* Feedback Alert Banner */}
              {feedbackMessage && (
                <div
                  role="alert"
                  aria-live="polite"
                  className={`p-4 rounded-xl text-sm font-medium transition-all duration-300 flex items-start gap-3 ${
                    status === 'success'
                      ? 'bg-emerald-950/70 border border-emerald-400 text-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                      : 'bg-blue-950/70 border border-blue-400/80 text-blue-100'
                  }`}
                >
                  <span className="text-lg">
                    {status === 'success' ? '✓' : 'ⓘ'}
                  </span>
                  <p className="leading-relaxed flex-1">{feedbackMessage}</p>
                </div>
              )}

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                {/* Permission Checkbox */}
                <div className="flex items-start gap-3.5 text-xs sm:text-sm font-medium text-white/90">
                  <input
                    type="checkbox"
                    id="permission"
                    name="permission"
                    checked={formData.permission}
                    onChange={handleChange}
                    className="mt-0.5 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer"
                    style={{ accentColor: '#ffffff' }}
                  />
                  <label
                    htmlFor="permission"
                    className="cursor-pointer max-w-sm leading-snug"
                  >
                    I give permission to contact me at this email address regarding my inquiry.
                  </label>
                </div>

                {/* Direct Email & Submit Button Container */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 w-full md:w-auto justify-end">
                  {/* Direct Email Link */}
                  <div className="text-xs text-white/80 font-medium">
                    <p className="leading-relaxed">
                      Or email directly at:{' '}
                      <a
                        href={`mailto:${myEmail}`}
                        className="underline font-bold text-white hover:text-white/80 transition-colors underline-offset-4"
                      >
                        {myEmail}
                      </a>
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`
                      px-8 py-3.5
                      rounded-full
                      border border-white/50
                      text-white
                      font-bold
                      text-sm
                      tracking-wide
                      flex items-center
                      justify-center
                      gap-3
                      transition-all
                      duration-300
                      group
                      whitespace-nowrap
                      cursor-pointer
                      shadow-lg
                      ${
                        status === 'sending'
                          ? 'opacity-60 cursor-not-allowed bg-white/10'
                          : status === 'success'
                          ? 'bg-emerald-600 border-emerald-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)]'
                          : status === 'error'
                          ? 'bg-blue-900 border-blue-500 text-white'
                          : 'bg-transparent hover:bg-white hover:text-blue-900 active:scale-95'
                      }
                    `}
                  >
                    {/* Sending Spinner */}
                    {status === 'sending' ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : status === 'success' ? (
                      <span className="flex items-center gap-2">
                        Message Sent ✓
                      </span>
                    ) : status === 'error' ? (
                      <span className="flex items-center gap-2">
                        Send Message
                      </span>
                    ) : (
                      'Send Message'
                    )}

                    {/* Arrow Icon */}
                    {status === 'idle' && (
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;