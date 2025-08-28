import { useRef } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, useGSAP);
gsap.set("h1", { opacity: 1 });

export default function SplitComponent({ children }) {
  const myRef = useRef(null);
  useGSAP(
    () => {
      const split = SplitText.create("#heading", {
        type: "words",
      });

      gsap.from(split.words, {
        y: 20,
        autoAlpha: 0,
        stagger: 0.05,
        duration: 1,
      });
    },
    {
      scope: myRef,
    }
  );
  return <div ref={myRef}>{children}</div>;
}

SplitComponent.propTypes = {
  children: PropTypes.node.isRequired,
  selector: PropTypes.string.isRequired,
};
