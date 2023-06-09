import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal } from './features/card/cardSlice';
import { useEffect } from 'react';
import Modal from './components/Modal';

function App() {
  const { cartItems } = useSelector((store)=> store.cart);
  const { isOpen } = useSelector((store)=> store.modal);
  const dispatch = useDispatch()
   useEffect(()=> {
    dispatch(calculateTotal())
   },[cartItems,dispatch])
  return(
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
    ) 
}
export default App;
