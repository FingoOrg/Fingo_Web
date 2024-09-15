import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className="h-[100dvh] bg-secondary">
      <div className="h-[90dvh] flex flex-col p-4 pb-0  overflow-scroll">
        <Outlet />
      </div>
      <Navbar />
    </main>
  );
};

export default App;
