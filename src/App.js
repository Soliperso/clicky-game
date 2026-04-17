import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import butterfly from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    butterfly,
    clickedButterflyIds: [],
    score: 0,
    goal: 8,
    status: ""
  };

  shuffleScoreCard = id => {
    let clickedButterflyIds = this.state.clickedButterflyIds;

    if (clickedButterflyIds.includes(id)) {
      this.setState({
        clickedButterflyIds: [],
        score: 0,
        status: "Game Over! You clicked the same butterfly twice."
      });
      return;
    } else {
      clickedButterflyIds.push(id);

      if (clickedButterflyIds.length === 8) {
        this.setState({
          score: 8,
          status: "You Won! Perfect memory!",
          clickedButterflyIds: []
        });
        return;
      }

      this.setState({
        butterfly,
        clickedButterflyIds,
        score: clickedButterflyIds.length,
        status: ""
      });

      for (let i = butterfly.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [butterfly[i], butterfly[j]] = [butterfly[j], butterfly[i]];
      }
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Butterfly Memory</h1>
          <p className="App-intro">
            Click each butterfly only once — can you remember them all?
          </p>
        </header>
        <Score
          total={this.state.score}
          goal={8}
          status={this.state.status}
        />
        <Wrapper>
          {this.state.butterfly.map(butterfly => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={butterfly.id}
              key={butterfly.id}
              image={butterfly.image}
            />
          ))}
        </Wrapper>
        <footer>
          <p>&copy; 2025 Butterfly Memory Game</p>
        </footer>
      </div>
    );
  }
}

export default App;
