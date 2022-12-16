import { Link } from "react-router-dom"

export default function Header() {
  return (
   <header className="ui fixed menu">
    <div className="ui container center">
        <h2>
          <Link to='/'>
            Random Store
           </Link>  
        </h2>
     </div>
   </header>
  )
}
