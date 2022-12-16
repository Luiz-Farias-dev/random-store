import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductComponents() {
  const products = useSelector( state => state.product);
  return (
    <div>
      {products.map(item => (
        <div className="four column wide" key={item.id}>
          <Link to={`/products/${item.id}`}>
            <div className="ui link cards">
              <div className="card">
                <div className="image"><img src={item.image} alt={item.title} /></div>
                <div className="content">
                  <div className="header">{item.title}</div>
                  <div className="meta price">{item.price}</div>
                  <div className="meta">{item.category}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

