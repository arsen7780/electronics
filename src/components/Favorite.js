import { useContext } from 'react';
import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';
import { FaWhatsappSquare } from 'react-icons/fa';
import { Context } from './Context';
import { FaHeart } from 'react-icons/fa';
import  Counts  from './Counts';
export default function Favorite() {
    const $ = useContext(Context);
    return (
        <div className="favorite__container">
            <div className="products__list__content">
                {$.favorite.map(item => {
                    return <div key={item.id} className="products__list__item">
                        <img src={item.picture} alt="" />
                        <FaHeart className="favorite" onClick={() => {
                            if ($.favorite.includes(item)) {
                                $.removeFavorite(item.id);
                            }
                            else {
                                $.addFavorite(item);
                            }
                            console.log($.favorite)
                        }} style={{ fill: $.favorite.includes(item) ? 'gold' : '#fff' }} />
                        <h2>{item.name}</h2>
                        <Counts item={item} />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat esse facere harum amet eveniet neque sunt, voluptates, autem dolor tenetur vel. Cum, vitae deleniti? Minima voluptatibus cum ex quia?</p>
                        <span>{item.price}$</span>
                        <button onClick={() => {
                            if ($.cart.includes(item)) {
                                return false
                            }
                            else {
                                $.addCart(item);
                                $.setTotal($.total + item.price * item.isQuan)
                            }
                        }} style={{ background: $.cart.includes(item) ? 'forestgreen' : 'darkred' }}>Add to Cart</button>
                    </div>
                })}
            </div>
            <div className="credit__subscribe">
                <div className="credit__subscribe__titles">
                    <h2>Subscribe to Newsletters</h2>
                    <h2>Share on social networks</h2>
                </div>
                <div className="credit__field">
                    <label>
                        <input type="text" placeholder="Add your email address" />
                        <button>Subscribe</button>
                    </label>
                    <div className="subscribe__social__media">
                        <AiFillFacebook />
                        <AiFillTwitterSquare />
                        <FaWhatsappSquare />
                    </div>
                </div>
            </div>
        </div>
    )
}
