import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class DishDetail extends Component {
    constructor(props){
        super(props);
        this.state = {selectedDish:null};
                };
  const ddd = {  
    onDishSelect(dish){this.setState({selectedDish:dish})}
    
    renderDish(dish){      
    //    const renderComment= this.props.dishes.comments.map((dish) =>{
    //         return (dish.comments[0])}
    //         );




        if (dish !=null){
            return(  
                <div className="row">
                    <div className="col-12 col-sm-5 m-1">
                        <Card >
                            <CardImg top src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle> {dish.name}</CardTitle>
                                
                                <CardText>{dish.description}</CardText>
                                <CardText><span>Price </span>{dish.price}</CardText>
                            </CardBody>
                        </Card>     
                    </div>      
                    <div className="col-12 col-sm-5 m-1">         
                        <Card >
                            
                            <CardBody>
                                <CardTitle> {dish.name}</CardTitle>
                                
                                <h1><CardText>{dish.price}</CardText></h1>
                                <CardText></CardText>
                            </CardBody>
                        </Card> 
                    </div>
                </div> 
            )
        }
        else
            return(
                <div></div>
            );        
    }
    render (){
            const menu = this.props.dishes.map((dish) =>
                {
                    return (
                            <div  className="col-12 col-md-5 m-1">
                                <Card key={dish.id} onClick={()=> this.onDishSelect(dish)}>                            
                                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                                        <CardImgOverlay>
                                            <CardTitle>{dish.name}</CardTitle>
                                            
                                        </CardImgOverlay>                        
                                    </Card>
                            </div>                                     
                            )

                });
          

               
           
            return(
            <div className="container">
                <div className="row">                    
                        {menu}                    
                </div>
                <div className ="row">
                    <div  className="col-12 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>

               
            </div>
        );
    });                
}
export default DishDetail;