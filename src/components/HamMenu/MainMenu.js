// import React, { useRef, useContext } from 'react';
// import styled from 'styled-components';
// import { useOnClickOutside } from '../../hooks/onClickOutside';
// import { MenuContext } from '../../context/navState';
// import { HamburgerButton } from './HamburgerButton';
// import { SideMenu } from './SideMenu';

// const Navbar = styled.div`
/* display: flex; */
/* position: fixed; */
/* top: 0; */
/* left: 0; */
/* left: auto; */
/* right: 0; */
/* box-sizing: border-box;
  outline: none;
  max-width: 100%;
  margin: 0px; */
/* align-items: center; */
/* background: #082bff none repeat scroll 0% 0%; */
/* color: rgb(248, 248, 248); */
/* min-width: 0px;
  min-height: 0px; */
/* flex-direction: row; */
/* justify-content: flex-start; */
/* padding: 6px 6px; */
/* box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px; */
/* z-index: 500; */
// `;

// export const MainMenu = () => {
//   const node = useRef();
//   const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
//   useOnClickOutside(node, () => {
//     // Only if menu is open
//     if (isMenuOpen) {
//       toggleMenuMode();
//     }
//   });

//   return (
//     <header ref={node}>
//       <Navbar>
//         <HamburgerButton />
//       </Navbar>
//       <SideMenu />
//     </header>
//   );
// };
