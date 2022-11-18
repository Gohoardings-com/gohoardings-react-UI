import React from "react";
import "./news_media.scss";
import Branding from "../../components/branding/branding";

const Newsmedia = () => {
  return (
    <>
      <Branding title="News & Media" />
      <section className="mt-5">
        <div className="container-fluid px-5 news pt-3">
          <h5 className=" p-2 ps-3 news-heading ">Latest News</h5>
          <div className="card mb-3">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/000/198/210/original/breaking-news-background-with-earth-planet-vector.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                  id="news-img"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    A Discount Toner Cartridge Is Better Than Ever.
                  </h5>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.What is Lorem Ipsum? From its medieval origins to the
                    digital era, learn everything there is to know about the
                    ubiquitous lorem ipsum passage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsmedia;
