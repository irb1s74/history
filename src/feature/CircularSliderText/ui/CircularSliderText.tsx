import { memo, useContext } from 'react'
import { AppContext } from 'app/provider/AppProvider'
import cls from './CircularSliderText.module.scss'
import { circularSliderText } from 'shared/const/data'

export const CircularSliderText = memo(() => {
  const { period } = useContext(AppContext)
  return <div className={cls.CircularSliderText}>{circularSliderText[period]}</div>
})
