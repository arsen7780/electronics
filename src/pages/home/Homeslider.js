import { useEffect, useState } from "react";
import  Typewriter  from 'typewriter-effect';

export default function Homeslider() {
    const sliderPictures = ['https://transportvip.cz/images/slideshow-sluzby/web.jpg', 'https://www.wallpaperuse.com/wallp/17-171769_m.jpg', 'https://www.androidworld.it/wp-content/uploads/2020/05/oppo-reno-ace-2-neon-genesis-evangelion-13-2500x1000.jpg', 'https://i.imgur.com/kXRdWiS.jpg', 'https://i.pinimg.com/originals/42/b8/83/42b883318376c883e44cbc2024d244a5.png', 'https://i.pinimg.com/originals/40/a9/c3/40a9c329dba2278c9775798067ebae2d.jpg'];
    const sliderContents = ['Phones', 'Notebookes', 'Watches', 'Smart TV', 'Playstation', 'Accessories'];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      let h1 = document.querySelector('.home__container__slider > h1');
      let button = document.querySelector('.home__container__slider > button');
      h1.style = 'opacity : 0; transform : translateY(-200px)';
      button.style = 'opacity : 0; transform : translateY(-200px)';
      setTimeout(() => {
        h1.style = 'opacity : 1; transform : translateY(0)';
      button.style = 'opacity : 1; transform : translateY(0)';
      }, 500);
    }, [current])

    setTimeout(() => {
        setCurrent(current + 1);
        if(current > sliderContents.length - 2){
            setCurrent(0);
        }
    }, 4000);

  return (
    <div className="home__container__slider" style={{background : `url(${sliderPictures[current]})`}}>
        {/* <div className="dots">
          {sliderPictures.map((slide, i) => {
            return  <input type="radio" name="slider" key={i} onClick={() => setCurrent(i)}/>
          })}
          </div> */}
          <h1><Typewriter options={{
            strings : [sliderContents[current]],
            autoStart : true,
            loop : true
          }}></Typewriter></h1>
          <button>Show More</button>
    </div>
  )
}
