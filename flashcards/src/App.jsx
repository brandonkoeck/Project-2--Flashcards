import { useState } from 'react'
import './App.css'


//  const [count, setCount] = useState(0)

  const pokemonData = [
  {
    "question": "Who's That Pokemon?",
    "answer": "Pancham!",
    "before": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/5/58/XY011_WTP_before.png",
    "after": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/1/17/XY011_WTP_after.png"
  },
  {
    "question": "Who's That Pokemon?",
    "answer": "Sylveon!",
    "before": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/d/d2/XY013_WTP_before.png",
    "after": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/a/ab/XY013_WTP_after.png"
  },
  {
    "question": "Who's That Pokemon?",
    "answer": "Pichu!",
    "before": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/d/d6/XY016_WTP_before.png",
    "after": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/6/6d/XY016_WTP_after.png"
  },
  {
    "question": "Who's That Pokemon?",
    "answer": "Snorlax!",
    "before": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/b/ba/XY018_WTP_before.png",
    "after": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/6/63/XY018_WTP_after.png"
  },
  {
    "question": "Who's That Pokemon?",
    "answer": "Pikachu!",
    "before": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/9/9d/TB001_WTP_before.png",
    "after": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/a/ae/TB001_WTP_after.png"
  },
  {
    "question": "Who's That Pokemon?",
    "answer": "Bulbasaur!",
    "before": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/9/93/TB010_WTP_before.png",
    "after": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/b/b4/TB010_WTP_after.png"
  },
  {
    "question": "Who's That Pokemon?",
    "answer": "Charmander!",
    "before": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/a/a4/TB011_WTP_before.png",
    "after": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/b/b1/TB011_WTP_after.png"
  },
  {
    "question": "Who's That Pokemon?",
    "answer": "Squirtle!",
    "before": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/3/3d/TB012_WTP_before.png",
    "after": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/4/46/TB012_WTP_after.png"
  },
  {
    "question": "Who's That Pokemon?",
    "answer": "Scizor!",
    "before": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/4/46/GS023_WTP_before.png",
    "after": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/7/77/GS023_WTP_after.png"
  },
  {
    "question": "Who's That Pokemon?",
    "answer": "Cyndaquil!",
    "before": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/e/e6/GS024_WTP_before.png",
    "after": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/9/97/GS024_WTP_after.png"
  }
]

  function PokemonCard(props) {
    return (
      <div className="pokemon-container">
        <div className="pokemon-card">
          <img src = {props.pokemon.before}/>
        </div>
      </div>
    )
  }

function App() {
  return (
    <>
      <div className = "app-container">
        <h1>Who's that Pokemon?</h1>
        <div className = "cards-grid">
          {pokemonData.map((pokemon) => (
            <PokemonCard pokemon={pokemon}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
