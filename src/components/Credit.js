import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';
import { FaWhatsappSquare } from 'react-icons/fa';
export default function Credit() {
    return (
        <div className="credit__wrapper">
            <div className="credit__container">
                <span>The credit purchase in Mobile Centre shop chain is available for people over 18 years old.</span>
                <span> For credit the price of the product remains unchanged, only the bank service charge or the interest rate increases depending on the choice of the bank.</span>
                <span>The credit is issued in place beginning from 0% deposit.</span>
                <span>The account maintenance fee and the interest rate depend on the choice of the bank.</span>
                <span> "Unibank" OJSC - 0,80% monthly</span>
                <span>"VTB - Armenia Bank" CJSC - 0% - 24% yearly</span>
                <span>"ACBA Bank" OJSC - 18,5% yearly</span>
                <span> "Inecobank" CSJC - 19% - 21,7% yearly</span>
                <span>
                    For more detailed information we suggest to visit our chain shops or call : 015 70-00-00, 011-54-00-00.</span>
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