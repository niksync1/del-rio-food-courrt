import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
     CardTitle, Breadcrumb, BreadcrumbItem,  
     Button, Modal, ModalHeader, ModalBody, Label, Col, Row  } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';
import { Loading } from './LoadingComponent';
// import { baseUrl } from '../shared/baseUrl';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const required = (val) => val && val.length;

const isNumber = (val) => !isNaN(Number(val));
  
function RenderDish ({dish}) {            
        return (
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
        );

    }

    function RenderOrder ({dish,dishId, postOrder}) {            
        return (
            <div className="col-12 col-md-5 m-1">
            <Card>               
                <CardBody>
                <OrderForm dishId={dish.id}
                             dish={dish} 
                            postOrder={postOrder} 
                              />
                </CardBody>
            </Card>
            </div>
        );
}
class OrderForm extends Component{
    constructor(props) {
        super(props);
   
        this.toggleModal = this.toggleModal.bind(this);
        this.handleOrderSubmit= this.handleOrderSubmit.bind(this);

        this.state = {
            isModalOpen: false,
            isNavOpen:false
        };
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    handleOrderSubmit(values) {
        this.toggleModal();
        this.props.postOrder(this.props.dishId, values.size, values.ordernumber, values.details, values.author, values.location, values.contacttype, values.phonenumber)    
    }

    render(){
        return(
            <div>
                <Button outline onClick={this.toggleModal}> Place an Order</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody> 
                    <LocalForm onSubmit={(values) => this.handleOrderSubmit(values)}>
                    <Row className="form-group">
                            <Col>
                            <h6>Kindly fill and submit the details of your order <br/> and we will call back to confirm </h6>
                            <p>Ready to place your {this.props.dish.name} order?</p>
                            </Col>
                    </Row>
                        
                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="size" md={5}>Size of meal</Label>
                                <Control.select model=".size"
                                                name="size"
                                                className="form-control">                  
                                                <option >Kiddie size</option>
                                                <option >Small</option>
                                                <option selected>Medium</option>
                                                <option>Large</option>                            
                                </Control.select>  
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                            <Label htmlFor="ordernumber" md={5}>Number of meals</Label>
                            <Control.select model=".ordernumber"
                                            name="ordernumber"
                                            className="form-control">                  
                                            <option selected >1</option>
                                            <option >2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                            </Control.select>  
                            </Col>
                        </Row>
                        <Row className="form-group">
                                        <Label htmlFor="details" md={5}>Further details</Label>
                                </Row>
                                <Row className="form-group">
                                    <Col md={10}>
                                        <Control.textarea model=".details" id="details" name="details"
                                            rows="2"
                                            className="form-control" />                                      
                                    </Col>
                                </Row>
                        <Row className="form-group">
                                <Label htmlFor="author" md={5}>Your Name</Label>
                        </Row>
                        <Row className="form-group">
                                <Col md={10}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                        </Row>                               
                        <Row className="form-group">
                                <Label htmlFor="location" md={5}>Your Location</Label>
                        </Row>
                        <Row className="form-group">
                                <Col md={10}>
                                    <Control.text model=".location" id="location" name="location"
                                        placeholder="Location within Accra"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                        </Row> 
                        <Row className="form-group">
                            <Col>
                            <Label htmlFor="contacttype" md={5}>how may we contact you</Label>
                            <Control.select model=".contacttype"
                                            name="contacttype"
                                            className="form-control">                  
                                            <option selected >Mobile</option>
                                            <option >Whatsapp</option>
                                            
                            </Control.select>  
                            </Col>
                        </Row>
                            <Row>
                            <Col md={6}>
                                    <Control.text model=".phonenumber" id="phonenumber" name="phonenumber"
                                        placeholder="phonenumber"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(10), maxLength: maxLength(15),isNumber
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".phonenumber"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 10 characters',
                                            maxLength: 'Must be 15 characters or less',
                                            isNumber: 'Must be a number'

                                        }}
                                    />
                            </Col>
                        </Row>
                                <Row className="form-group">
                                    <Col md={{size: 10}}>
                                        <Button type="submit" color="primary">
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

}
    function RenderComments({comments,postComment, dishId}) {
        if (comments != null)
            return(
                <div className="col-12 col-md-5 ">
                    <h4>Comments from our customers</h4>
                    <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key ={comment.id}>
                            <p>{comment.comment}</p>
                            <p>--{comment.author} , {new Intl.DateTimeFormat('en-US',
                                { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        )
                    })}
                    </ul>
                    <CommentForm dishId={dishId} 
                                postComment={postComment} 
                                />
                </div>
            );
        else 
            return(
                <div></div>
            )
    }

    class CommentForm extends Component{

        constructor(props) {
            super(props);
       
            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit= this.handleSubmit.bind(this);

            this.state = {
                isModalOpen: false,
                isNavOpen:false
            };
        }

        toggleModal() {
            this.setState({
              isModalOpen: !this.state.isModalOpen
            });
        }

        handleSubmit(values) {
            this.toggleModal();
            this.props.postComment(this.props.dishId, values.rating, values.author, values.comment)    
        }

        render(){
            return(
                <div>
                    <Button outline onClick={this.toggleModal}> Submit Comment</Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody> 
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col>
                                <Label htmlFor="rating" md={5}>Rating</Label>
                                <Control.select model=".rating"
                                                name="rating"
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
                                                    model=".author"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required',
                                                        minLength: 'Must be greater than 2 characters',
                                                        maxLength: 'Must be 15 characters or less'
                                                    }}
                                                />
                                            </Col>
                                    </Row> 
                                    <Row className="form-group">
                                            <Label htmlFor="message" md={5}>Your Feedback</Label>
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={10}>
                                            <Control.textarea model=".comment" id="comment" name="comment"
                                                rows="6"
                                                className="form-control" />                                      
                                        </Col>
                                    </Row>
        
                                    <Row className="form-group">
                                        <Col md={{size: 10}}>
                                            <Button type="submit" color="primary">
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

}

const DishDetail = (props) => {
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) 
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div> 
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderOrder dishId={props.dish.id}
                                postOrder={props.postOrder}
                                dish={props.dish}/>          
                    
                </div>         
                <div className="row">                    
                    <RenderComments comments={props.comments} 
                                    postComment={props.postComment}
                                    dishId={props.dish.id}  />
                </div>       
            </div>

        );
    else
        return(
            <div></div>
        )
}

export default DishDetail;