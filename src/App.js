import React, { Component } from 'react';
import spinner from './spinner.gif';
import './App.css';
export default class App extends Component {
  state = {
    isLoading: false,
    items: []
  };
  /*comment*/
  componentDidMount() {
    fetch('http://www.mocky.io/v2/56fcf6871000000e13aed252')
      .then(res => res.json())
      .then(res => {
        this.setState({
          isLoading: true,
          items: res
        });
      });
  }

  render() {
    const { isLoading, items } = this.state;
    if (!isLoading) {
      return (
        <div>
          <img className="spin-img" src={spinner} alt="Data is loading" />
        </div>
      );
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.title}|| {item.creation_date}||{item.description}
            </li>
          ))}
        </ul>
      );
    }
  }
}
