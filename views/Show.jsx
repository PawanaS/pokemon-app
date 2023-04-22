const React = require('react')
// const Pokemon = require('../models/PokemonSchema')


function Show(props){
    const {Pokemon} = props
    console.log(Pokemon)
        return(
        <div>
            <h1>Catching All Of Them</h1>
            <h2>{Pokemon.name}</h2>
            <img src={`${Pokemon.img}.jpg`}/>
            <br/>
            <a href='/pokemon'>Go Back Home</a>
        </div>
    )
};

module.exports = Show;
