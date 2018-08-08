import React, { Component } from "react";
import "./App.css";
import GameList from "./GameList";
import _orderBy from "lodash/orderBy";
import GameForm from "./GameForm";
import TopNavigationMenu from "./TopNavigationMenu";
const games = [
  {
    id: 1,
    publisher: 1,
    name: "Game 1",
    thumbnail:
      "https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge/public/field/image/2017/12/dishonored-corvo.jpg",
    price: 29.56,
    players: "4-5",
    duration: 60,
    featured: true
  },
  {
    id: 2,
    publisher: 2,
    name: "Angry birds",
    thumbnail: "https://i.ytimg.com/vi/lG2dXobAXLI/maxresdefault.jpg",
    price: 29.56,
    players: "4-5",
    duration: 60,
    featured: false
  },
  {
    id: 3,
    publisher: 1,
    name: "Hero all",
    thumbnail: "https://i.ytimg.com/vi/lG2dXobAXLI/maxresdefault.jpg",
    price: 29.56,
    players: "4-5",
    duration: 60,
    featured: true
  },
  {
    id: 4,
    publisher: 2,
    name: "Game 1",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrY70cWQ24AozZYl4FmfcPV7F2r2BeYhIjdLQsROsZPZ_7q_ja",
    price: 29.56,
    players: "4-5",
    duration: 50,
    featured: false
  }
];

const publishers = [
  { id: 1, Name: "Day of wonder" },
  { id: 2, Name: "Rio grande games" }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      showGameForm: false
    };
  }

  componentDidMount() {
    this.setState({
      games: _orderBy(games, ["featured", "name"], ["desc", "asc"])
    });
  }

  toggleFeaturedHandler = gameId => {
    const newGames = this.state.games.map(game => {
      if (game.id === gameId) return { ...game, featured: !game.featured };
      return game;
    });
    this.setState({ games: newGames });
  };

  render() {
    const numbercolumns = this.state.showGameForm ? "ten" : "sixteen";
    return (
      <div className="ui container">

        <TopNavigationMenu
          showGameForm={() =>
            this.setState({ showGameForm: !this.state.showGameForm })
          }
        />

        <div className="ui stackable grid">
          {this.state.showGameForm && (
            <div className="six wide column">
              <GameForm
                publishers={publishers}
                cancelGameForm={() => this.setState({ showGameForm: false })}
              />
            </div>
          )}

          <div className={`${numbercolumns} wide column`}>
            <GameList
              games={this.state.games}
              toggleFeatured={this.toggleFeaturedHandler}
            />
          </div>

        </div>



      </div>
    );
  }
}

export default App;
