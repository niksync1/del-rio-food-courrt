import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import {Link} from 'react-router-dom';

class DishDetail extends Component{

    constructor(props) {
        super(props);
    };

    renderDish(dish) {
        
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

     renderComments(commentsArr) {
       if (commentsArr != null) {
        const commentItem = commentsArr.map((comment) => {
            return ( 
                            
            <Media list key= {comment.id} className="list-unstyled">
                <Media tag= "li">
                    <p>{comment.comment}</p>
                </Media>
                <Media tag= "li">
                {comment.author} , {new Intl.DateTimeFormat('en-US',
                                { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                </Media>
            </Media>          
            
            );
        } );
            return (
                    <div>
                        <Media>
                            <h4>Comments</h4>
                        </Media>
                        {commentItem}
                    </div>
                );
            }
            else 
             return (<div></div>);
        }
    
    render () {
          let commentItem;
          commentItem = this.renderComments(this.props.comments);
          let dishItem;
          dishItem = this.renderDish(this.props.dish);
          
        if (this.props.dish != null)
             return (
                <div class="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>

                        <div className="col-12">
                            <h3>{this.props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">                        
                            <div className="col-12 col-md-6">
                             {dishItem} 
                            </div>
                            <div className="col-12 col-md-6">                     
                                {commentItem} 
                            </div>                        
                    </div>
                </div>
                    );            
                  }
        
                }

export default DishDetail;