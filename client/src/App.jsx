import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/buy",
      element:<BuyCredit/>
    },
    {
      path:"/result",
      element:<Result/>
    }
  ])

  return<RouterProvider router={router}/>
}

export default App
