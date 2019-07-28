import React, { Component } from 'react';
import { Parallax } from "react-parallax";



  const insideStyles = {
    background: "grey",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };
  const image1 =
  "https://libertylocksmithphiladelphia.com/wp-content/uploads/2016/09/philadelphia-skyline-sunset-night-city-hall-william-pen-high-definition-hd-professional-photography.jpg";

  const image2 =
  "https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/26114624_10155214790458907_8976025486602783313_o.jpg?_nc_cat=106&_nc_oc=AQlESlMoHn2MfGtjTkgcQYqRnItYQ3J5GNSDd5WJ8HQbZwQPJ4zRYsLw4USpPwP0R0i5UylMYhDt7Tsgb1Qtp9Ro&_nc_ht=scontent-lga3-1.xx&oh=d62dd554067a079c32df348ef9028632&oe=5DA5D132";

  const image3 =
  "https://media.licdn.com/dms/image/C4E1BAQGRLFsQacL9MA/company-background_10000/0?e=2159024400&v=beta&t=QOg31uO3ukZFaWO3AA16h1L4EG0csFy4RFEBZm9puqE";

  const image4 =
  "https://data.govt.lc/sites/default/files/styles/story_image_full/public/story/quill-pen-1-flickr-finlap-213926774-cc-by-mod.jpg?itok=z6au1gIk";

  const image5 =
  "https://venturebeat.com/wp-content/uploads/2018/12/C.jpg?fit=2596%2C1317&strip=all";
export default class Home extends Component {
    render(){
        return(
        <div>
    <Parallax bgImage={image2} strength={300} style={{ height:"50%", width:"100%", marginTop: 100, marginBottom: 200 }}>
      <div style={{height: 500 }}>
        <div style={insideStyles}>Hello, I'm Rory Anderson</div>
      </div>
    </Parallax>
    <Parallax bgImage={image1} strength={700} style={{marginTop: 100, marginBottom: 200 }}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>I Live in Philadelphia</div>
      </div>
    </Parallax>
    <Parallax bgImage={image3} strength={200} style={{marginTop: 100, marginBottom: 200 }}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>I Work for a Software Development Company!</div>
      </div>
    </Parallax>
    <Parallax bgImage={image4} strength={200} style={{marginTop: 100, marginBottom: 200 }}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>So Sign My Guestbook?</div>
      </div>
    </Parallax>
    <Parallax
      bgImage={image5}
      strength={200}
      style={{marginTop: 100, marginBottom: 150 }}
      renderLayer={percentage => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 125, 0, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * 1000,
              height: percentage * 1000
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
        <div HREF="mailto:rory.anderson07@gmail.com" style={insideStyles}>Or Send Me an Email at: Rory.Anderson07@gmail.com</div>
      </div>
    </Parallax>
    </div>
        )
    }
}