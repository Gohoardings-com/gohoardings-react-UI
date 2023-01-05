import React,{useState, useEffect} from "react";
import "./faqs.scss";
import { BsCaretDown } from "react-icons/bs";
import faqsData from "./faqsData";
import Branding from "../../components/branding/branding";
import { goh_faqsApi } from "../../apis/apis";

const Faqs = () => {
  const [posts, setPosts] = useState([])
  const staff = async() =>{
    const data = await goh_faqsApi()
    setPosts(data)
  }

  useEffect(()=>{
    staff()
  },[])
  console.log(posts);
  return (
    <>
      <Branding title="FAQs" />
      <section>
<<<<<<< HEAD
        <div className="container-fluid px-5  question-box mt-5 mb-5 p-2 ">
          {posts.map((data, index) => {
=======
        <div className="container-xxl  container-xl container-lg container-md my-5  question-box  ">
          {faqsData.map((data, index) => {
>>>>>>> 336f61aba40588afd041920892c119606a62834f
            return (
              <>
                <p
                  key={index}
                  className=" toggle-btn p-1  ps-2 mb-0"
                  data-bs-toggle="collapse"
                  data-bs-target={`"#${data.id}"`}
                >
<<<<<<< HEAD
                  <h4>
                    {data.subject} <BsCaretDown className="down" />
                  </h4>
                </p>
                <div className="collapse" id={data.id}>
                  <div className="card-body  text-secondary pb-1 ps-2">
                    <h5>{data.description}</h5>
=======
                  <h4 >

                 {data.id.substring(4, 5)}. {" "}  {data.question} <BsCaretDown className="down" />
                  </h4>
                </p>
                <div className="collapse" id={data.id}>
                  <div className="card-body  text-secondary pb-1 ps-4">
                    <h5>{data.answer}</h5>
>>>>>>> 336f61aba40588afd041920892c119606a62834f
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
