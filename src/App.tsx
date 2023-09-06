import { createBrowserRouter } from 'react-router-dom'

//pages
import { Home } from './pages/home'
import { Admin } from './pages/admin'
import { Login } from './pages/login'
import { Networks} from './pages/networks'

import { Private } from './routes/Private'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/admin",
    element:<Private> <Admin/> </Private> 
  },
  {
    path:"/admin/social",
    element:<Networks/>
  }
])

export {router}

function App() {
  
  return (
  
      <div>
        <h1>Pagina teste</h1>
       
      </div>
      
  )
}

export default App
