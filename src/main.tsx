import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './stylesheets/index.scss'
import TaskContextProvider from './contexts/TaskContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TaskContextProvider>
    <App />
  </TaskContextProvider>
)
