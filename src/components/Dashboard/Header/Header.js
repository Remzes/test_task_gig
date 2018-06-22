import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Header = () => (
  <header className="header">
    <section className="header__inner">
      <ReactCSSTransitionGroup
        transitionName="fade_in_short"
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <a href="/" className="header__inner__logo-wrapper">
          <img className="header__inner__logo" src="http://uk.tomy.com/sites/tomy_uk/files/content/en_GB/pokemon/splash/images/pokemon-logo.png" alt="Pokeball Logo" />
        </a>
      </ReactCSSTransitionGroup>
      <ReactCSSTransitionGroup
        transitionName="fade_in_short"
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <h2 className="header__inner__title">Pokedex in your pocket</h2>
      </ReactCSSTransitionGroup>
    </section>
  </header>
);

export default Header