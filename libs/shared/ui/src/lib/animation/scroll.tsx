
import { useRef } from 'react';

export function ScrollAnimatedText() {
  // gsap.registerPlugin(ScrollTrigger); // register the ScrollTrigger plugin
  const textRef = useRef(null);

  // useEffect(() => {
  //   const textElement = textRef.current;

  //   gsap.to(textElement, {
  //     scrollTrigger: {
  //       trigger: textElement,
  //       start: 'top 90%',
  //       end: 'bottom 20%',
  //       scrub: true,
  //     },
  //     x: 300,
  //     opacity: 1,
  //   });
  // }, []);

  return (
    <div>
      <h1 ref={textRef}>This text will animate as you scroll!</h1>
      <p>Scroll down to see the animation in action.</p>
    </div>
  );
};
