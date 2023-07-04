import { useContext, useState } from "react";
import Counts from "../../components/Counts";
import { list } from "../../components/List";
import { Context } from "../../components/Context";
import { FaTrash, FaHeart } from "react-icons/fa";
import SweetPagination from "sweetpagination";
export default function Productlist() {
    const filternames = ['Heatphones', 'Cases', 'Laptop', 'Monitor', 'Notebook', 'Phones', 'PowerBanks', 'Processors', 'Videos', 'Watches'];
    const [currentPageData, setCurrentPageData] = useState([]);
    const [filtered, setFiltered] = useState(list);
    const show = current => {
        let f = list.filter(item => item.category === current);
        setFiltered(f);
    }

    const $ = useContext(Context);

    return (
        <div className="products__list">
            <div className="products__filter__bar">
                {filternames.map(item => {
                    return <span key={item} onClick={() => {
                        show(item);
                    }}>{item}</span>
                })}
            </div>
            <div className="cont">
                <div className="products__list__content">
                    {currentPageData.map(item => {
                        return <div key={item.id} className="products__list__item"
                            style={{ background: $.cart.includes(item) ? '#252525' : '#141414' }}>
                            <img src={item.picture} alt="" />
                            <FaHeart className="favorite" onClick={() => {
                                if ($.favorite.includes(item)) {
                                    $.removeFavorite(item.id);
                                }
                                else {
                                    $.addFavorite(item);
                                }
                            }} style={{fill : $.favorite.includes(item) ? 'gold' : '#fff'}}/>
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
                            <FaTrash style={{ transform: $.cart.includes(item) ? 'scale(1)' : 'scale(0)' }} onClick={() => {
                                $.removeCart(item.id);
                                $.setTotal($.total - (item.price * item.isQuan))
                                item.isQuan = 1;
                            }} />
                        </div>
                    })}
                </div>
                <SweetPagination
                    currentPageData={setCurrentPageData}
                    dataPerPage={9}
                    getData={filtered}
                    navigation={true}
                />
            </div>
        </div>
    )
}
