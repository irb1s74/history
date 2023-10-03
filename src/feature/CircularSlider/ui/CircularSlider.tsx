import { memo, useContext } from 'react'
import cls from './CircularSlider.module.scss'
import { AppContext } from 'app/provider/AppProvider'
import { periodYears } from 'shared/const/data'
import { CircularSliderPoint } from './CircularSliderPoint'

export const CircularSlider = memo(() => {
  const { rotateDegree } = useContext(AppContext)
  return (
    <div className={cls.CircularSlider}>
      <div
        className={cls.CircularSlider__container}
        style={{ transform: `rotate(${rotateDegree}deg)` }}
      >
        {periodYears.map((_, index) => (
          <CircularSliderPoint
            key={index}
            {...{
              index,
            }}
          />
        ))}
      </div>
    </div>
  )
})
