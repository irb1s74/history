import { Dates } from 'widget/Dates'

export const App = () => {
  return (
    <div className='app'>
      <div className='app__backGrid'>
        {Array(24)
          .fill(0)
          .map((_, index) => (
            <div className='app__backItem' key={index} />
          ))}
      </div>
      <Dates />
    </div>
  )
}
