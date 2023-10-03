import { createContext } from 'react'

export interface AppContextProps {
  onPointClick: (index: number) => void
  period: number
  degreesArray: number[]
  pointDegreesArray: number[]
  rotateDegree: number
}

export const AppContext = createContext<AppContextProps>({
  onPointClick: (index: number) => null,
  period: 0,
  degreesArray: [],
  pointDegreesArray: [],
  rotateDegree: 0,
})
