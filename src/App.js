import './App.css';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="container p-5 row" style={{margin:'5% auto'}}>
    <div className="col-md-6 shadow p-4">
      <Shop/>
    </div>
    <div className="col-md-6 shadow p-4">
      <Cart/>
    </div>
    </div>
  );
}

export default App;
