import { Nav, NavItem, Navbar, Offcanvas } from "react-bootstrap";
import ero from "../imgs/ero.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function TopNav() {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const expand = "lg";
  const handleScroll = () => {
    window.scrollTo({
      top: scrollPosition + 850,
      behavior: "smooth",
    });
    setScrollPosition(scrollPosition + 850);
    setTimeout(() => {
      setScrollPosition(0);
    }, 100);
  };
  return (
    <Navbar expand={expand} className='bg-body-tertiary  position-static'>
      <NavLink to={"/"}>
        <Navbar.Brand>
          <img
            alt=''
            src={ero}
            width='190'
            height='80'
            className='d-inline-block align-top'
          />
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        // placement='end'
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            Erofetish
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className='justify-content-end flex-grow-1 pe-3'>
            <NavLink className='pe-4 text-dark text-center' to={"/"}>
              <b className='text-danger'>HOME</b>
            </NavLink>
            <NavLink className='pe-4 text-dark' onClick={handleScroll}>
              SHOP
            </NavLink>
            <NavItem
              className='pe-4 text-dark'
              role='button'
              onClick={() => navigate("/category/64c589768f600cf794a5ca73")}
            >
              MENS TOYS
            </NavItem>
            <NavItem
              className='pe-4 text-dark'
              role='button'
              onClick={() => navigate("/category/64c586df8f600cf794a5ca49")}
            >
              ANAL TOYS
            </NavItem>
            <NavItem
              className='pe-4 text-dark'
              role='button'
              onClick={() => navigate("/category/64c587688f600cf794a5ca61")}
            >
              DILDOS
            </NavItem>
            <NavLink className='pe-5 text-dark' to={"/contact"}>
              CONTACT US
            </NavLink>{" "}
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
}

export default TopNav;
