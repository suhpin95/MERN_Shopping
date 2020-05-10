import React, {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getItems, deleteItem } from "../actions/itemActions";
import { connect } from "react-redux";

class ShoppingList extends Component {
     
    componentDidMount(){
        this.props.getItems();
    }

    onDelete = (_id) => {
        this.props.deleteItem(_id);
    }
    render() {
        const { items } = this.props.item; 
        return ( 
            <Container>
                <ListGroup>
                    <TransitionGroup className="shoppingList">
                        { items.map( ( {_id,name} ) => 
                            (
                            <CSSTransition key = {_id} timeout= {500} classNames="fade" >
                                <ListGroupItem>
                                    <Button className="remove-btn" color="danger" size="sm"
                                     onClick = { this.onDelete.bind( this, _id ) }
                                    > &times; 
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                            )) 
                        }
                    </TransitionGroup>
                </ListGroup>
            </Container>
         );
    }
}
const mapStatetoProps = (state)=>({
    item: state.item
}); 
export default connect(mapStatetoProps, { getItems, deleteItem } ) (ShoppingList);