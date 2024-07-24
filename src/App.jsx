import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ItemView from './pages/ItemView';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import AddPayment from './pages/AddPayment';
import AddAddress from './pages/AddAddress';
import CheckBag from './pages/CheckBag';

function App() {
  return (
    <>
      <Provider store={store}> 
          <BrowserRouter> 
          <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/item-view' element={<ItemView />} />
          <Route path='/check-bag' element={<CheckBag/>}/>
          <Route path='/add-payment' element={<AddPayment />} />
          <Route path='/add-address' element={<AddAddress />} />
          </Routes>
        </BrowserRouter>
      </Provider> 
    </>
  );
}

export default App;
