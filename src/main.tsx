import { StrictMode } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Helloworld from './pages/helloWorld.tsx'
import { Layout } from './Layout.tsx'
import { Cards } from './pages/tailwindStyling.tsx'
import { ColorChange } from './pages/ColorChange.tsx'
import { PasswordGenerator } from './pages/PasswordGenerator.tsx'
import { CurrencyConverter } from './pages/CurrencyConverter.tsx'
// import { CustomInputBox } from './components/inputBox.tsx'


const employee = {
  employee_id: "6789tfui6787itftyg8u",
  name: "Dibyendu Kar",
  age: 23,
  blood_group: "O-"
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<App />} />
      <Route path='/hello-world' element={<Helloworld />} />
      <Route path='/tailwind-design' element={<Cards employee={employee} company='Asiczen Technologies Pvt ltd' />} />
      <Route path='/color-change' element={<ColorChange />} />
      <Route path='/password-generator' element={<PasswordGenerator />} />
      <Route path='/currency-converter' element={<CurrencyConverter />} />
      {/* <Route path='/custom-input' element={<CustomInputBox />} /> */}
    </Route>
  )
)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
