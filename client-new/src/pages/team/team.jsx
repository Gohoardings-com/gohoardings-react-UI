import React,{ useState, useEffect } from "react";
import "./team.scss";
import Fixednavbar from "../../components/navbar/fixednavbar";
import { gohordingStaffAPi } from "../../apis/apis";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import {TiSocialTwitter} from "react-icons/ti"

const Team = () => {
  const [posts, setPosts] = useState([])
  const staff = async() =>{
    const data = await gohordingStaffAPi()
    
    setPosts(data)
  }

  useEffect(()=>{
    staff()
  },[])

  return (
    <>
    <Fixednavbar/>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="inn-pag-ban">
              <img
                src="./images/TH.png"
                alt=""
                className="teambranding-img"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="team-area mt-0 pt-0 mb-5">
          <div className="container">
            <div className="row">
                <div className="experties-title ">
                  <h2 className="text-secondary">Our expert team includes the following Gems</h2>
                </div>
              {posts.map((person, index) => {
                return (
                  <div className="col-md-3 mt-3 col-6" id="maindiv"  key={index}>
                    <div className="single-team    text-center rounded">
                      <div className="team-img d-flex  justify-content-center">
                        <img
                          // src={person.profile_image}
                          src="https://www.gohoardings.com/gohadmin/uploads/testimonials/anoop.jpg"
                          alt={person.firstname} 
                          className="image-fluid rounded-circle pt-2 "
                        /> 
                      </div>
                      <div className="team-content mt-1">
                          <div className="team-info">
                            <h3>{person.firstname} {person.lastname}</h3>
                            <h5>{person.name}</h5>
                          </div>
                          <div className="grid-container mt-2">
                            <div className="grid-item me-1">
                              <FaFacebookSquare className="icon facebook" onClick={person.facebook} />
                            </div>
                            <div className="grid-item me-1">
                              <TiSocialTwitter className="icon twiter" />
                            </div>
                            <div className="grid-item ">
                              <FaLinkedin className="icon linkedin" onClick={person.linkedin}/>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
