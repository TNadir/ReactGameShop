import React, { Component } from "react";
import PropTypes from "prop-types";
import Featured from "./Featured";

class GameCard extends Component {
  state = {
    showConfirmation: false
  };

  showConfirmation = show => this.setState({ showConfirmation: show });

  render() {
    const { game, toggleFeatured, editGame, deleteGame } = this.props;
    return (
      <div className="ui card">
        <div className="image">
          <span className="ui green ribbon label">${game.price}</span>
          <Featured
            featured={game.featured}
            toggleFeatured={toggleFeatured}
            gameId={game.id}
          />
          <img src={game.thumbnail} alt="Game cover" />
        </div>
        <div className="content">
          <a href="" className="header">
            {game.name}
          </a>
          <div className="meta">
            <i className="icon users" />
            {game.players}
            &nbsp;
            <i className="icon wait" />
            {game.duration} min.
          </div>
        </div>

        <div className="extra content">
          {this.state.showConfirmation ? (
            <div className="ui two buttons">
              {/* <h4>Are you sure?</h4> */}
              <a
                className="ui red  basic button"
                onClick={() => deleteGame(game)}
              >
                <i className="ui icon check" />
                YES
              </a>
              <a
                className="ui gray basic button"
                onClick={() => this.showConfirmation(false)}
              >
                <i className="ui icon close" />
                NO
              </a>
            </div>
          ) : (
            <div className="ui two buttons">
              <a
                className="ui green basic button"
                onClick={() => editGame(game)}
              >
                <i className="ui icon edit" />
              </a>
              <a
                className="ui red basic button"
                onClick={() => this.showConfirmation(true)}
              >
                <i className="ui icon trash" />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

GameCard.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    featured: PropTypes.bool.isRequired
  }).isRequired,
  editGame: PropTypes.func.isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired
};

export default GameCard;
