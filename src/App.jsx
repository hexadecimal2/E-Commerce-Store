import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ItemView from './pages/ItemView';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import AddPayment from './pages/AddPayment';

function App() {
  return (
    <>
      <Provider store={store}> 
          <BrowserRouter> 
          <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/item-view' element={<ItemView />} />
          <Route path='/add-payment' element={<AddPayment />} />
          </Routes>
        </BrowserRouter>
      </Provider> 
    </>
  );
}

export default App;
