import { Nav, NavItem, NavList } from "../";

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem name="Home" link="/" />
        <NavItem name="Page1" link="/page1" />
        <NavItem name="Page2" link="/page2" />
      </NavList>
    </Nav>
  );
};

export default Navbar;
