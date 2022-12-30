import React, { useEffect } from "react";
import "./trandingcity.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { mediawithcity } from "../../action/adminAction";
import { useDispatch, useSelector } from "react-redux";

const Trandingcity = () => {
  const dispatch = useDispatch()
  
  
  const data = async () => { 
    const category_name = "digital-media"
    const city_name = "delhi"
    dispatch(mediawithcity(category_name, city_name)
    );
  };
  
  useEffect(() => {
    data();
  }, []);
  const { search, loading } = useSelector((state) => state.search);

  {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      speed: 4700,
      pauseOnHover: true,
      autoplaySpeed: 4700,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1366,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 0,
          },
        },
      ],
    };
  }
  return (
    <>
      <div className="container-xxl  container-xl container-lg container-md  mt-5 mt-md-2 mb-md-4  py-5 mb-5 trending-contain ">
        <section>
          <h1 className="text-center text-nowrap ">
            Choose what is Trending in your City
          </h1>
          <h6 className=" text-center">
            Choose the best ways to deliver relevant <br />
            messages to the relevant audience.
          </h6>
        </section>

        {loading || loading == null? (
          <>
            <h1>Loading... Please Wait</h1>
          </>
        ) : (
          <>
            <Slider {...settings}>
              {search.map((pos, i) => (
                <div class="container pt-3 ">
                  <div class="row  ">
                    <div class="col p-3 ">
                      <div className="trending-card-img  rounded-2">
                        <img
                          src={pos.thumb}
                          className="  rounded-2  trending-cardd "
                          key={i}
                        />
                        <div className="bottom-left">Delhi</div>
                        <div className="bottom-left-media">
                          {pos.medianame.substring(17, 30)}{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </>
        )}
      </div>
    </>
  );
};

export default Trandingcity;
