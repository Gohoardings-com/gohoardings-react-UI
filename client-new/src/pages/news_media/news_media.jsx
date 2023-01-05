import React, { useState, useEffect } from "react";
import "./news_media.scss";
import Branding from "../../components/branding/branding";
import { goh_media_and_newsApi } from "../../apis/apis";

const Newsmedia = () => {
  const [posts, setPosts] = useState([]);
  const staff = async () => {
    const data = await goh_media_and_newsApi();
    setPosts(data);
  };

  useEffect(() => {
    staff();
  }, []);
  console.log(posts);
  return (
    <>
      <Branding title="News & Media " />
      <section className="mt-5 ">
        <div className="container-xxl  container-xl container-lg container-md news pt-3">
          <h5 className=" p-2 ps-3 news-heading ">Latest News</h5>
          <div className="card mb-3">
            {!posts ? (
              <></>
            ) : (
              <>
                {posts.map((el, i) => (
                  <>
                    <div className="row" key={i}>
                      <div className="col-md-4">
                        <img
                          src={`https://www.gohoardings.com/gohadmin/uploads/news_events/listing-16.jpg`}
                          //  src={`https://www.gohoardings.com/gohadmin/uploads/news_events/${el.featured_image}`}
                          className="img-fluid rounded-start"
                          alt="..."
                          id="news-img"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{el.title}</h5>
                          <p className="card-text">
                            <small className="text-muted">
                              {`Last updated ${el.modified_datetime} `}
                            </small>
                            <br />
                            <small>{el.slug}</small>
                          </p>
                          <p className="card-text">{el.short_description}</p>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </>
                ))}
              </>
            )}

            <div className="row">
              <div className="col-md-3">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/000/198/210/original/breaking-news-background-with-earth-planet-vector.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                  id="news-img"
                />
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">
                    A Discount Toner Cartridge Is Better Than Ever.
                  </h5>
                  <p className="card-text-new">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                  <p className="card-text-new mt-3">
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
