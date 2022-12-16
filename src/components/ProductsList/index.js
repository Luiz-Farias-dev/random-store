import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../store/reducers/product'; 
import ProductComponent from '../ProductsComponents';
import axios from 'axios';

export default function ProductsList() {
  const dispatch = useDispatch();
  const products = useSelector( state => state.product);
  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    .catch((err => {
      console.log("error", err);
    }))
    dispatch(setProducts(response.data));
  }
  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  )
}
