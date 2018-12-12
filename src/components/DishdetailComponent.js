import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Media, Button, Modal, ModalHeader, ModalBody,  Label, Col, Row  } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class DishDetail extends Component{

    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.handleOrderSubmit= this.handleOrderSubmit.bind(this);
        this.state = {
            Rating:'',
            author:'',
            message:'',
        isModalOpen: false
        };
    };

    handleOrderSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));}

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

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

    CommentForm (){
        return(
                <div>
                    <div>                    
                         <Button onClick={this.toggleModal}> Submit Comment</Button>                          
                    </div>
                    <Modal isOpen={this.state.isModalOpen} 
                        toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>                            
                        
                        <LocalForm onSubmit={(values) => this.handleOrderSubmit(values)}>
                                    <Row className="form-group">
                                        <Label htmlFor="Rating" md={5}>Rating</Label>
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={{size: 10, offset: 0}}>
                                            <Control.select model=".Rating"
                                                name="Rating"
                                                className="form-control">                                  
                                                    
                                                <option >1</option>
                                                <option selected>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Control.select>  
                                        </Col>
                                    </Row>
        
                                    <Row className="form-group">
                                        <Label htmlFor="author" md={5}>Your Name</Label>
                                    </Row>
                                    <Row className="form-group">
                                            <Col md={10}>
                                                <Control.text model=".author" id="name" name="name"
                                                    placeholder="Your Name"
                                                    className="form-control"
                                                    validators={{
                                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                                    }}
                                                    />
                                                <Errors
                                                    className="text-danger"
                                                    model=".name"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required',
                                                        minLength: 'Must be greater than 2 characters',
                                                        maxLength: 'Must be 20 characters or less'
                                                    }}
                                                />
                                            </Col>
                                    </Row> 
                                    <Row className="form-group">
                                            <Label htmlFor="message" md={5}>Your Feedback</Label>
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={10}>
                                            <Control.textarea model=".message" id="message" name="message"
                                                rows="6"
                                                className="form-control" />                                      
                                        </Col>
                                    </Row>
        
                                    <Row className="form-group">
                                        <Col md={{size: 10}}>
                                            <Button type="submit" onClick={this.toggleModal} color="primary">
                                                Submit
                                            </Button>
                                        </Col>
                                    </Row>                           
                                </LocalForm>
                        
                        </ModalBody>
                    </Modal>  
                </div>
        );
    }

    renderComments(commentsArr) {
       if (commentsArr != null) {
        let commentf=this.CommentForm();
        const commentItem = commentsArr.map((comment) => {
            return ( 
               <div>            
            <Media list key= {comment.id} className="list-unstyled">
                <Media tag= "li">
                    <p>{comment.comment}</p>
                </Media>
                <Media tag= "li">
                --{comment.author} , {new Intl.DateTimeFormat('en-US',
                                { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                </Media>
            </Media>                      
            </div> 
            );
        } );        
            return (
                    <div>
                        <Media>
                            <h4>Comments</h4>
                        </Media>
                        {commentItem}  
                        {commentf}                                                                
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
                                <div>
                                    {commentItem} 
                                </div>
                                
                                
                            </div>                      
                    </div>
                
                </div>
                    );            
                  }
        
                }

export default DishDetail;