// import React, { useCallback, useEffect, useState } from "react";
//
// function getIsScrolledToBottom(el) {
//   return Math.abs(el.scrollHeight - el.scrollTop - el.clientHeight) < 1;
// }
//
// function getIsScrolledToTop(el) {
//   return el.scrollTop === 0;
// }
// function useCheckScrollBoundry(pageElement) {
//   const [hasReachedBottom, setHasReachedBottom] = useState(true);
//   const [hasReachedTop, setHasReachedTop] = useState(true);
//
//   const onScroll = useCallback(
//     (e) => {
//       const isBottom = getIsScrolledToBottom(pageElement);
//       // if (isBottom && isBottom !== hasReachedBottom) {
//       setHasReachedBottom(isBottom);
//       // }
//
//       const isTop = getIsScrolledToTop(pageElement);
//
//       // console.log({ isTop, hasReachedTop });
//
//       // if (isTop && isTop !== hasReachedTop) {
//       setHasReachedTop(isTop);
//       // }
//     },
//     [pageElement],
//   );
//
//   useEffect(() => {
//     if (pageElement) {
//       pageElement.addEventListener("scroll", onScroll);
//       pageElement.addEventListener("wheel", onScroll);
//     }
//
//     return () => {
//       // if (pageElement) {
//       // pageElement.removeEventListener("scroll", onScroll);
//       // pageElement.removeEventListener("wheel", onScroll);
//       // }
//     };
//   }, []);
//
//   return { hasReachedBottom, hasReachedTop };
// }
//
// export default useCheckScrollBoundry;
