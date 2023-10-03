import { memo, useContext } from 'react'
import { AppContext } from 'app/provider/AppProvider'
import { periodYears } from 'shared/const/data'
import cls from './Timeline.module.scss'

export const Timeline = memo(() => {
  const { onPointClick, period } = useContext(AppContext)

  const handlePreviousPeriodClick = () => {
    onPointClick(period - 1)
  }

  const handleNextPeriodClick = () => {
    onPointClick(period + 1)
  }

  return (
    <div className={cls.Timeline}>
      <div className={cls.Timeline__currentPeriod}>
        0{period + 1}/0{periodYears.length}
      </div>

      <div className={cls.Timeline__periodSlideButtonsBlock}>
        <button
          className={cls.Timeline__slideButton}
          disabled={!period}
          onClick={handlePreviousPeriodClick}
        >
          <i style={{ transform: `rotate(135deg)` }} className={cls.Timeline__ButtonArrow} />
        </button>

        <button
          className={cls.Timeline__slideButton}
          disabled={period === periodYears.length - 1}
          onClick={handleNextPeriodClick}
        >
          <i className={cls.Timeline__ButtonArrow} />
        </button>
      </div>
    </div>
  )
})
