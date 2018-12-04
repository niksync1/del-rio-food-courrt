import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
     constructor(props){
     super(props);
    }
   
 render(){
            return (
            <div className="container">
                <div className="row">                                     
                       {menu}                    
                </div>
               <DishDetail dish={this.state.selectedDish}></DishDetail>
            </div>
            );
    }
}
export default Menu;