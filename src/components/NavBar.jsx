import {Container, Navbar, Nav} from 'react-bootstrap';

function NavBar(){
    return(
      <Navbar expand="lg" className="bg-body-tertiary header-navbar">  
        <Container>
          <h1>
            <Navbar.Brand href="/" title='넷마블문화재단'>넷마블문화재단</Navbar.Brand> 
          </h1>
          <Navbar className='d-none d-md-block'>
            <Nav className="ms-auto">
              <Nav.Link href="#home" title='재단소개'>재단소개</Nav.Link>
              <Nav.Link href="#link" title='재단활동'>재단활동</Nav.Link>
              <Nav.Link href="#link" title='재단소식'>재단소식</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
    </Navbar>
    )
}

export default NavBar;