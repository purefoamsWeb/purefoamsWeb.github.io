import cloud from "../img/cloud.svg";
import { useRef } from 'react';

function Topnav() {
    const myRef = useRef<null | HTMLDivElement>(null);
    let prevScrollPos = window.scrollY;
    const onScroll = (() => {
        let currScrollPos = window.scrollY;
        if (currScrollPos <= prevScrollPos) {
            // scrolling up.
            if (myRef.current) {
                myRef.current.style.top = "0vh";
            }
        } else {
            if (myRef.current) {
                myRef.current.style.top = "-100vh";
            }
        }
        prevScrollPos = currScrollPos;
    });    
    window.addEventListener('scroll', onScroll);

    return (
        <div className="topnav" ref={myRef}>
        <div className="cloud-1">
            <img src={cloud}></img>
        </div>
        <div className="cloud-2">
            <img src={cloud}></img>
        </div>
        <div className="title">
            <a href="./index.html">Purefoams</a>
        </div>
        <div className="nav-buttons">
            <a>Products</a>
            <a>Contacts & Shipment</a>
        </div>
        </div>
    );
}

export default Topnav;
