import Homedrag from "./Homedrag";
import Homeinfo from "./Homeinfo";
import Homesection from "./Homesection";
import Homeslider from "./Homeslider";

export default function Home() {
  return (
    <div className="home__container">
        <Homeslider />
        <Homeinfo />
        <Homedrag />
        <Homesection />
    </div>
  )
}
