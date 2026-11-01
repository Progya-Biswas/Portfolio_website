
import React, { useState, useRef, useEffect } from "react";

const TOTAL_FRAMES = 36;
const IMAGE_PATH = "/models/humanoid-robot-frames";

export default function HumanoidRobot3D() {
  const [frame, setFrame] = useState(26);
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const dragging = useRef(false);
  const lastX = useRef(0);
  const movement = useRef(0);

  // =====================================
  // PRELOAD ALL ROBOT FRAMES
  // =====================================

  useEffect(() => {
    let loadedCount = 0;
    let cancelled = false;

    const images = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();

      img.src = `${IMAGE_PATH}/frame-${String(i).padStart(2, "0")}.png`;

      img.onload = () => {
        loadedCount++;

        if (loadedCount === TOTAL_FRAMES && !cancelled) {
          setLoaded(true);
          setLoadError(false);
        }
      };

      img.onerror = () => {
        console.error("Failed to load robot frame:", img.src);

        if (!cancelled) {
          setLoadError(true);
        }
      };

      images.push(img);
    }

    return () => {
      cancelled = true;
    };
  }, []);

  // =====================================
  // POINTER / DRAG CONTROLS
  // =====================================

  const handlePointerDown = (e) => {
    dragging.current = true;
    lastX.current = e.clientX;
    movement.current = 0;

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragging.current) return;

    const delta = e.clientX - lastX.current;

    lastX.current = e.clientX;
    movement.current += delta;

    const steps = Math.trunc(movement.current / 8);

    if (steps !== 0) {
      movement.current -= steps * 8;

      setFrame((prev) => {
        return (prev - steps + TOTAL_FRAMES) % TOTAL_FRAMES;
      });
    }
  };

  const handlePointerUp = () => {
    dragging.current = false;
  };

  // =====================================
  // CURRENT FRAME IMAGE
  // =====================================

  const imagePath = `${IMAGE_PATH}/frame-${String(
    frame + 1
  ).padStart(2, "0")}.png`;

  // =====================================
  // COMPONENT
  // =====================================

  return (
    <div
      className="relative w-full h-[420px] md:h-[600px]
      flex items-center justify-center overflow-hidden"
    >

      {/* Red ambient glow */}
      <div
        className="absolute inset-10 rounded-full
        bg-red-600/15 blur-[110px] pointer-events-none"
      />

      {/* Robot viewer */}
      <div
        className="relative z-10 w-full h-full
        flex items-center justify-center
        cursor-grab active:cursor-grabbing
        select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onLostPointerCapture={handlePointerUp}
        style={{ touchAction: "pan-y" }}
      >

        {loaded ? (
          <img
            src={imagePath}
            alt="Interactive 360-degree humanoid robot"
            draggable={false}
            className="w-full h-full object-contain pointer-events-none"
            onError={() => {
              console.error("Current frame failed:", imagePath);
            }}
          />
        ) : loadError ? (
          <p className="text-red-400 text-sm text-center">
            Unable to load robot images.
            <br />
            Check the image folder and filenames.
          </p>
        ) : (
          <p className="text-white/50 text-sm tracking-widest">
            LOADING ROBOT...
          </p>
        )}

      </div>

      {/* Rotation instructions */}
      <div
        className="absolute bottom-4 z-20
        text-center pointer-events-none"
      >
        <p
          className="text-white/50 text-[10px]
          tracking-[0.3em] uppercase"
        >
          Drag to Rotate 360°
        </p>

        <p
          className="text-white/30 text-[9px]
          tracking-[0.35em] mt-2 uppercase"
        >
          Explore Beyond Limits
        </p>
      </div>

    </div>
  );
}
