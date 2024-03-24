// import { useEffect } from "react";

// const useSmoothScroll = (navbarSelector: string) => {
//   useEffect(() => {
//     const handleSmoothScroll = (event: MouseEvent) => {
//       const target = event.target as HTMLAnchorElement;
//       if (target && target.hash) {
//         const targetId = target.hash.substring(1);
//         const targetSection = document.getElementById(targetId);

//         if (targetSection) {
//           event.preventDefault();
//           window.scrollTo({
//             top: targetSection.offsetTop,
//             behavior: "smooth",
//           });
//         }
//       }
//     };

//     const navbarLinks = document.querySelectorAll(navbarSelector);
//     navbarLinks.forEach((anchor) => {
//       anchor.addEventListener("click", handleSmoothScroll);
//     });

//     return () => {
//       navbarLinks.forEach((anchor) => {
//         anchor.removeEventListener("click", handleSmoothScroll);
//       });
//     };
//   }, [navbarSelector]);
// };

// export default useSmoothScroll;
