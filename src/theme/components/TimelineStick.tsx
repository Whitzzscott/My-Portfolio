import { Box, styled } from "@mui/material";

export const TimelineContainer = styled(Box)({
  position: "relative",
  width: "100%",
  maxWidth: 700,
  margin: "0 auto",
  paddingLeft: 24,
  paddingRight: 24,
  boxSizing: "border-box",
});

export const VerticalLine = styled(Box)({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: "50%",
  width: 4,
  backgroundColor: "#4da3ff",
  borderRadius: 2,
  transform: "translateX(-50%)",
  zIndex: 1,
});

interface BranchProps {
  side: "left" | "right";
}

export const Branch = styled(Box, {
  shouldForwardProp: (prop) => prop !== "side",
})<BranchProps>(({ side }) => ({
  position: "absolute",
  top: "2rem",
  width: 40,
  height: 2,
  backgroundColor: "#4da3ff",
  borderRadius: 1,
  left: side === "left" ? "50%" : "auto",
  right: side === "right" ? "50%" : "auto",
  transform: side === "left" ? "translateX(-100%)" : "translateX(100%)",
  zIndex: 1,
}));

export const Dot = styled(Box)({
  position: "absolute",
  top: "1.5rem",
  left: "50%",
  width: 16,
  height: 16,
  backgroundColor: "#4da3ff",
  borderRadius: "50%",
  transform: "translateX(-50%)",
  boxShadow: "0 0 8px 2px rgba(77, 163, 255, 0.7)",
  zIndex: 2,
});
