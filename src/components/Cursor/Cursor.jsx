// import React, { useCallback, useEffect, useRef } from "react";
// import styled from "styled-components";
//
// const CursorWrapper = styled.div`
//   height: 15px;
//   width: 15px;
//   border-radius: 50%;
//   position: fixed;
//   transform: translate(-50%, -50%);
//   pointer-events: none;
//   z-index: 999;
//   background: #fff;
//   transition:
//     width 0.25s,
//     height 0.25s;
// `;
//
// function Cursor() {
//   const cursorRef = useRef(null);
//   const mouseMoveHandler = useCallback((event) => {
//     cursorRef.current.style.left = `${event.x}px`;
//     cursorRef.current.style.top = `${event.y}px`;
//   }, []);
//   useEffect(() => {
//     if (cursorRef.current) {
//       window.addEventListener("mousemove", mouseMoveHandler);
//     }
//
//     return () => {
//       window.removeEventListener("mousemove", mouseMoveHandler);
//     };
//   }, [cursorRef.current]);
//   return <CursorWrapper ref={cursorRef} />;
// }
//
// export default Cursor;
