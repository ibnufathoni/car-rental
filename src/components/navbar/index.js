import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody
} from 'reactstrap';

// export default function Header(){
//     const [collapsed, setCollapsed] = useState(false);
//     const toggleNavbar = () => setCollapsed(!collapsed);
//
//     return (
//         <>
//             <Navbar color="light" light className="navbar-container sticky-top navbar-container" expand="md">
//                     <NavbarBrand href="#">
//                         <img src="/img/logo.svg" alt="logo BCR"/>
//                     </NavbarBrand>
//                     <NavbarToggler onClick={toggleNavbar} />
//                     <Collapse navbar className='navbar-section'>
//                         <Nav className="ml-auto" navbar>
//                             <NavItem>
//                                 <NavLink href="/our-seriveces/">Our Services</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink href="/why-us/">Why Us</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink href="/testimonial/">Testimonial</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink href="FAQ">FAQ</NavLink>
//                             </NavItem>
//                         </Nav>
//                     </Collapse>
//                     <Offcanvas toggle={toggleNavbar} isOpen={collapsed} direction='end'>
//                         <OffcanvasHeader toggle={toggleNavbar}>
//                             Rental Car
//                         </OffcanvasHeader>
//                         <OffcanvasBody>
//                             <Nav className="ml-auto navbar-section" navbar>
//                                 <NavItem>
//                                     <NavLink href="/our-seriveces/">Our Services</NavLink>
//                                 </NavItem>
//                                 <NavItem>
//                                     <NavLink href="/why-us/">Why Us</NavLink>
//                                 </NavItem>
//                                 <NavItem>
//                                     <NavLink href="/testimonial/">Testimonial</NavLink>
//                                 </NavItem>
//                                 <NavItem>
//                                     <NavLink href="FAQ">FAQ</NavLink>
//                                 </NavItem>
//                             </Nav>
//                         </OffcanvasBody>
//                     </Offcanvas>
//             </Navbar>
//         </>
//     )
// }
//


export default function Header(props) {
    const [collapsed, setCollapsed] = useState(false);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <>
            <Navbar color="light" light className=' border-5 border-black' expand="md" fixed="top" id="navbar">
                <NavbarBrand href="/">
                    <img src="/img/logo.svg" alt="logo BCR"/>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse navbar className='navbar-section'>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/services/">Our Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/why-us/">Why Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/testimonial/">Testimonial</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/FAQ/">FAQ</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/cart">Cart</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <Offcanvas toggle={toggleNavbar} isOpen={collapsed} direction='end' fade>
                    <OffcanvasHeader toggle={toggleNavbar}>
                        BCR
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <Nav className="ml-auto navbar-section" navbar>
                            <NavItem>
                                <NavLink href="/#services">Our Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/#about">Why Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/#testimonial">Testimonial</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/#faq">FAQ</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/cart">Cart</NavLink>
                            </NavItem>
                        </Nav>
                    </OffcanvasBody>
                </Offcanvas>
            </Navbar>
        </>
    );
}



// export default function Header(){
//     return(
//         <nav id="navbar" className="navbar navbar-expand-md navbar-light sticky-top">
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="#">
//                     <img src="/img/logo.svg" alt="logo BCR"/></a>
//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-bs-toggle="offcanvas"
//                     data-bs-target="#mainNav"
//                     aria-controls="offcanvasWithBothOptions"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//
//                 <div id="mainNav" className="offcanvas ofkanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1"
//                      aria-labelledby="offcanvasWithBothOptionsLabel" data-bs-backdrop="false">
//                     <div className="offcanvas-header">
//                         <h5 className="offcanvas-title fw-bold" id="offcanvasDarkLabel">BCR</h5>
//                         <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas"
//                                 aria-label="Close"></button>
//                     </div>
//                     <ul className="offcanvas-body navbar-nav">
//                         <li>
//                             <a className="nav-link text-capitalize" href="#services"
//                             >our services</a
//                             >
//                         </li>
//                         <li>
//                             <a className="nav-link text-capitalize" href="#about">why us</a>
//                         </li>
//                         <li>
//                             <a className="nav-link text-capitalize" href="#testimonial"
//                             >testimonial</a
//                             >
//                         </li>
//                         <li><a className="nav-link text-uppercase" href="#faq">faq</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     )
// }