import React,{Component} from 'react';
import {
    Button,
    Modal,
    NavLink,
    ModalBody,
    ModalHeader,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
}
from "reactstrap";
import { connect } from "react-redux";
import { register } from "../../actions/authAction"

class RegisterModal extends Component {
    state = { 
        modal : false,
        name : '',
        emailId: '',
        passWord: ''
     }

     componentDidUpdate(previousProps){
        const { error } = this.props;
        if(error !== previousProps.error){
            // check register error
            if(error.id === "REGISTER_FAIL"){
                this.setState({
                    msg : error.msg.msg
                })
            } else{
                this.setState({
                    msg : null
                })
            }
        }
     }

     toggle = ()=> {
         this.setState({
            modal : !this.state.modal
         })
     }

     onChange = (event)=>{
        this.setState( { [event.target.name] : event.target.value} )
     }
     onSubmit = (event) => {
        event.preventDefault();
        const {name , emailId, passWord} = this.state;

        const newUser = {
            name, 
            emailId, 
            passWord
        }
        
        this.props.register(newUser)   

     } 
    render() { 
        return ( 
            <div>
                <NavLink onClick={ this.toggle }  href="#"> 
                    Register 
                </NavLink> 
                <Modal toggle = {this.toggle} isOpen = {this.state.modal} >
                    <ModalHeader toggle = {this.toggle}>Register</ModalHeader>
                    <ModalBody>
                        { this.state.msg ? ( <Alert color='danger'> { this.state.msg } </Alert>) : null }
                        <Form onSubmit = {this.onSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input 
                                    type="text"
                                    name = "name"
                                    id = "name"
                                    placeholder="Name"
                                    className = "mb-3"
                                    onChange = {this.onChange}
                                />

                                 <Label for="email">Email</Label>
                                <Input 
                                    type="email"
                                    name = "email"
                                    id = "email"
                                    placeholder="Email"
                                    className = "mb-3"
                                    onChange = {this.onChange}
                                />
                                
                                <Label for="password">Password</Label>
                                <Input 
                                    type="password"
                                    name = "password"
                                    id = "password"
                                    placeholder="Password"
                                    className = "mb-3"
                                    onChange = {this.onChange}
                                />
                                
                                <Button
                                    color="dark"
                                    style = {{marginTop : "2rem"}}
                                    display = "block"
                                >
                                    Register</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
         );
    }
}
 const mapStatetoProps = (state)=>({
    isAuthenticated: state.auth,
    error : state.error
 })
export default connect( mapStatetoProps, { register } )(RegisterModal);