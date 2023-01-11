import React, {useEffect, useState} from "react";
import "./faqs.scss";
import {BsCaretDown} from "react-icons/bs";
import Fixednavbar from "../../components/navbar/fixednavbar";
import Branding from "../../components/branding/branding";
import {goh_faqsApi} from "../../apis/apis";

const Faqs = () => {
  const [posts, setPosts] = useState([])
  const staff = async() =>{
    const data = await goh_faqsApi()
    setPosts(data)
  }

  useEffect(()=>{
    staff()
  },[])

  return (
    <>
    <Fixednavbar/>
      <Branding title="FAQs" />
      <section>
        <div className="container-fluid px-5  question-box mt-5 mb-5 p-2 ">
<<<<<<< HEAD
          {posts.map((data, index) => {
=======
        {posts.map((data, index) => {
>>>>>>> 11980b76bc3f5c2bdf034130033c851e40f69f7c
            let abc = 'a' + data.id;
            return (
              <>
                <p
                  key={index}
                  className=" toggle-btn p-1 ps-2 mb-0 "
                  data-bs-toggle="collapse"
                  data-bs-target={`#${abc}`}
                >
                  <h4>
                    {data.subject} <BsCaretDown className="down" />
                  </h4>
                </p>
                <div className="collapse" id={abc}>
<<<<<<< HEAD
                  <div className="card-body  text-dark pb-1 ps-2">
=======
                  <div className="card-body  text-secondary pb-1 ps-2">
>>>>>>> 11980b76bc3f5c2bdf034130033c851e40f69f7c
                    <h5>{data.description}</h5>
                  </div>
                </div>
                <hr />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Faqs;
