import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Headerline() {
  return (
    <div className='header__line'>
      <p>Welcome to <span>Global Electronics</span> official website</p>
      <div className="sing__up__or__sign__in">
        <FaUserAlt />
        <Link to="/Sign in or Sign up">Sign in / Sign up</Link>
      </div>
    </div>
  )
}
