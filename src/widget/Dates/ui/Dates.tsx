import { memo } from 'react'
import { Period } from 'feature/Period'
import { CircularSlider } from 'feature/CircularSlider'
import { CircularSliderText } from 'feature/CircularSliderText'
import { Timeline } from 'feature/Timeline'
import { Events } from 'feature/Events'
import cls from './Dates.module.scss'

export const Dates = memo(() => {
  return (
    <div className={cls.Dates}>
      <div className={cls.Dates__yVector} />
      <div className={cls.Dates__xVector} />
      <div className={cls.Dates__title}>
        <div className={cls.vector} />
        <h1 className={cls.caption}>Исторические даты</h1>
      </div>
      <CircularSlider />
      <CircularSliderText />
      <Period />
      <Timeline />
      <Events />
    </div>
  )
})
