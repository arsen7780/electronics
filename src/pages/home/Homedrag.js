import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { list } from '../../components/List';
import Counts from '../../components/Counts';
import { useContext } from 'react';
import { Context } from '../../components/Context';
import { FaHeart } from 'react-icons/fa';
export default function Homedrag() {
  const $ = useContext(Context);
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={window.innerWidth <= 425 ? 1 : 4}
    >
      {list.map((item, index) => {
        if (index <= 12) {
          return <SwiperSlide>
            <div className="product__item">
              <img src={item.picture} alt="" />
              <FaHeart className="favorite" onClick={() => {
                if ($.favorite.includes(item)) {
                  $.removeFavorite(item.id);
                }
                else {
                  $.addFavorite(item);
                }
              }} style={{ fill: $.favorite.includes(item) ? 'gold' : '#fff' }} />
              <h2>{item.name}</h2>
              <Counts item={item} />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quaerat facere autem adipisci et, quos sit nulla voluptas sequi sint.</p>
              <span>{item.price}$</span>
              <button style={{ background: $.cart.includes(item) ? 'forestgreen' : 'darkred' }} onClick={() => {
                if ($.cart.includes(item)) {
                  return false
                }
                else {
                  $.addCart(item);
                  $.setTotal($.total + item.price * item.isQuan)
                }
              }}>Add to Cart</button>
            </div>
          </SwiperSlide>
        }
      })}
    </Swiper>
  )
}
