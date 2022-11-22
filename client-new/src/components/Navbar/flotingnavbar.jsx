import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './fixednavbar.scss'
import Flotinggnavbar from './fixednavbar';
function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

function useWindowScroll() {
  const [scrollPosition, setScrollPosition] = useState([window.pageYOffset]);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition([window.pageYOffset]);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollPosition;
}
const Fixednavbar = () => {
  const [scroll] = useWindowScroll();
  const [scrollcss, setScrollcss] = useState(false);

  useEffect(() => {
    const handleCss = () => {
      if (scroll > 500) {
        setScrollcss(false);
      } else {
        setScrollcss(true);
      }
    };
    handleCss();
  }, [scroll]);

  return (
    <>
      <div style={scrollcss ? { display: "none" } : { display: "inline-block" }} className="new-search w-auto">   
   <Flotinggnavbar/>
      </div>

    </>
  )
}

export default Fixednavbar
