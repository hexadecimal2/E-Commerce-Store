import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ItemView from './pages/ItemView';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/item-view' element={<ItemView />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
