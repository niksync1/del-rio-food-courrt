import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
// import { DISHES } from '../shared/dishes';
// import { COMMENTS } from '../shared/comments';
// import { PROMOTIONS } from '../shared/promotions';
// import { LEADERS } from '../shared/leaders';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

<<<<<<< HEAD
    // this.state = {
    //   dishes: DISHES,
    //   comments: COMMENTS,
    //   promotions: PROMOTIONS,
    //   leaders: LEADERS
    // };
    // onDishSelect(dishId) {
    //   this.setState({ selectedDish: dishId});
    // }
  const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
  }

  const mapDispatchToProps = (dispatch) => ({  
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes())},
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos())
  }); 

class Main extends Component {    
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

=======
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
  }
}


class Main extends Component {

  constructor(props) {
    super(props);
    
>>>>>>> a93f413
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }
  
  render() {
    const HomePage= () => {
      return(
        <Home 
<<<<<<< HEAD
        dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errMess}
        promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
        promoLoading={this.props.promotions.isLoading}
        promoErrMess={this.props.promotions.errMess}        
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}        />
=======
        dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
>>>>>>> a93f413
      );
    }
    const DishWithId = ({match}) => {
      return(
<<<<<<< HEAD
        <DishDetail dish = {this.props.dishes.dishes.filter((dish) =>dish.id === parseInt(match.params.dishId,10))[0]} 
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments = {this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                    commentsErrMess={this.props.comments.errMess}
                    addComment={this.props.addComment}
                    />
=======
        <DishDetail dish =  {this.props.dishes.filter((dish) =>dish.id === parseInt(match.params.dishId,10))[0]} 
                    comments = {this.props.comments.filter ((comment) =>comment.dishID === parseInt(match.params.dishId,10))[0]} />
>>>>>>> a93f413
      );
    };
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route path="/home" component={HomePage} />            
            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/> } />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route path="/aboutus" component={() => <About leaders={this.props.leaders}/> } />
<<<<<<< HEAD
            <Route exact path='/contactus'  component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
=======
            <Route path='/contactus' component={Contact} /> 
>>>>>>> a93f413
            <Redirect to="/home" />
          </Switch>
          </div>
        <Footer />
      </div>
    );
  }
}
<<<<<<< HEAD
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
=======

export default withRouter(connect(mapStateToProps)(Main));
>>>>>>> a93f413
