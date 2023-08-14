import snow from "../img/rec-product-1.png";
import pig from "../img/rec-product-2.png";
import bear from "../img/rec-product-3.png";
import img4 from "../img/rec-product-4.png";
import img5 from "../img/rec-product-5.png";
import img6 from "../img/rec-product-6.png";
import img7 from "../img/rec-product-7.png";
import img8 from "../img/rec-product-8.png";
import img9 from "../img/rec-product-9.png";
import {  useEffect } from "react";
import multiRef from "../util/multiRef";

function RecentProducts() {
  const [getRefs, addRef] = multiRef();

  useEffect(() => {
    const refs = getRefs(() => {});
    const observer = new IntersectionObserver((entries) => {
      // const entry = entries[0];
      // console.log(
      //   entry.target,
      //   entry.isIntersecting,
      //   entry.intersectionRect,
      //   entry.intersectionRatio
      // );
      // if (entry.isIntersecting) {
      //   entry.target.classList.add("show-left");
      // } else {
      //   entry.target.classList.remove("show-left");
      // }
      entries.forEach((el) => {
        if (el.isIntersecting) {
          el.target.classList.add("show-left");
        } else {
          // el.target.classList.remove("show-left");
        }
      })
    });
    (refs as unknown as any[]).forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="recent-products">
      <div className="recent-products-title">Featured Products</div>
      
        <div className="recent-products-row-1">
        <div className="hidden" ref={addRef}>
          <div className="recent-products-item">
            <p>First snow by @taketherare ⛄</p>
            <img src={snow} alt="recent-product-1"></img>
          </div>
          </div>
          <div className="hidden" ref={addRef}>
          <div className="recent-products-item">
            <p>Pancake Piggies 🐷🥞</p>
            <img src={pig} alt="recent-product-2"></img>
          </div>
          </div>
          <div className="hidden" ref={addRef}>
          <div className="recent-products-item">
            <p>Snow Bears 🏔🐻</p>
            <img src={bear} alt="recent-product-3"></img>
          </div>
          </div>
        </div>
        <div className="recent-products-row-2">
        <div className="hidden" ref={addRef}>
          <div className="recent-products-item">
            <p>New Jeans McD set 🐇👖</p>
            <img src={img4} alt="recent-product-4"></img>
          </div>
          </div>
          <div className="hidden" ref={addRef}>
          <div className="recent-products-item">
            <p>New Jeans Slime 🐇👖</p>
            <img src={img5} alt="recent-product-5"></img>
          </div>
          </div>
          <div className="hidden" ref={addRef}>
          <div className="recent-products-item">
            <p>Hampers CNY Gift 🧧</p>
            <img src={img6} alt="recent-product-6"></img>
          </div>
          </div>
        </div>
        <div className="recent-products-row-3">
        <div className="hidden" ref={addRef}>
          <div className="recent-products-item">
            <p>RSK Piggy Egg Blankets 🐖🛌</p>
            <img src={img7} alt="recent-product-7"></img>
          </div>
          </div>
          <div className="hidden" ref={addRef}>
          <div className="recent-products-item">
            <p>New Korean cake 🎂</p>
            <img src={img8} alt="recent-product-8"></img>
          </div>
          </div>
          <div className="hidden" ref={addRef}>
          <div className="recent-products-item">
            <p>Christmas Slime 🎄</p>
            <img src={img9} alt="recent-product-9"></img>
          </div>
          </div>
        </div>
      {/* <div className="recent-products-grid">
        <div className="recent-products-item">
          <p>First snow by @taketherare ⛄</p>
          <img src={snow} alt="recent-product-1"></img>
        </div>
        <div className="recent-products-item">
          <p>Pancake Piggies 🐷🥞</p>
          <img src={pig} alt="recent-product-2"></img>
        </div>
        <div className="recent-products-item">
          <p>Snow Bears 🏔🐻</p>
          <img src={bear} alt="recent-product-3"></img>
        </div>
        <div className="recent-products-item">
          <p>New Jeans McD set 🐇👖</p>
          <img src={img4} alt="recent-product-4"></img>
        </div>
        <div className="recent-products-item">
          <p>New Jeans Slime 🐇👖</p>
          <img src={img5} alt="recent-product-5"></img>
        </div>
        <div className="recent-products-item">
          <p>Hampers CNY Gift 🧧</p>
          <img src={img6} alt="recent-product-6"></img>
        </div>
        <div className="recent-products-item">
          <p>RSK Piggy Egg Blankets 🐖🛌</p>
          <img src={img7} alt="recent-product-7"></img>
        </div>
        <div className="recent-products-item">
          <p>New Korean cake 🎂</p>
          <img src={img8} alt="recent-product-8"></img>
        </div>
        <div className="recent-products-item">
          <p>Christmas Slime 🎄</p>
          <img src={img9} alt="recent-product-9"></img>
        </div>
      </div> */}
    </div>
  );
}

export default RecentProducts;
