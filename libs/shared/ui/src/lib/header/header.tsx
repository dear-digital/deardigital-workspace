import { GlobalInterface } from '@deardigital/shared/interfaces';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import LinkRenderer from '../link/link-renderer.component';
import NavigationLink from '../navigation/navigation-link';

/* eslint-disable-next-line */
export interface HeaderProps {
  globals: GlobalInterface | null;
 }

export function Header(props: HeaderProps) {
  const [togglerClassname, setTogglerClassname] = useState("toggler-default");

  return (
    <Navbar expand="lg" variant="light" bg="white" className="border-bottom border-light py-0" onToggle={() => setTogglerClassname("")}>
      <div className="container">
        <Link className="navbar-brand" href="/">
          dear digital
        </Link>
        <Navbar.Toggle aria-controls="main-navigation" className={togglerClassname}>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="main-navigation">
          {props.globals?.header &&
            (
              <ul className="navbar-nav ms-auto">
                {props.globals.header.navigation.map((item, key) => <NavigationLink key={key} {...item} />)}
              </ul>
            )}
          {props?.globals?.header?.cta && (
              <div className="my-3 my-lg-0 ms-lg-5">
                <LinkRenderer {...props.globals.header.cta} />
              </div>
            )}
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
