import { NavLink } from 'react-router-dom';
import { BsFillTelephoneFill, BsBusFrontFill, BsFillCreditCard2FrontFill} from 'react-icons/bs';
import { MdAccessTimeFilled} from 'react-icons/md';
export default function Footer() {

    return(
        <footer>
            <ul className="navigation__menu">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/About'>About</NavLink></li>
            <li><NavLink to='/Products'>Products</NavLink></li>
            <li><NavLink to='/Credit'>Credit</NavLink></li>
            <li><NavLink to='/Contact'>Contact</NavLink></li>
        </ul>
        <hr />
        <div className="footer__social__media">
            <div className="footer__social__media__item">
                <BsFillTelephoneFill />
                <span>+374 99 88 99 88</span>
            </div>
            <div className="footer__social__media__item">
                <MdAccessTimeFilled/>
                <span>Work Hours</span>
            </div>
            <div className="footer__social__media__item">
                <BsBusFrontFill />
                <span>Delivery</span>
            </div>
            <div className="footer__social__media__item">
                <BsFillCreditCard2FrontFill/>
                <span>Credit Rules</span>
            </div>
        </div>
        <img src="https://www.mobilecentre.am/assets/img/payment-methods-footer.svg" alt="" />
        <p>&copy; 2023 Global Electronics LLC. All rights reserved (AM)</p>
        </footer>
    )
}