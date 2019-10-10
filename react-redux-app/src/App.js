import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {fetchQuestions} from './actions';
import TriviaList from './components/TriviaList';
import './App.css';

function App(props) {
  console.log(props)

  useEffect(() => {
    props.fetchQuestions();
  },[]);


  return (
    <div className="App">
      <TriviaList />
    </div>
  );
}



const mapStateToProps = state => {
  console.log(state.main.trivia);
  return{
    state: state
  };
};

export default connect(mapStateToProps, {fetchQuestions})(App);
