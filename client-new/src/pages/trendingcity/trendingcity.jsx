import React, {useEffect} from "react";
import "./trendingcity.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {mediawithcity} from "../../action/adminAction";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import VariantsExample from "../../components/loading/loading";

const Trendingcity = () => {
  const dispatch = useDispatch();

  const data = async () => {
    const category_name = "traditional-ooh-media";
    const city_name = "delhi";
    dispatch(mediawithcity(category_name, city_name));
  };


  useEffect(() => {
    data();
  }, []);
  const { search, loading } = useSelector((state) => state.search);
  let  newData;
if(!loading){
 newData = search.splice(0,8)
}
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
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 0,
          },
        },
      ],
    };
  }

  let slider = settings;

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

        {loading ? (
<<<<<<< HEAD
          <div className=" container ">
          <div className="row  text-center my-3">
            <VariantsExample />
          </div>
        </div>
=======
            <div className=" container ">
            <div className="row  text-center my-3">
              <VariantsExample />
            </div>
          </div>
>>>>>>> 11980b76bc3f5c2bdf034130033c851e40f69f7c
        ) : (
          <>
      
              {!loading == false ? 
<<<<<<< HEAD
            <div className=" container ">
=======
			<div className=" container ">
>>>>>>> 11980b76bc3f5c2bdf034130033c851e40f69f7c
            <div className="row  text-center my-3">
              <VariantsExample />
            </div>
          </div>
              :
              <>
              <Slider {...slider}>
              {newData.map((pos, i) => (
                <div className="container pt-3" key={i}>
                  <div className="row  ">
                    <div className="col p-3 ">
                      <Link
                        to={`/details/${pos.category_name}/${pos.meta_title}`}
                      >
                        <div className="trending-card-img  rounded-2">
                             <img
                             className="  rounded-2  trending-cardd "
                             key={i}
                             src={
                              pos.thumb.startsWith("https")
                                 ? pos.thumb
                                 : `https://${pos.mediaownercompanyname
                                     .trim()
                                     .split(" ")
                                     .slice(0, 2)
                                     .join("_")
                                     .toLowerCase()}.odoads.com/media/${pos.mediaownercompanyname
                                     .trim()
                                     .split(" ")
                                     .slice(0, 2)
                                     .join("_")
                                     .toLowerCase()}/media/images/new${pos.thumb}`
                             }
                           />
                           
                        
                          <div className="bottom-left">Delhi</div>
                          <div className="bottom-left-media">
                            {pos.medianame.substring(0, 17)}...
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
              </> }
          </>
        )}
      </div>
    </>
  );
};

export default Trendingcity;