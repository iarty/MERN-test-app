import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useContext(AuthContext);

  const toggleCollapse = () => {
    setIsOpen(!setIsOpen);
  };

  const logoutHandler = e => {
    e.preventDefault();
    logout();
    history.push("/");
  };

  return (
    <MDBNavbar color="indigo" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">Short links</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink to="/create">Create</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/links">You Links</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/" onClick={logoutHandler}>
              Exit
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Navbar;
