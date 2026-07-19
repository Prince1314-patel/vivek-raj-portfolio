import { useState, useEffect, useCallback, useRef } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselArrowButtons.jsx";

const PERSPECTIVE = 1600;
const SCALE_STEP = 0.16;
const MAX_VISIBLE = 2;
const DEPTH = 240;

function cssTransition(t) {
  const dur = t && typeof t.duration === "number" ? t.duration : 0.6;
  let ease = "cubic-bezier(0.22, 1, 0.36, 1)";
  const e = t?.ease;
  if (Array.isArray(e) && e.length === 4) {
    ease = `cubic-bezier(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]})`;
  }
  return { dur, ease };
}

/**
 * 3D coverflow carousel. Card size is derived from the container width and
 * `aspectRatio` (rather than fixed px), so portrait cover images fill the
 * card with minimal crop instead of being squashed into a landscape frame.
 */
export default function CoverflowGallery({
  slides = [],
  aspectRatio = 0.72,
  maxCardWidth = 320,
  minCardWidth = 190,
  tilt = 10,
  sideTilt = 6,
  gap = 8,
  opacity = 55,
  transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  autoplay = true,
  autoplayDirection = "rightToLeft",
  autoplayDelay = 1,
  onActiveChange,
}) {
  const n = slides.length;
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(maxCardWidth);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => {
      const available = el.clientWidth;
      const w = Math.max(minCardWidth, Math.min(maxCardWidth, available * 0.62));
      setCardWidth(w);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [maxCardWidth, minCardWidth]);

  const cardHeight = cardWidth / aspectRatio;

  useEffect(() => {
    setActive((a) => Math.max(0, Math.min(n - 1, a)));
  }, [n]);

  useEffect(() => {
    onActiveChange?.(active);
  }, [active, onActiveChange]);

  const moveDur = typeof transition?.duration === "number" ? transition.duration : 0.6;
  const lockRef = useRef(false);
  const lock = useCallback(() => {
    lockRef.current = true;
    window.setTimeout(() => {
      lockRef.current = false;
    }, Math.max(50, moveDur * 1000));
  }, [moveDur]);

  const step = useCallback(
    (dir) => {
      if (lockRef.current || n === 0) return;
      lock();
      setActive((a) => (((a + dir) % n) + n) % n);
    },
    [n, lock]
  );

  const handleCardClick = useCallback(
    (i) => {
      if (lockRef.current) return;
      lock();
      setActive((a) => (i === a ? a : i));
    },
    [lock]
  );

  useEffect(() => {
    if (!autoplay || n < 2) return undefined;
    const ms = Math.max(0.3, autoplayDelay) * 1000;
    const dir = autoplayDirection === "leftToRight" ? -1 : 1;
    const id = window.setInterval(() => step(dir), ms);
    return () => window.clearInterval(id);
  }, [autoplay, autoplayDirection, autoplayDelay, n, step]);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      }
    },
    [step]
  );

  const { dur, ease } = cssTransition(transition);
  const transitionCss = `transform ${dur}s ${ease}, opacity ${dur}s ${ease}`;
  const dim = 1 - Math.max(0, Math.min(100, opacity)) / 100;

  if (n === 0) return null;

  return (
    <div>
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: `${PERSPECTIVE}px`,
          overflow: "hidden",
          outline: "none",
        }}
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        onKeyDown={onKeyDown}
      >
        <div
          style={{
            position: "relative",
            width: cardWidth,
            height: cardHeight,
            transformStyle: "preserve-3d",
          }}
        >
          {slides.map((slide, i) => {
            let rel = i - active;
            if (rel > n / 2) rel -= n;
            if (rel < -n / 2) rel += n;
            const ax = Math.abs(rel);
            const visible = ax <= MAX_VISIBLE;
            const isActive = rel === 0;
            const sc = Math.max(0.4, 1 - ax * SCALE_STEP);
            const tx = rel * (gap * 30);
            const tz = -ax * DEPTH;
            const ry = -rel * tilt;
            const rz = rel * sideTilt;

            const cardStyle = {
              position: "absolute",
              left: "50%",
              top: "50%",
              width: cardWidth,
              height: cardHeight,
              borderRadius: 16,
              overflow: "hidden",
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
              transform: `translate(-50%, -50%) translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${sc})`,
              transition: transitionCss,
              opacity: visible ? 1 : 0,
              cursor: isActive ? "default" : "pointer",
              pointerEvents: visible ? "auto" : "none",
              backgroundColor: "#1a1a1a",
              border: "1px solid #232325",
            };

            return (
              <div
                key={slide.id ?? i}
                style={cardStyle}
                onClick={() => handleCardClick(i)}
                aria-label={slide.title}
                aria-hidden={!visible}
              >
                {slide.image ? (
                  <img
                    src={slide.image}
                    alt={slide.title || ""}
                    draggable={false}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      userSelect: "none",
                    }}
                  />
                ) : null}

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "#000000",
                    opacity: isActive ? 0 : dim,
                    transition: `opacity ${dur}s ${ease}`,
                    pointerEvents: "none",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
