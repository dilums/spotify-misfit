const face = "#face";
const middle = "#middle";
const legRight = "#legRight";
const legLeft = "#legLeft";
const shadow = "#shadow";
const eyelidTop = "#eyelidTop";
const eyelidBottom = "#eyelidBottom";
const armRight = "#armRight";
const armLeft = "#armLeft";
const hair = "#hair";
const eyeballLeft = "#eyeballLeft";
const eyeballRight = "#eyeballRight";

const armRightExtended = "#armRightExtended";
const armLeftExtended = "#armLeftExtended";

gsap.set(middle, { transformOrigin: "50% 50%" });
gsap.set(face, { transformOrigin: "50% 90%" });
gsap.set(hair, { transformOrigin: "50% 100%" });

const tl = gsap.timeline({ ease: "power2.inOut", repeat: -1 });
tl.timeScale(4);

tl.to(middle, { y: 8, duration: 1 }, 0);
tl.to(face, { y: 16, duration: 1 }, 0);

tl.to(middle, { y: 0, duration: 1 }, 1);
tl.to(face, { y: 0, rotation: -5, duration: 1 }, 1);

tl.to(middle, { y: 8, duration: 1 }, 2);
tl.to(face, { y: 16, rotation: 0, duration: 1 }, 2);

tl.to(eyelidTop, { y: 25, duration: 0.5 }, 2.5);
tl.to(eyelidBottom, { y: -47, duration: 0.5 }, 2.5);

tl.to(eyeballLeft, { x: 12, duration: 0.3 }, 2.5);
tl.to(eyeballRight, { x: 12, duration: 0.3 }, 2.5);

tl.to(eyelidTop, { y: 0, duration: 0.5 }, 3);
tl.to(eyelidBottom, { y: 0, duration: 0.5 }, 3);
tl.to(middle, { y: 0, duration: 1 }, 3);
tl.to(face, { y: 0, rotation: 10, duration: 1 }, 3);
tl.to(hair, { rotation: 8, duration: 1 }, 3.3);
tl.to(face, { y: 0, duration: 1 }, 3);
tl.to(legRight, { y: -12, duration: 1 }, 3);
tl.to(armRight, { duration: 1, morphSVG: armRightExtended }, 3);

tl.to(middle, { x: 30, duration: 1 }, 4);
tl.to(shadow, { x: 30, duration: 1 }, 4);
tl.to(face, { x: 30, rotation: 0, duration: 1 }, 4);
tl.to(hair, { rotation: 0, duration: 1 }, 4.3);
tl.to(legRight, { x: 30, y: 0, duration: 1 }, 4);
tl.to(armRight, { duration: 1, morphSVG: armRight }, 4);

tl.to(legLeft, { x: 30, y: -12, duration: 1 }, 5);
tl.to(middle, { y: 8, duration: 1 }, 5);
tl.to(face, { y: 16, rotation: -5, duration: 1 }, 5);
tl.to(eyeballLeft, { x: 0, duration: 1 }, 5);
tl.to(eyeballRight, { x: 0, duration: 1 }, 5);

tl.to(legLeft, { y: 0, duration: 1 }, 6);
tl.to(middle, { y: 0, duration: 1 }, 6);
tl.to(face, { y: 0, rotation: 0, duration: 1 }, 6);

tl.to(middle, { y: 8, duration: 1 }, 7);
tl.to(face, { y: 16, duration: 1 }, 7);

tl.to(middle, { y: 0, duration: 1 }, 8);
tl.to(face, { y: 0, rotation: 5, duration: 1 }, 8);

tl.to(middle, { y: 8, duration: 1 }, 9);
tl.to(face, { y: 16, rotation: 0, duration: 1 }, 9);

tl.to(eyelidTop, { y: 25, duration: 0.5 }, 9.5);
tl.to(eyelidBottom, { y: -47, duration: 0.5 }, 9.5);

tl.to(eyeballLeft, { x: -12, duration: 0.3 }, 9.5);
tl.to(eyeballRight, { x: -12, duration: 0.3 }, 9.5);

tl.to(eyelidTop, { y: 0, duration: 0.5 }, 10);
tl.to(eyelidBottom, { y: 0, duration: 0.5 }, 10);
tl.to(middle, { y: 0, duration: 1 }, 10);
tl.to(face, { y: 0, rotation: -10, duration: 1 }, 10);
tl.to(hair, { rotation: -8, duration: 1 }, 10.3);
tl.to(face, { y: 0, duration: 1 }, 10);
tl.to(legLeft, { y: -12, duration: 1 }, 10);
tl.to(armLeft, { duration: 1, morphSVG: armLeftExtended }, 10);

tl.to(middle, { x: 0, duration: 1 }, 11);
tl.to(shadow, { x: 0, duration: 1 }, 11);
tl.to(face, { x: 0, rotation: 0, duration: 1 }, 11);
tl.to(hair, { rotation: 0, duration: 1 }, 11.3);
tl.to(legLeft, { x: 0, y: 0, duration: 1 }, 11);
tl.to(armLeft, { duration: 1, morphSVG: armLeft }, 11);

tl.to(legRight, { x: 0, y: -12, duration: 1 }, 12);
tl.to(middle, { y: 8, duration: 1 }, 12);
tl.to(face, { y: 16, rotation: -5, duration: 1 }, 12);
tl.to(eyeballLeft, { x: 0, duration: 1 }, 12);
tl.to(eyeballRight, { x: 0, duration: 1 }, 12);

tl.to(legRight, { y: 0, duration: 1 }, 13);
tl.to(middle, { y: 0, duration: 1 }, 13);
tl.to(face, { y: 0, rotation: 0, duration: 1 }, 13);
