import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/main'
import FromComponent from './components/Sample'
import UserList from './components/List'
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
      <FromComponent/>
      <UserList/>
      </header>
    </div>
    </Provider>
  );
}
export default App;
