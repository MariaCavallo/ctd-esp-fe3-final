import { useContext } from 'react';
import { DarkModeContext } from './utils/global.context'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const { state, dispatch } = useContext(DarkModeContext);
  return (
      <nav>
          <div className='navName'>
            <h1>DH odonto</h1>
          </div>
          <div className='navLinks'>
            <Link to="/home">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/Favs">Favs</Link>
            <button onClick={() => dispatch({ type: state.bgFlag })}>🌙</button>
          </div>
      </nav>
    )
  }

export default Navbar