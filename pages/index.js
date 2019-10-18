import React from 'react';
import './index.css';
import Card from './Card';
import data from '../data/data.json';
// import 'isomophic-unfetch' for external api fetches must npm install

export default class Index extends React.Component {
  static async getInitialProps() {
    return { cards: data }
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img 
            src="/static/logo.png" 
            className="static-logo"
            alt=""
            />
        </header>  
        <div className="Grid">
          {
            this.props.cards.map((card) => (
              <Card key={card.id}/>
            ))
          }   
        </div>
      </div>
    );
  }
}