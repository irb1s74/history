import { memo, useContext, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { AppContext } from 'app/provider/AppProvider'
import { periodYears } from 'shared/const/data'
import styles from './Period.module.scss'

export const Period = memo(() => {
  const { period } = useContext(AppContext)

  const [yearTo, setYearTo] = useState({ value: 0 })

  const [yearFrom, setYearFrom] = useState({ value: 0 })

  const lastPeriod = useRef(0)
  useLayoutEffect(() => {
    const fromTarget = {
      value: periodYears[lastPeriod.current][0],
    }

    gsap.to(fromTarget, {
      duration: 1,
      value: periodYears[period][0],
      roundProps: 'value',
      ease: 'none',
      onUpdate() {
        setYearTo({ value: fromTarget.value })
      },
    })

    const toTarget = {
      value: periodYears[lastPeriod.current][1],
    }

    gsap.to(toTarget, {
      duration: 1,
      value: periodYears[period][1],
      roundProps: 'value',
      ease: 'none',
      onUpdate() {
        setYearFrom({ value: toTarget.value })
      },
    })

    return () => {
      lastPeriod.current = period
    }
  }, [period])

  return (
    <div className={styles.Period}>
      <div className={styles.Period__blueYear}>{yearTo.value}</div>
      <div className={styles.Period__fuchiaYear}>{yearFrom.value}</div>
    </div>
  )
})
