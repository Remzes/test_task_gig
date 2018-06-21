import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <section className="header__inner">
                <img className="header__inner__logo" src="../src/assets/images/pokemon-logo.png" alt="Pokeball Logo"/>
                <h2 className="header__inner__title">Pokedex in your pocket</h2>
            </section>
        </header>
    )
}

export default Header