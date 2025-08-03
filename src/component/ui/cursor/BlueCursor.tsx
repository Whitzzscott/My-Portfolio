import { Box } from "@mui/material";
import { useBlueCursor } from "@components";

export function BlueCursor() {
  const { cursorRef, waveRef, visible } = useBlueCursor();

  return (
    <>
      <Box
        ref={cursorRef}
        sx={{
          display: visible ? "block" : "none",
          position: "fixed",
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "2px solid #4da3ff",
          background: "rgba(255, 255, 255, 0.07)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "0 0 12px rgba(77, 163, 255, 0.25)",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          transition: "transform 0.08s ease-out, width 0.2s ease, height 0.2s ease, box-shadow 0.2s ease",
        }}
        className="custom-cursor"
      />
      <Box
        ref={waveRef}
        className="blue-wave"
        sx={{
          position: "fixed",
          width: 160,
          height: 160,
          borderRadius: "50%",
          backgroundColor: "rgba(77, 163, 255, 0.18)",
          transform: "translate(-50%, -50%) scale(0)",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "transform 0.6s ease, opacity 0.6s ease",
          opacity: 0,
        }}
      />
      <style>
        {`
          .blue-wave.active {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
            animation: waveFade 0.6s ease-out forwards;
          }
          @keyframes waveFade {
            0% {
              transform: translate(-50%, -50%) scale(0);
              opacity: 0.6;
            }
            100% {
              transform: translate(-50%, -50%) scale(1.8);
              opacity: 0;
            }
          }
          .custom-cursor.hovering {
            width: 44px !important;
            height: 44px !important;
            box-shadow: 0 0 20px rgba(174, 228, 255, 0.3);
            background: rgba(174, 228, 255, 0.05);
            border-color: #aee4ff;
          }
          button:hover,
          [role="button"]:hover {
            cursor: none !important;
          }
          a:hover,
          .hover-target:hover {
            cursor: none !important;
          }
        `}
      </style>
    </>
  );
}
