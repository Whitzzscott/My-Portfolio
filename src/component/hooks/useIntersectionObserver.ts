import { useEffect, useRef, useState } from "preact/hooks";
import { useTheme, useMediaQuery } from "@mui/material";

interface IntersectionCallbacks {
  onEnter?: () => void;
  onLeave?: () => void;
  onReEnter?: () => void;
}

export function useIntersectionObserver<T extends HTMLElement>(
  { onEnter, onLeave, onReEnter }: IntersectionCallbacks,
  options?: IntersectionObserverInit & { watchId?: string }
) {
  const ref = useRef<T | null>(null);
  const hasEnteredOnce = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (isMobile) {
      setIsVisible(true);
      onEnter?.();
      return;
    }

    const target = options?.watchId
      ? document.querySelector<HTMLElement>(`[data-watch-id="${options.watchId}"]`)
      : ref.current;

    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!hasEnteredOnce.current) {
              hasEnteredOnce.current = true;
              onEnter?.();
            } else {
              onReEnter?.();
            }
            setIsVisible(true);
          } else {
            if (isVisible) {
              onLeave?.();
            }
            setIsVisible(false);
          }
        }
      },
      options || { threshold: 0.2 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [
    isMobile,
    onEnter,
    onLeave,
    onReEnter,
    options?.threshold,
    options?.root,
    options?.rootMargin,
    options?.watchId,
    isVisible,
  ]);

  return { ref, isVisible };
}
