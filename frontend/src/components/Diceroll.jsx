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
      <section className='upperSection'>
    
          <div className='gridBorder'>
            <p>Ones</p>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className='gridBorder'>Sum of all Ones</p>
          <p className='gridBorder'>{winCard?.ones(diceArray)}</p>
          <button className='gridBorder'>Choose</button>
   
      
          <div className='gridBorder'>
            <p>Twos</p>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className='gridBorder'>Sum of all Twos</p>
          <p className='gridBorder'>{winCard?.twos(diceArray)}</p>
          <button className='gridBorder'>Choose</button>


          <div className='gridBorder'>
            <p>Threes</p>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className='gridBorder'>Sum of all Threes</p>
          <p className='gridBorder'>{winCard?.threes(diceArray)}</p>
          <button className='gridBorder'>Choose</button>
   
     
          <div className='gridBorder'>
            <p>Fours</p>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className='gridBorder'>Sum of all Fours</p>
          <p className='gridBorder'>{winCard?.fours(diceArray)}</p>
          <button className='gridBorder'>Choose</button>

          <div className='gridBorder'>
            <p>Fives</p>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className='gridBorder'>Sum of all Fives</p>
          <p className='gridBorder'>{winCard?.fives(diceArray)}</p>
          <button className='gridBorder'>Choose</button>
    
          <div className='gridBorder'>
            <p>Sixs</p>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className='gridBorder'>Sum of all Sixs</p>
          <p className='gridBorder'>{winCard?.sixs(diceArray)}</p>
          <button className='gridBorder'>Choose</button>
    
      </section>
    </>
  )
}

export default Diceroll