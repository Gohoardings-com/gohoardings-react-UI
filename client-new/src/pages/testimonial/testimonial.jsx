import React, {useEffect, useState} from "react";
import './testimonial.scss'
import Branding from "../../components/branding/branding";
import Fixednavbar from "../../components/navbar/fixednavbar";
import {BsStar, BsStarFill, BsStarHalf} from "react-icons/bs";
import {goh_testimonialsApi} from "../../apis/apis";

const Testimonial = () => {
    const [posts, setPosts] = useState([])

    const staff = async () => {
        const data = await goh_testimonialsApi()
        setPosts(data)
    }

    useEffect(() => {
    staff()
  },[])

  return (
    <>
     <Fixednavbar/>
      <Branding title="Testimonials" />
      <div className="container  mt-5">
        <div className="row testimonial-row mt-5">
          {!posts ? <>
          <h1>Loading Please wait</h1>
          </>:<>
         {posts.map((el,i) => (
           <div className="col-md-4" key={i}>
           <div className="testimonials">
<<<<<<< HEAD
             <img src={el.image ? `https://www.gohoardings.com/gohadmin/uploads/testimonials/${el.image}` : `../../clientslogo/user-profile.png`} alt="..." />
=======
                      <img src={el.image ? `https://www.gohoardings.com/gohadmin/uploads/testimonials/${el.image}` : `../../clientslogo/user-profile.png`} alt="..." />

>>>>>>> 11980b76bc3f5c2bdf034130033c851e40f69f7c
             <h3>{el.name}</h3>
             <div className="stars">
               <BsStarFill />
               <BsStarFill />
               <BsStarFill />
               <BsStarHalf />
               <BsStar />
             </div>
            <p dangerouslySetInnerHTML={{__html: el.testimony}}/>
           </div>
         </div>
         ))}
          </>}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
