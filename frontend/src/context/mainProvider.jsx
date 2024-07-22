import React, { createContext, useState } from 'react'
export const mainContext = createContext()

const MainProvider = ({children}) => {
  const [diceArray, setDiceArray] = useState([1, 1, 1, 1, 1])

  return (
    <mainContext.Provider value={{diceArray, setDiceArray}}>
        {children}
    </mainContext.Provider>
  )
}

export default MainProvider