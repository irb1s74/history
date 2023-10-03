import { memo, useContext, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import type { Swiper as SwiperInstance } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { AppContext } from 'app/provider/AppProvider'
import { periodEvents } from 'shared/const/data'
import { EventCard } from './EventCard'
import cls from './Events.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'

export const Events = memo(() => {
  const { period } = useContext(AppContext)
  const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(null)

  let eventsBlock = useRef(null)

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.slideTo(0)
    }
    gsap.fromTo(
      eventsBlock.current,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
    )
  }, [period])
  return (
    <div className={cls.Events}>
      <Swiper
        ref={eventsBlock}
        modules={[Navigation]}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        navigation={{
          nextEl: '#nextSlideButton',
          prevEl: '#previousSlideButton',
        }}
        slidesPerView={1.5}
        grabCursor={true}
        breakpoints={{
          601: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
      >
        {periodEvents[period].map(({ year, description }, index) => (
          <SwiperSlide key={index}>
            <EventCard year={year} description={description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
})
