import React,{useState, useEffect} from "react";
import './testimonial.scss'
import Branding from "../../components/branding/branding";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { goh_testimonialsApi } from "../../apis/apis";

const Testimonial = () => {
  const [posts, setPosts] = useState([])
  const staff = async() =>{
    const data = await goh_testimonialsApi()
    setPosts(data)
  }

  useEffect(()=>{
    staff()
  },[])
console.log(posts);
  return (
    <>
      <Branding title="Testimonials" />
      <div className="container  mt-5">
        <div className="row testimonial-row mt-5">
          {!posts ? <>
          <h1>Loading Please wait</h1>
          </>:<>
         {posts.map((el,i) => (
           <div className="col-md-4">
           <div className="testimonials">
             <img src="https://www.gohoardings.com/gohadmin/uploads/testimonials/anoop.jpg" alt="..." />
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
