import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import {Media} from 'reactstrap';

   function RenderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
                    );
    }

    function RenderComments(commentsArr) {
        if (commentsArr != null) {
            //comments constant loaded from render comments gets mapped 
            const comments = commentsArr.map((comment) => {
                return (
                    <Media list key={comment.id} className="list-unstyled">
                        <Media tag="li">
                            <p>{comment.comment}</p>
                        </Media>
                        <Media tag="li">
                        {comment.author} , {new Intl.DateTimeFormat('en-US',
                                { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                        </Media>
                    </Media>
                );
            });
            return (
                <div>
                    <Media>
                        <h4>Comments</h4>
                    </Media>
                    {comments}
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

   const DishDetail = (props) => {

    // function Render() {

        // let comments;
        // if (this.props.dish != null) {
        //comments variable gets loaded with dish comments on click

        const comments = RenderComments((props.dish.comments)       

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    < RenderDish(this.props.dish)/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    {comments}
                </div>
            </div>
        );
}


export default DishDetail;