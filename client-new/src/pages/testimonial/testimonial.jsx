import React from "react";
import './testimonial.scss'
import Branding from "../../components/branding/branding";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Testimonial = () => {
  return (
    <>
      <Branding title="Testimonials" />
      <div className="container  mt-5">
        <div className="row testimonial-row mt-5">
          <div className="col-md-4">
            <div className="testimonials">
              <img src="https://cdn.pastemagazine.com/www/blogs/lists/2020/10/29/johnny-bravo-sq.png" alt="..." />
              <h3>Full Name</h3>
              <div className="stars">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
                <BsStar />
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonials">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG10uVO0Kr5bstVtlk0WcAaIlMa0uXWXiIQg&usqp=CAU" alt="..." />
              <h3>Full Name</h3>
              <div className="stars">
              <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
                <BsStar />
                <BsStar />
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonials">
              <img src="http://jimmyakin.com/wp-content/uploads/img79.jpg" alt="..." />
              <h3>Full Name</h3>
              <div className="stars">
              
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
