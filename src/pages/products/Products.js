import Productlist from "./Productlist";
import Productssection from "./Productssection";

export default function Products() {
  return (
    <div className="products__container">
        <Productssection />
        <Productlist />
    </div>
  )
}
