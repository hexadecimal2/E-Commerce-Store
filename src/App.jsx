import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ItemView from './pages/ItemView';
import { Provider } from 'react-redux';
import './App.css';

function App() {
  return (
    <>
      <Provider>
          <BrowserRouter>
          <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/item-view' element={<ItemView />} />
          </Routes>
        </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
