import { gsap } from 'gsap';

export const animateFadeAndSlide = (elements, updateContentCallback, options = {}) => {
  const {
    opacityOut = 0,
    opacityIn = 1,
    yOut = -20,
    yIn = 0,
    durationOut = 0.2,
    durationIn = 0.5,
    delayIn = 0.1,
  } = options;

  gsap.to(elements, {
    opacity: opacityOut,
    y: yOut,
    duration: durationOut,
    onComplete: () => {
      updateContentCallback();

      gsap.fromTo(
        elements,
        { opacity: opacityOut, y: -yOut },
        { opacity: opacityIn, y: yIn, duration: durationIn, delay: delayIn }
      );
    },
  });
};
