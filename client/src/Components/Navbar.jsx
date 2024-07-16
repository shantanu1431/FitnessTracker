import React, { useState } from "react";
import styled from "styled-components";
import { Link as LinkR, NavLink } from "react-router-dom";
import LogoImage from "../utils/Images/Logo.png";
import { MenuRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/userSlice.js";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: black;
  border-bottom: 1px solid ${({ theme }) => theme.text_secondary + 20};
`;
const NavContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 24px;
  display: flex;
  gap: 14px;
  align-itmes: center;
  justify-content: space-between;
  font-size: 1rem;
`;
const NavLogo = styled(LinkR)`
    width:100%;
    display: flex;
    align-items: center;
    gap: 16px;
    padding 0 6px;
    font-weight: 600;
    font-size :18px;
    text-decoration: none;
    color: ${({ theme }) => theme.black};
`;
const Logo = styled.img`
    height 42px;
    width: 42px;
`;

const MobileIcon = styled.div`
    color: ${({ theme }) => theme.text_primary}
    display: none;
    @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Navlinks = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all ls slide-in;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.8px solid ${({ theme }) => theme.primary};
  }
`;

const UserContainer = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    gap:16px;
    align-items: center;
    padding 0 6px;
    color: ${({ theme }) => theme.primary};
`;

const TextButton = styled.div`
  text-align: end;
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 90%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.bg};
  position: absolute;
  top: 80px;
  right: 0;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "transformY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? " 1000" : "-1000")};
`;

const Navbar = ({ currentUser }) => {
  const dispatch = useDispatch();
  const [isOpen, setisOpen] = useState(false);
  return (
    <Nav>
      <NavContainer>
        <MobileIcon onClick={() => setisOpen(!isOpen)}>
          <MenuRounded sx={{ color: "inherit" }} />
        </MobileIcon>
        <NavLogo to="/">
          <Logo src={LogoImage} alt="logo" />
          Fittrack
        </NavLogo>

        <MobileMenu isOpen={isOpen}>
          <Navlinks to="/">Dashboard</Navlinks>
          <Navlinks to="/workouts">Workouts</Navlinks>
          <Navlinks to="/tutorials">Tutorials</Navlinks>
          <Navlinks to="/blogs">Blogs</Navlinks>
          <Navlinks to="/contact">Contacts</Navlinks>
        </MobileMenu>

        <NavItems>
          <Navlinks to="/">Dashboard</Navlinks>
          <Navlinks to="/workouts">Workouts</Navlinks>
          <Navlinks to="/tutorials">Tutorials</Navlinks>
          <Navlinks to="/blogs">Blogs</Navlinks>
          <Navlinks to="/contact">Contacts</Navlinks>
        </NavItems>
        <UserContainer>
          <Avatar src={currentUser?.img}> {currentUser?.name[0]}</Avatar>
          <TextButton onClick={() => dispatch(logout())}>Logout</TextButton>
        </UserContainer>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
