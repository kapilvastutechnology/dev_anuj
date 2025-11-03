import { createRoot } from 'react-dom/client'
import './index.css'
import { HeroUIProvider } from '@heroui/react'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  <HeroUIProvider>
    <Provider store={store}>
      <App />
      <Toaster/>
    </Provider>

  </HeroUIProvider>


)
