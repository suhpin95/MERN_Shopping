import React, {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getItems, deleteItem } from "../actions/itemActions";
import { connect } from "react-redux";

class ShoppingList extends Component {
     
    componentDidMount(){
        this.props.getItems();
    }

    onDelete = (id) => {
        this.props.deleteItem(id);
    }
    render() {
        const { items } = this.props.item; 
        return ( 
            <Container>
                <ListGroup>
                    <TransitionGroup className="shoppingList">
                        { items.map( ( {id,name} ) => 
                            (
                            <CSSTransition key = {id} timeout= {500} classNames="fade" >
                                <ListGroupItem>
                                    <Button className="remove-btn" color="danger" size="sm"
                                     onClick = { this.onDelete.bind(this,id) }
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

/**
 * <Button
 *  color = "dark"
 *  style = {{ marginBottom : '2rem' }}
 *  onClick = {() => 
 *      const name = prompt('Enter Items')
 *       if(name){
 *          this.setState( state=>{
 *              items : [...state.items, {
 *                  id : uuid(),
 *                  name 
 *              }]    
 *          } )    
 *      }    
 *  }
 * >
 *  
 * </Button>
 * 
 */