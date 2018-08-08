import React from "react";
import GameCard from "./GameCard";
import PropTypes from "prop-types";

const GameList = ({ games,toggleFeatured }) => (
  <div className="ui four cards">
    {games.length === 0 ? (
      <div className="ui icon message">
        <i className="info icon" />
        <div className="content">
          <div className="header">Have you added the game?</div>
          <p>There no any games for you.</p>
        </div>
      </div>
    ) : (
      games.map(game =>
         <GameCard game={game} key={game.id} 
         toggleFeatured={toggleFeatured}/>)
    )}
  </div>
);
GameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired
};

GameList.defaultProps={
    games:[]
}
export default GameList;
