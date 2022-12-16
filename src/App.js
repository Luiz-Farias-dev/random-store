import Header from "./components/Header";
import ProductsList from './components/ProductsList';
import ProductDetail from './components/ProductsDetails';
import { 
   BrowserRouter,
   Routes,
   Route,
 } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ProductsList />} />
          <Route path='/products/:productId'  element={<ProductDetail />} />
          <Route path='*' element={<h1>Page not found</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
