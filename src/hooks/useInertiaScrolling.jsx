// import React, { useEffect, useRef } from "react";
//
// let isDown = false;
// let startY;
// let scrollTop;
// let velY = 0;
// let momentumID;
//
// /*
// * const slider = document.querySelector('.animated-page');
//   let isDown = false;
//   let startY;
//   let scrollTop;
//
//   slider.addEventListener('mousedown', (e) => {
//     isDown = true;
//     slider.classList.add('active');
//     startY = e.pageY - slider.offsetTop;
//     scrollTop = slider.scrollTop;
//     cancelMomentumTracking();
//   });
//
//
//   slider.addEventListener('mouseleave', () => {
//     isDown = false;
//     slider.classList.remove('active');
//   });
//
//
//   slider.addEventListener('mouseup', () => {
//     isDown = false;
//     slider.classList.remove('active');
//     beginMomentumTracking();
//   });
//
//
//   slider.addEventListener('mousemove', (e) => {
//     if(!isDown) return;
//     e.preventDefault();
//     const x = e.pageY - slider.offsetTop;
//     const walk = (x - startY) * 3; //scroll-fast
//     let prevScrollTop = slider.scrollTop;
//     slider.scrollTop = scrollTop - walk;
//     velY = slider.scrollTop - prevScrollTop;
//   });
//
//   // Momentum
//
//   let velY = 0;
//   let momentumID;
//
//   slider.addEventListener('wheel', (e) => {
//     cancelMomentumTracking();
//   });
//
//   function beginMomentumTracking(){
//     cancelMomentumTracking();
//     momentumID = requestAnimationFrame(momentumLoop);
//   }
//   function cancelMomentumTracking(){
//     cancelAnimationFrame(momentumID);
//   }
//   function momentumLoop(){
//     slider.scrollTop += velY;
//     velY *= 0.95;
//     if (Math.abs(velY) > 0.5){
//       momentumID = requestAnimationFrame(momentumLoop);
//     }
//   }
// *
// * */
//
// export function useInertiaScrolling(element, isDraggingRef) {
//   const mouseDownHandler = (e) => {
//     isDown = true;
//     document.querySelector(".animated-page").classList.add("active");
//     startY = e.pageY - document.querySelector(".animated-page").offsetTop;
//     scrollTop = document.querySelector(".animated-page").scrollTop;
//     cancelMomentumTracking();
//   };
//
//   const mouseLeaveHandler = () => {
//     isDown = false;
//     document.querySelector(".animated-page").classList.remove("active");
//   };
//
//   const mouseUpHandler = () => {
//     isDown = false;
//     document.querySelector(".animated-page").classList.remove("active");
//     beginMomentumTracking();
//   };
//
//   const mouseMoveHandler = (e) => {
//     if (
//       !isDraggingRef.current ||
//       document.querySelector(".animated-page").style.top === "0px"
//     ) {
//       if (!isDown) return;
//       e.preventDefault();
//       const y = e.pageY - document.querySelector(".animated-page").offsetTop;
//       const walk = (y - startY) * 0.9; //scroll-fast
//       let prevScrollTop = document.querySelector(".animated-page").scrollTop;
//       document.querySelector(".animated-page").scrollTop = scrollTop - walk;
//       velY = document.querySelector(".animated-page").scrollTop - prevScrollTop;
//     } else {
//       cancelMomentumTracking();
//     }
//   };
//
//   const wheelHandler = (e) => {
//     cancelMomentumTracking();
//   };
//
//   useEffect(() => {
//     setTimeout(() => {
//       if (document.querySelector(".animated-page")) {
//         document
//           .querySelector(".animated-page")
//           .addEventListener("mousedown", mouseDownHandler);
//         document
//           .querySelector(".animated-page")
//           .addEventListener("mouseleave", mouseLeaveHandler);
//         document
//           .querySelector(".animated-page")
//           .addEventListener("mouseup", mouseUpHandler);
//         document
//           .querySelector(".animated-page")
//           .addEventListener("mousemove", mouseMoveHandler);
//         document
//           .querySelector(".animated-page")
//           .addEventListener("wheel", wheelHandler);
//       }
//     }, 1000);
//
//     return () => {
//       if (document.querySelector(".animated-page")) {
//         document
//           .querySelector(".animated-page")
//           .removeEventListener("mousedown", mouseDownHandler);
//         document
//           .querySelector(".animated-page")
//           .removeEventListener("mouseleave", mouseLeaveHandler);
//         document
//           .querySelector(".animated-page")
//           .removeEventListener("mouseup", mouseUpHandler);
//         document
//           .querySelector(".animated-page")
//           .removeEventListener("mousemove", mouseMoveHandler);
//         document
//           .querySelector(".animated-page")
//           .removeEventListener("wheel", wheelHandler);
//       }
//     };
//   }, [document.querySelector(".animated-page")]);
//
//   function beginMomentumTracking() {
//     cancelMomentumTracking();
//     momentumID = requestAnimationFrame(momentumLoop);
//   }
//
//   function cancelMomentumTracking() {
//     cancelAnimationFrame(momentumID);
//   }
//
//   function momentumLoop() {
//     if (isDraggingRef.current) {
//       cancelMomentumTracking();
//     }
//     document.querySelector(".animated-page").scrollTop += velY;
//     velY *= 0.98;
//     if (Math.abs(velY) > 0.5) {
//       momentumID = requestAnimationFrame(momentumLoop);
//     }
//   }
// }
