import React from 'react';
import { bindActionCreators } from 'redux';
import { initStore, initialCards, addItem } from '../store';
import { connect } from 'react-redux';
import './index.css';
import Card from './Card';

// import 'isomophic-unfetch' for external api fetches must npm install

class Index extends React.Component {
  static async getInitialProps({ store }) {
    store.dispatch(initialCards());
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

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initialCards: bindActionCreators(initialCards, dispatch),
    addItem: bindActionCreators(addItem, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Index)