import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppProvider } from 'app/provider/AppProvider'
import { App } from 'app/App'
import './app/styles/index.scss'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Контейнер root не найден. НЕ удалось вмонтировать реакт приложение')
}

const root = createRoot(container)

root.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
)
