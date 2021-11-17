import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovie from './SearchMovie';

class Main extends React.Component {
  render() {
    return (
      <div 
      className="container"
      style={
        { 
          margin: '0 auto',
          maxWidth: '1000px',
          padding: '40px',
        }
      }
      >
        <h1 
          className="title"
          style={
            {
              fontSize: '4.4rem',
              textAlign: 'center'
            }
          }
        >
          React Movie Search
        </h1>
        <SearchMovie />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));