import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import NavBar from './components/NavBar';
import StrangerCard from './components/StrangerCard';
import StrangeFriends from './characters.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      highScore: 0,
      friends: StrangeFriends,
      clickedFriends: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  shuffle = array => {
    var m = array.length,
      t,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  };

  handleClick = (id, e) => {
    e.preventDefault();
    this.setState({ friends: this.shuffle(this.state.friends) });
    if (this.state.clickedFriends.indexOf(id) < 0) {
      document.getElementById('navTitle').style.WebkitAnimationPlayState =
        'running';
      document.getElementById('navTitle').style.animationPlayState = 'running';
      this.setState({ clickedFriends: this.state.clickedFriends.concat(id) });
      this.handleIncrement();
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
    if (this.state.highScore < this.state.score + 1) {
      this.setState({ highScore: this.state.score + 1 });
    }
  };

  handleReset = () => {
    document.getElementById('navTitle').style.WebkitAnimationPlayState =
      'paused';
    document.getElementById('navTitle').style.animationPlayState = 'paused';
    this.setState({ score: 0, clickedFriends: [] });
  };

  render() {
    return (
      <div className="App">
        <NavBar score={this.state.score} highScore={this.state.highScore} />
        <header className="App-header align-items-center" />
        <Wrapper>
          {this.state.friends.map(x => (
            <StrangerCard
              name={x.name}
              key={x.id}
              id={x.id}
              image={x.image}
              remove={this.handleClick}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
