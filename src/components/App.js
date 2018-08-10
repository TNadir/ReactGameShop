import React, { Component } from "react";
import "./App.css";
import GameList from "./GameList";
import _orderBy from "lodash/orderBy";
import GameForm from "./GameForm";
import TopNavigationMenu from "./TopNavigationMenu";
import PublisherForm from "./PublisherForm";
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
      showGameForm: false,
      showPublisherForm: false,
      selectedGame: {}
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

  SaveGame = game => (game.id ? this.UpdateGame(game) : this.AddNewGame(game));

  AddNewGame = game => {
    var maxgame = this.state.games.reduce(function(prev, current) {
      return prev.id > current.id ? prev : current;
    });

    this.setState({
      games: [...this.state.games, { ...game, id: maxgame.id + 1 }],
      showGameForm: false
    });
  };

  UpdateGame = game => {
    this.setState({
      games: this.state.games.map(item => (item.id === game.id ? game : item)),
      showGameForm: false
    });
  };

  selectedGameForm = game =>
    this.setState({
      selectedGame: game,
      showGameForm: true
    });

  deleteGameForm = game =>
    this.setState({
      games: this.state.games.filter(item => item.id !== game.id)
    });

  render() {
    const numbercolumns =
      this.state.showGameForm || this.state.showPublisherForm
        ? "ten"
        : "sixteen";
    return (
      <div className="ui container">
        <TopNavigationMenu
          showGameForm={() =>
            this.setState({
              showGameForm: true,
              showPublisherForm: false,
              selectedGame: {}
            })
          }
          showPublisherForm={() =>
            this.setState({
              showPublisherForm: true,
              showGameForm: false,
              selectedGame: {}
            })
          }
        />

        <div className="ui stackable grid">
          {this.state.showGameForm && (
            <div className="six wide column">
              <GameForm
                submit={this.SaveGame}
                publishers={publishers}
                cancelGameForm={() =>
                  this.setState({ showGameForm: false, selectedGame: {} })
                }
                game={this.state.selectedGame}
              />
            </div>
          )}

          <div className={`${numbercolumns} wide column`}>
            <GameList
              games={this.state.games}
              toggleFeatured={this.toggleFeaturedHandler}
              editGame={this.selectedGameForm}
              deleteGame={this.deleteGameForm}
            />
          </div>
          {this.state.showPublisherForm && (
            <div className="six wide column right">
              <PublisherForm />
            </div>
          )}


        </div>
      </div>
    );
  }
}

export default App;
