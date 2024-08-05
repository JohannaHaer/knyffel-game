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

      <table>
        <tr>
          <td>Ones</td>
          <td>Sum of all Ones</td>
          <td>{winCard?.ones(diceArray)}</td>
          <td><button className='chooseButton'>Choose</button></td>
        </tr>
        <tr>
          <td>Twos</td>
          <td>Sum of all Twos</td>
          <td>{winCard?.twos(diceArray)}</td>
          <td><button className='chooseButton'>Choose</button></td>
        </tr>
        <tr>
          <td>Threes</td>
          <td>Sum of all Threes</td>
          <td>{winCard?.threes(diceArray)}</td>
          <td><button className='chooseButton'>Choose</button></td>
        </tr>
        <tr>
          <td>Fours</td>
          <td>Sum of all Fours</td>
          <td>{winCard?.fours(diceArray)}</td>
          <td><button className='chooseButton'>Choose</button></td>
        </tr>
        <tr>
          <td>Fives</td>
          <td>Sum of all Fives</td>
          <td>{winCard?.fives(diceArray)}</td>
          <td><button className='chooseButton'>Choose</button></td>
        </tr>
        <tr>
          <td>Sixs</td>
          <td>Sum of all Sixs</td>
          <td>{winCard?.sixs(diceArray)}</td>
          <td><button className='chooseButton'>Choose</button></td>
        </tr>
        <tr className='bolderBorder'>
          <td>Total</td>
          <td>➡️</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Bonus for 63 points or more</td>
          <td>plus 35</td>
          <td></td>
          <td></td>
        </tr>
        <tr className='doubleLineBottom'>
          <td>Total upper section</td>
          <td>➡️</td>
          <td></td>
          <td></td>
        </tr>
        <tr className='spacer'></tr>
        <tr className='doubleLineTop'>
          <td>3 of a kind</td>
          <td>Sum of all dice if 3 are the same</td>
          <td>{winCard?.threeOfAKind(diceArray)}</td>
          <td><button className='chooseButton'>Choose</button></td>
        </tr>
        <tr>
          <td>4 of a kind</td>
          <td>Sum of all dice if 4 are the same</td>
          <td>{winCard?.threeOfAKind(diceArray)}</td>
          <td><button className='chooseButton'>Choose</button></td>
        </tr>
        <tr>
          <td>Full House</td>
          <td>25 points for a full house</td>
          <td>{winCard?.fullHouse(diceArray)}</td>
          <td><button className='chooseButton'>Choose</button></td>
        </tr>
        <tr>
          <td>Small Straight</td>
          <td>30 points for a small straight</td>
          <td>{winCard?.smallStraight(diceArray)}</td>
          <td><button className='chooseButton'>Choose</button></td>
        </tr>
        <tr>
          <td>Large Straight</td>
          <td>40 points for a large straight</td>
          <td>{winCard?.largeStraight(diceArray)}</td>
          <td><button className='chooseButton'>Choose</button></td>
        </tr>
        <tr>
          <td>Knyffel</td>
          <td>50 points for a knyffel</td>
          <td>{winCard?.knyffel(diceArray)}</td>
          <td><button className='chooseButton'>Choose</button></td>
        </tr>
        <tr>
          <td>Chance</td>
          <td>Sum all dice</td>
          <td>{winCard?.chance(diceArray)}</td>
          <td><button className='chooseButton'>Choose</button></td>
        </tr>
        <tr className='bolderBorder'>
          <td>Total lower section</td>
          <td>➡️</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Total upper section</td>
          <td>➡️</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Final sum</td>
          <td>➡️</td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </>
  )
}

export default Diceroll