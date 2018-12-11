import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import {Link} from 'react-router-dom';
// import {Media} from 'reactstrap';

   function RenderDish({dish}) {
        
            return (
                <div key={dish.id} >
                    <Card >
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );       
    }

    function RenderComments({comment}) {
       if (comment != null) {
            return (
                    <div key={comment.id} >
                        <h4>Comments</h4>
                            <ul  className= "list-unstyled">                                  
                                <p>{comment.comment}</p>
                                <p>--{comment.author}, {new Intl.DateTimeFormat('en-US',
                                { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>                                                                      
                            </ul>
                    </div>
                );
            }
            else 
             return (<div></div>);
        }
        
    

   const DishDetail = (props) => {
         if (props.dish != null) 
             return (
                <div class="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>

                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">                        
                            <div className="col-12 col-md-6">
                              <RenderDish dish={props.dish} />  
                            </div>
                            <div className="col-12 col-md-6">                     
                                <RenderComments comment={props.comments} />
                            </div>                        
                    </div>
                </div>
                    );            
                  }
        


export default DishDetail;