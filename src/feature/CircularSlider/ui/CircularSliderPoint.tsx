import { memo, useContext } from 'react'
import { AppContext } from 'app/provider/AppProvider'
import cls from './CircularSlider.module.scss'

interface CircularSliderPointProps {
  index: number
}

export const CircularSliderPoint = memo((props: CircularSliderPointProps) => {
  const { index } = props
  const { onPointClick, period, degreesArray, pointDegreesArray } = useContext(AppContext)

  const handlePointClick = () => {
    onPointClick(index)
  }

  return (
    <div
      className={cls.CircularSliderPoint}
      style={{ transform: `rotate(${degreesArray[index]}deg)` }}
    >
      <div
        onClick={handlePointClick}
        className={cls.CircularSliderPoint__point}
        style={period === index ? { background: 'var(--bg-color)', transform: 'unset' } : undefined}
      >
        <div
          className={cls.CircularSliderPoint__pointIndex}
          style={{ transform: `rotate(${pointDegreesArray[index]}deg)` }}
        >
          {index + 1}
        </div>
      </div>
    </div>
  )
})
