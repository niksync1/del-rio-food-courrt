import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import {Link} from 'react-router-dom';

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

    function RenderComments(commentsArr) {
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
        // const commentItem = props.comments.map((comment) => {
        //     return ( <RenderComments comment={comment} />
              
        //     );
        // } )     
    

   const DishDetail = (props) => {
          let commentItem;
          commentItem = RenderComments(props.comments)
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
                                {commentItem} 
                            </div>                        
                    </div>
                </div>
                    );            
                  }
        


export default DishDetail;