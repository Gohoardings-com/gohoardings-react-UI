import React from "react";
import "./faqs.scss";
import { BsCaretDown } from "react-icons/bs";
import faqsData from "./faqsData";
import Branding from "../../components/branding/branding";

const Faqs = () => {
  return (
    <>
      <Branding title="FAQs" />
      <section>
        <div className="container-xxl  container-xl container-lg container-md my-5  question-box  ">
          {faqsData.map((data, index) => {
            return (
              <>
                <p
                  key={index}
                  className=" toggle-btn p-1  ps-2 mb-0"
                  data-bs-toggle="collapse"
                  data-bs-target={data.target}
                >
                  <h4 >

                 {data.id.substring(4, 5)}. {" "}  {data.question} <BsCaretDown className="down" />
                  </h4>
                </p>
                <div className="collapse" id={data.id}>
                  <div className="card-body  text-secondary pb-1 ps-4">
                    <h5>{data.answer}</h5>
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
