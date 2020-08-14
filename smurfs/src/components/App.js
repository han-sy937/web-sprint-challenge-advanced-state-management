import React, { Component } from "react";
import { fetchSmurfs } from './actions/smurfActions'
import SmurfsList from './SmurfsList'
import Form from './Form'

import { connect } from 'react-redux';

import "./App.css";
class App extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchSmurfs()
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>Smurfs</h1>
        <SmurfsList />
        <Form />
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {fetchSmurfs})(App);
