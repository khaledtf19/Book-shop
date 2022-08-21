import { Nav, NavItem, NavList } from "../";

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem name="Home" link="/" />
        <NavItem name="viewAll" link="/view" />
      </NavList>
    </Nav>
  );
};

export default Navbar;
