import React,{Component} from 'react';
import RegsiterModal from "./auth/RegsiterModal";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';

class AppNavabar extends Component {
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state={
            isOpen : false
        }
    }
    toggle = ()=>{
        this.setState({
            isOpen : !this.state.isOpen
        })
    }
    render() { 
        return ( 
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">
                            Shopping List
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <RegsiterModal/>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
         );
    }
    
}



export default AppNavabar;