import React, { useContext } from 'react'
import { mainContext } from '../context/mainProvider'


const Diceroll = () => {
  const {diceArray, setDiceArray, clicked1, setClicked1, clicked2, setClicked2, clicked3, setClicked3, clicked4, setClicked4, clicked5, setClicked5} = useContext(mainContext)
  console.log(diceArray);

  const toggleClick = (event, clicked, setClicked) => {
    event.preventDefault()
    if(!clicked) {
      setClicked(true)
    } else {
      setClicked(false)
    }
  }

  return (
    <>
      <form>
        <div>
          <button onClick={() => toggleClick(event, clicked1, setClicked1)}>{diceArray[0]}</button>
          <button onClick={() => toggleClick(event, clicked2, setClicked2)}>{diceArray[1]}</button>
          <button onClick={() => toggleClick(event, clicked3, setClicked3)}>{diceArray[2]}</button>
          <button onClick={() => toggleClick(event, clicked4, setClicked4)}>{diceArray[3]}</button>
          <button onClick={() => toggleClick(event, clicked5, setClicked5)}>{diceArray[4]}</button>
        </div>
        <button>Roll</button>
      </form>
    </>
  )
}

export default Diceroll