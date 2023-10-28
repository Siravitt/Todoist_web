import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './stylesheets/index.scss'
import TaskContextProvider from './contexts/TaskContext.tsx'
import AuthContextProvider from './contexts/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthContextProvider>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </AuthContextProvider>
)
