import React, { Component } from "react";
import "./Toolbar.module.css";

class Toolbar extends Component {
  state = {};
  render() {
    return (
      <div className="app__toolbar">
        <div className="toolbar__title">More Sites:</div>
        <div className="toolbar__links">
          <a
            href="https://wowclassic.gg"
            class="toolbar__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="toolbar__link__icon"
              src="https://rerollcdn.com/WOWCLASSIC/UI/logo_icon_2.svg"
              alt="WoW Classic The Burning Crusade"
            />
            Classic
          </a>
          <a
            href="https://wowtbc.gg"
            class="toolbar__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="toolbar__link__icon"
              src="https://rerollcdn.com/WOWCLASSIC/UI/logo_icon_2.svg"
              alt="WoW Classic The Burning Crusade"
            />
            TBC
          </a>
        </div>
      </div>
    );
  }
}

export default Toolbar;
