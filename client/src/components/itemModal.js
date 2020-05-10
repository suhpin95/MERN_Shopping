import React,{Component} from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    Form,
    FormGroup,
    Label,
    Input
}
from "reactstrap";
import { connect } from "react-redux";
import { postItem } from "../actions/itemActions";

class ItemModal extends Component {
    
    state = { 
        modal : false,
        name : ''
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
        const newItem = {
            name : this.state.name
        }

        this.props.postItem(newItem) 
     } 
    render() { 
        return ( 
            <div>
                <Button color="dark" 
                    style = {{marginBottom: '2rem'}}
                    onClick = {this.toggle}
                >
                    Add Item
                </Button>
                <Modal
                    toggle = {this.toggle}
                    isOpen = {this.state.modal}
                >
                    <ModalHeader toggle = {this.toggle}>Add Cart</ModalHeader>
                    <ModalBody>
                        <Form onSubmit = {this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input 
                                    type="text"
                                    name = "name"
                                    id = "item"
                                    placeholder="Add item"
                                    onChange = {this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style = {{marginTop : "2rem"}}
                                    display = "block"
                                >
                                    Add</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
         );
    }
}
 const mapStatetoProps = (state)=>({
    item:state.item
 })
export default connect( mapStatetoProps, {postItem} )(ItemModal);