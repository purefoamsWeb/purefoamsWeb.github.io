import ig from "../img/instagram.svg";
import { useRef, useEffect } from "react";

function Slider() {
  const myRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((el) => {
        console.log(el.target, el.isIntersecting)
        if (el.isIntersecting) {
          el.target.classList.add("show-appear");
        } else {
          el.target.classList.remove("show-appear");
        }
      })
    });
    if (myRef.current) {
      observer.observe(myRef.current);
    }
  });

  return (
    <div className="slider">
      <div className="hidden-ig" ref={myRef}>
        <div className="slider-text">
          <p>Follow us @purefoams</p>
          <a
            href="https://www.instagram.com/purefoams/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ig} className="instagram" alt="ig"></img>
          </a>
        </div>
      </div>
      <div className="slider-wrapper">
        <div className="slider-window"></div>
      </div>
    </div>
  );
}

export default Slider;
