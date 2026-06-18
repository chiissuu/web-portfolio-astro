import { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

export default function NavbarScrollController() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = current - previous;

    if (current < 80) {
      setHidden(false);
      return;
    }

    if (diff > 8) {
      setHidden(true);
    }

    if (diff < -8) {
      setHidden(false);
    }
  });

  useEffect(() => {
    const navbar = document.querySelector("#menu");

    if (!navbar) return;

    navbar.classList.toggle("navbar-hidden", hidden);
  }, [hidden]);

  return null;
}