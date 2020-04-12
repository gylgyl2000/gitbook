import axios from 'axios';
import React from 'react';
import './App.css';
import SimpsonsQuotes from './components/SimpsonsQuotes';
import LoadingSpinner from './components/LoadingSpinner';

const sampleQuote = {
  quote: 	"I believe the children are the future... Unless we stop them now!",
  character: "Homer Simpson",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: sampleQuote
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          quote: data[0],
        });
    });
  }

  onClick = () => {
    this.setState({ loading: true }, () => {
      axios.get('/endpoint')
        .then(result => this.setState({
          loading: false,
          data: [...result.data],
        }));
    });
  }

  render() {
    const { data, loading } = this.state;
    return (
      <div className="App">
        
        {loading ? <LoadingSpinner /> : <SimpsonsQuotes quotes={this.state.quote} />}
        <button type="button" onClick={this.getQuote}>Get quote</button>
      </div>
    );
  }
}

export default App;
