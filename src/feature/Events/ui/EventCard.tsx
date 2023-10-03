import cls from './Events.module.scss'
import { memo } from 'react'

interface EventCardProps {
  year: number
  description: string
}

export const EventCard = memo((props: EventCardProps) => {
  const { year, description } = props
  return (
    <div className={cls.EventCard}>
      <h6 className={cls.EventCard__year}>{year}</h6>
      <p className={cls.EventCard__description}>{description}</p>
    </div>
  )
})
