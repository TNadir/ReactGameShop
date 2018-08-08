import React from "react";
import PropTypes from "prop-types";

const TopNavigationMenu = ({showGameForm}) => (
  <div className="ui stackable menu">
    <div className="item">
      <img
        alt=""
        src="https://i0.wp.com/www.xboxoneuk.com/wp-content/uploads/2015/08/Game-Logo.jpg"
      />
    </div>

    <a className="item" onClick={showGameForm} >
      <i className="icon plus" />Add new game
    </a>

    <div className="right menu">
      <a className="item">Sign In</a>
      <a className="item">
        <div className="ui mini primary button">Sign Up</div>
      </a>
    </div>
  </div>
);

TopNavigationMenu.propTypes = {
  showGameForm: PropTypes.func.isRequired
};

export default TopNavigationMenu;
