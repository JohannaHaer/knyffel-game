import React, { createContext, useState } from 'react'
export const mainContext = createContext()

const MainProvider = ({children}) => {
  const [diceArray, setDiceArray] = useState([1, 1, 1, 1, 1])
  const [clicked1, setClicked1] = useState(false)
  const [clicked2, setClicked2] = useState(false)
  const [clicked3, setClicked3] = useState(false)
  const [clicked4, setClicked4] = useState(false)
  const [clicked5, setClicked5] = useState(false)

  return (
    <mainContext.Provider value={{diceArray, setDiceArray, clicked1, setClicked1, clicked2, setClicked2, clicked3, setClicked3, clicked4, setClicked4, clicked5, setClicked5}}>
        {children}
    </mainContext.Provider>
  )
}

export default MainProvider