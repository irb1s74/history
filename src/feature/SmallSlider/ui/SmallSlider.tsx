import { memo, useContext } from 'react'
import { AppContext } from 'app/provider/AppProvider'
import { periodYears } from 'shared/const/data'
import cls from './SmallSlider.module.scss'

export const SmallSlider = memo(() => {
  const { period, onPointClick } = useContext(AppContext)

  const handleClick = (index: number) => () => {
    onPointClick(index)
  }

  return (
    <div className={cls.SmallSlider}>
      {periodYears.map((_, index) => (
        <div
          className={cls.SmallSlider__point}
          onClick={handleClick(index)}
          style={period === index ? { opacity: '1' } : undefined}
        />
      ))}
    </div>
  )
})
