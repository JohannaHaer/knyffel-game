import React, { useContext } from 'react'
import { mainContext } from '../context/mainProvider'


const Diceroll = () => {
const {diceArray, setDiceArray} = useContext(mainContext)
console.log(diceArray);
  return (
    <>
      <form>
        <div>
          <button>{diceArray[0]}</button>
          <button>{diceArray[1]}</button>
          <button>{diceArray[2]}</button>
          <button>{diceArray[3]}</button>
          <button>{diceArray[4]}</button>
        </div>
        <button>Roll</button>
      </form>
    </>
  )
}

export default Diceroll