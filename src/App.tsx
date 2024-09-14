import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import FormPath from './screens/FormPath'
import './App.css'

function App() {


const App = () => {
  return (
    <main className='h-[100dvh] bg-primary'>
      <div className='h-[90dvh]'>
      <Outlet />
      </div>
      <Navbar />
    </main>
  )
}

export default App