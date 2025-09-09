import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import AuthProvider from './context/AuthProvider'


createRoot(document.getElementById('root')).render(
< BrowserRouter>
<AuthProvider>
    <div>
        <App/> 
    </div>
</AuthProvider>

</BrowserRouter>,
)
