import { useState } from 'react'

  const pokemonData = [
  {
    "name": "Pancham",
    "before": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/5/58/XY011_WTP_before.png",
    "after": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/1/17/XY011_WTP_after.png"
  },
  {
    "name": "Sylveon",
    "before": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/d/d2/XY013_WTP_before.png",
    "after": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/a/ab/XY013_WTP_after.png"
  },
  {
    "name": "Pichu",
    "before": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/d/d6/XY016_WTP_before.png",
    "after": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/6/6d/XY016_WTP_after.png"
  },
  {
    "name": "Snorlax",
    "before": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/b/ba/XY018_WTP_before.png",
    "after": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/6/63/XY018_WTP_after.png"
  },
  {
    "name": "Pikachu",
    "before": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/9/9d/TB001_WTP_before.png",
    "after": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/a/ae/TB001_WTP_after.png"
  },
  {
    "name": "Bulbasaur",
    "before": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/9/93/TB010_WTP_before.png",
    "after": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/b/b4/TB010_WTP_after.png"
  },
  {
    "name": "Charmander",
    "before": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/a/a4/TB011_WTP_before.png",
    "after": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/b/b1/TB011_WTP_after.png"
  },
  {
    "name": "Squirtle",
    "before": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/3/3d/TB012_WTP_before.png",
    "after": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/4/46/TB012_WTP_after.png"
  },
  {
    "name": "Scizor",
    "before": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/4/46/GS023_WTP_before.png",
    "after": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/7/77/GS023_WTP_after.png"
  },
  {
    "name": "Cyndaquil",
    "before": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/e/e6/GS024_WTP_before.png",
    "after": "https://images.weserv.nl/?url=static.wikia.nocookie.net/pokemon/images/9/97/GS024_WTP_after.png"
  }
]

  function PokemonCard({pokemon, setCurrentIndex}) {
    const [isFlipped, setIsFlipped] = useState(0)

    const cardFlip = () => {
      setIsFlipped(!isFlipped)
    }

    const nextButton = () => {
      setCurrentIndex(Math.floor(Math.random() * pokemonData.length))
      setIsFlipped(0)
    }

    return (
      <div className="card-wrapper">
        <div className="pokemon-card" onClick={cardFlip}>
          <img src={isFlipped ? pokemon.after : pokemon.before}/>
        </div>
        <button onClick={nextButton}>Next</button>
      </div>
    )
  }

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  return (
    <>
      <div className = "app-container">
        <h1>Who's that Pokemon?</h1>
        <h2>Guess the Pokemon based on its silhouette. Click on a card to flip it.</h2>
        <h3>Total cards: {pokemonData.length}</h3>
        <div className = "card-container">
          <PokemonCard pokemon={pokemonData[currentIndex]} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
        </div>
      </div>
    </>
  )
}

export default App
