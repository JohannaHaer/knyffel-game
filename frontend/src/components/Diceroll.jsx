import React, { useContext } from 'react'
import { mainContext } from '../context/mainProvider'
import winCard from './checkWins'

const Diceroll = () => {
  const {diceArray, setDiceArray, clicked1, setClicked1, clicked2, setClicked2, clicked3, setClicked3, clicked4, setClicked4, clicked5, setClicked5} = useContext(mainContext)

  const toggleClick = (event, clicked, setClicked) => {
    event.preventDefault()
    if(!clicked) {
      setClicked(true)
    } else {
      setClicked(false)
    }
  }

  const rollDice = (e) => {
    e.preventDefault()
    let copyArray = [...diceArray]
    if (!clicked1) {
      let diceNumber = Math.round(Math.random() * 5 + 1)
      copyArray[0] = diceNumber
    }
    if (!clicked2) {
      let diceNumber = Math.round(Math.random() * 5 + 1)
      copyArray[1] = diceNumber
    }
    if (!clicked3) {
      let diceNumber = Math.round(Math.random() * 5 + 1)
      copyArray[2] = diceNumber
    }
    if (!clicked4) {
      let diceNumber = Math.round(Math.random() * 5 + 1)
      copyArray[3] = diceNumber
    }
    if (!clicked5) {
      let diceNumber = Math.round(Math.random() * 5 + 1)
      copyArray[4] = diceNumber
    }
    setDiceArray(copyArray)
  }

  return (
    <>
      <form onSubmit={rollDice}>
        <div>
          <div onClick={() => toggleClick(event, clicked1, setClicked1)}>{diceArray[0]}</div>
          <div onClick={() => toggleClick(event, clicked2, setClicked2)}>{diceArray[1]}</div>
          <div onClick={() => toggleClick(event, clicked3, setClicked3)}>{diceArray[2]}</div>
          <div onClick={() => toggleClick(event, clicked4, setClicked4)}>{diceArray[3]}</div>
          <div onClick={() => toggleClick(event, clicked5, setClicked5)}>{diceArray[4]}</div>
        </div>
        <button type='submit'>Roll</button>
      </form>
      <div>
        {winCard?.ones(diceArray)}
      </div>
      <div>
        {winCard?.twos(diceArray)}
      </div>
      <div>
        {winCard?.threes(diceArray)}
      </div>
      <div>
        {winCard?.fours(diceArray)}
      </div>
      <div>
        {winCard?.fives(diceArray)}
      </div>
      <div>
        {winCard?.sixs(diceArray)}
      </div>
      <div>
        {winCard?.threeOfAKind(diceArray)}
      </div>
      <div>
        {winCard?.fourOfAKind(diceArray)}
      </div>
      <div>
        {winCard?.fullHouse(diceArray)}
      </div>
      <div>
        {winCard?.knyffel(diceArray)}
      </div>
      <div>
        {winCard?.chance(diceArray)}
      </div>
      <div>
        {winCard?.smallStraight(diceArray)}
      </div>
      <div>
        {winCard?.largeStraight(diceArray)}
      </div>
    </>
  )
}

export default Diceroll