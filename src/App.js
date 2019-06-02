import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
=======
import { Provider} from 'react-redux';
import { ConfigureStore} from './redux/configureStore';

>>>>>>> a93f413
const store = ConfigureStore();

class App extends Component {
    
  render() {
    return (
<<<<<<< HEAD
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">             
          <Main />             
        </div>
      </BrowserRouter>
      </Provider>  
=======
      <Provider store = {store} >
        <BrowserRouter>
          <div >             
            <Main />             
          </div>
        </BrowserRouter>
      </Provider>
>>>>>>> a93f413
    );
  }
}
export default App;
