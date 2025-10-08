import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function SplitComponent({ children, selector = "#heading" }) {
  const myRef = useRef(null);

  useEffect(() => {
    const targetElement = myRef.current?.querySelector(selector);
    if (!targetElement) return;

    // Ensure fonts are ready before splitting
    document.fonts.ready.then(() => {
      const split = SplitText.create(targetElement, { type: "chars" });

      gsap.from(split.chars, {
        y: 20,
        autoAlpha: 0,
        stagger: 0.05,
        duration: 1,
      });
    });
  }, [selector]);

  return <div ref={myRef}>{children}</div>;
}

SplitComponent.propTypes = {
  children: PropTypes.node.isRequired,
  selector: PropTypes.string,
};
