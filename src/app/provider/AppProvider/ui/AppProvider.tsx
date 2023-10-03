import { type ReactNode, useEffect, useMemo, useState } from 'react'
import { getDegreesArray } from 'shared/lib/getDegreesArray'
import { periodYears } from 'shared/const/data'
import { AppContext } from '../config/AppContext'

interface AppProviderProps {
  children: ReactNode
}

const AppProvider = (props: AppProviderProps) => {
  const { children } = props
  const [period, setPeriod] = useState(0)

  const [rotateDegree, setRotateDegree] = useState(0)

  const onPointClick = (index: number) => {
    setPeriod(index)
  }

  const degreesArray = useMemo(() => getDegreesArray(periodYears.length), [])

  const [pointDegreesArray, setPointDegreesArray] = useState(degreesArray.map((item) => -item))

  useEffect(() => {
    setPointDegreesArray(degreesArray.map((item) => 60 * period - item))
    setRotateDegree(-(period * (360 / periodYears.length)))
  }, [period])

  const defaultProps = useMemo(
    () => ({
      onPointClick,
      period,
      rotateDegree,
      degreesArray,
      pointDegreesArray,
    }),
    [period, rotateDegree, pointDegreesArray],
  )

  return <AppContext.Provider value={defaultProps}>{children}</AppContext.Provider>
}

export default AppProvider
