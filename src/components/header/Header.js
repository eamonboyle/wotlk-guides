import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="app__header">
        <div className="app__header__wrapper">
          <a className="app__header__title" href="/" rel="noopener">
            <img
              src="https://rerollcdn.com/WOW/UI/logo_icon.svg"
              alt="wowtbc.gg"
              class="app__header__icon"
            />
            WOWWOTLK.GG
          </a>
          <div class="navigation">
            <ul class="navigation__list">
              <li class="navigation__item__container">
                <a
                  aria-current="page"
                  class="navigation__item navigation__item--selected"
                  href="/class-rankings/pve-rankings/"
                >
                  Class Rankings
                  <img
                    src="https://rerollcdn.com/WOW/UI/dropdown-arrow.svg"
                    alt="Dropdown Arrow"
                    class="navigation__dropdown__arrow"
                  />
                </a>
              </li>
              <li class="navigation__item__container">
                <a class="navigation__item " href="/bis-list/balance-druid/">
                  BiS Lists
                  <img
                    src="https://rerollcdn.com/WOW/UI/dropdown-arrow.svg"
                    alt="Dropdown Arrow"
                    class="navigation__dropdown__arrow"
                  />
                </a>
              </li>
              <li class="navigation__item__container">
                <a
                  class="navigation__item "
                  href="/class-guides/balance-druid/"
                >
                  PvE Guides
                  <img
                    src="https://rerollcdn.com/WOW/UI/dropdown-arrow.svg"
                    alt="Dropdown Arrow"
                    class="navigation__dropdown__arrow"
                  />
                </a>
              </li>
              <li class="navigation__item__container">
                <a
                  class="navigation__item "
                  href="/pvp-class-guides/subtlety-rogue/"
                >
                  PvP Guides
                  <img
                    src="https://rerollcdn.com/WOW/UI/dropdown-arrow.svg"
                    alt="Dropdown Arrow"
                    class="navigation__dropdown__arrow"
                  />
                </a>
              </li>
              <li class="navigation__item__container">
                <a class="navigation__item " href="/boss-guides/mount-hyjal/">
                  Boss Guides
                  <img
                    src="https://rerollcdn.com/WOW/UI/dropdown-arrow.svg"
                    alt="Dropdown Arrow"
                    class="navigation__dropdown__arrow"
                  />
                </a>
              </li>
              <li class="navigation__item__container">
                <a class="navigation__item " href="/leveling-guide/">
                  Leveling Guide
                </a>
              </li>
              <li class="navigation__item__container">
                <a class="navigation__item " href="/talent-calculator/druid/">
                  Talents
                  <img
                    src="https://rerollcdn.com/WOW/UI/dropdown-arrow.svg"
                    alt="Dropdown Arrow"
                    class="navigation__dropdown__arrow"
                  />
                </a>
              </li>
              <li class="navigation__item__container">
                <a class="navigation__item " href="/raid-comp/">
                  Raid Comp
                </a>
              </li>
              <li class="navigation__item__container">
                <a class="navigation__item " href="/attunement-tracker/">
                  Attunement Tracker
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
