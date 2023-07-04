import { Link } from "react-router-dom/dist";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
export default function About() {
    return (
        <div className="about__wrapper">
            <Swiper
                slidesPerView={1}
                grabCursor='true'
            >
                <SwiperSlide style={{ background: 'url(https://www.ctisystems.com/thumbnails/103365-2000-1000-Crop.jpg)' }}></SwiperSlide>
                <SwiperSlide style={{ background: 'url(https://d1dcnte8mfzkpv.cloudfront.net/uploads/2021/12/3a6ae14e52574841f84bc0e6ef03.jpg)' }}></SwiperSlide>
                <SwiperSlide style={{ background: 'url(https://gsot.com/wp-content/uploads/2019/12/gsot-blog-header-3.jpg)' }}></SwiperSlide>
                <SwiperSlide style={{ background: 'url(https://i.insider.com/601c5f6a90dd450018a7af75?width=2000&format=jpeg&auto=webp)' }}></SwiperSlide>
            </Swiper>
            <div className="about__container">
                <div className="sides">
                    <div className="side">
                        <Link>Our company</Link>
                        <Link>Location</Link>
                        <Link>Store managment</Link>
                    </div>
                    <div className="side">
                        <h2>Global <span>Electronics</span></h2>
                    </div>
                    <div className="side">
                        <Link>Sales</Link>
                        <Link>Delivery company</Link>
                        <Link>Call centre</Link>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quasi ut in quia dolorum vel saepe rerum numquam eos, veniam aspernatur deserunt atque accusantium neque, suscipit culpa ex cumque vitae quos unde temporibus nemo fugiat. Porro, nemo aliquid, sit minus sed laudantium cumque animi tenetur libero dolorem magni magnam beatae. Magnam amet voluptatibus facere ut ullam assumenda animi suscipit, inventore odio debitis beatae veritatis, placeat enim nemo unde, sit temporibus! Porro labore optio tenetur, similique iste, distinctio minus dicta quam veniam fugiat exercitationem saepe inventore nobis! Sequi iste architecto quaerat eum deserunt alias reiciendis. Ipsam, maiores eaque. Pariatur, quam corrupti natus, nulla accusantium obcaecati repudiandae sed debitis, deleniti cum enim voluptatibus? Harum cupiditate consequatur, consectetur obcaecati eos quo iure corporis ipsa quibusdam maiores illum similique delectus accusamus ad quae dicta at eaque voluptate facilis! Asperiores unde nam ex quisquam voluptatem consequatur quia culpa doloremque veritatis eligendi iste beatae dicta provident quo adipisci nisi, similique repudiandae accusamus. Perspiciatis, excepturi soluta natus nam aut veritatis obcaecati voluptas tenetur nesciunt officia iure corrupti maxime? Illum omnis temporibus nisi optio inventore sunt rem expedita quasi adipisci quis laboriosam repellendus aut, fugit voluptatum sit aperiam quo. Fugiat adipisci quisquam neque. Aliquam dignissimos enim magnam dolor.</p>

            </div>
        </div>
    )
}