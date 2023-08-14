import logo from "../img/logo.svg"

function AboutUs() {
    return (
      <div className="about-us">
        <div className="about-us-text">
          <div className="about-title">About Us:</div>
          <div className="about-desc">
            We are a squishy and slime shop from Indonesia. We sell products
            from outside like blah blah thank you for visiting, this is just
            randome text for now. please fill this later. Check out socials and
            something: random text for now will fill in icons for this text to fill
            text to fill text to filltext to filltext to filltext to fill
            text to fill text to fill text to fill text to fill text to fill 
            text to fill text to fill text to fill text to fill
          </div>
        </div>
        <img src={logo} className="about-us-img" alt="logo"></img>
      </div>
    );
}

export default AboutUs;