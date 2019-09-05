import React, { Component } from "react";
import './Homepage.css';

export default class Homepage extends Component {
    render() {

      return (
        <div id="homepage">
           <div className="parallax">
             <div className="cloud">
               <div className="logoMain" >
                 
          <img src={"https://aerialridge.com/wp-content/uploads/elementor/thumbs/Aerial-Ridge-Logo-New_-2018-crop-oa4z3nerb2nhnwc1co1ux0ms4bt88vqfr23hcpd2c4.png"}alt=""/> 
           </div>
           </div></div>
           <div className="slogan">
               <h1>FROM A DIFFERENT</h1>
               
               <div id="blue">
                 <h1>POINT OF VIEW</h1>
                </div>
            </div>

           <div id="content">
          <img src='http://www.pngmart.com/files/6/Drone-PNG-Photos.png' alt=""/>
               <h1>WHAT WE DO</h1>
               <h3>AERIAL RIDGE IS A FILM PRODUCTION & MARKETING COMPANY.
WE CREATE CONTENT FOR BUSINESSES OF ANY SIZE AND DISTRIBUTE ACROSS ALL MEDIA PLATFORMS.</h3>
           </div>
           <div id="portfolio">
             <h1><strong>SERVICES</strong></h1>
             <div className="row">
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">SALES/MARKETING VIDEOS</h5>
                      <p className="card-text">For businesses in today's time, video content is becoming vital for reaching and converting shopper's into customer's. We've become a visual society and here at Aerial Ridge we can show the value of your company through unique storytelling tailored specifically for your business.</p>
                      <a href="#" className="btn btn-primary">LEARN MORE</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">FILM + CINEMATOGRAPHY</h5>
                      <p className="card-text">Aerial Ridge produce's visual storytelling through brand stories, product photography, event video's, commercial's, documentaries and more. You can bring us your own idea's or let us take the lead, our team at Aerial Ridge turn's idea's into storytelling. From pre-production right until we deliver the final product, we find unique way's to tell your story.</p>
                      <a href="#" className="btn btn-primary">LEARN MORE</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">VIDEO EDITING</h5>
                      <p className="card-text">Already have footage that requires editing? Or would you like us to edit something we filmed for you? Great, we can help! Our team at Aerial Ridge is trained in video/photography editing and can really make your content stand out from the rest!</p>
                      <a href="#" className="btn btn-primary">LEARN MORE</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
           <div className="parallax2">
          </div>
          <div id="about">
        <h1><strong>ABOUT US</strong></h1>
        </div>
        <div className="halfimgcontainer">
        <div className="halfimg">
          <div className="aboutus">
        <img src='https://static.wixstatic.com/media/1f41a3_cad0725b8b354dea991450c0d0d5df61~mv2_d_4000_3000_s_4_2.jpg/v1/fill/w_4000,h_3000/DJI_0014%20copy-2.jpg' alt=""/>
        <h2>WHO WE ARE</h2>
        <p>MIKE SMITH
Mike is the Owner, Cinematographer, and Drone Pilot of Aerial Ridge.

Born and raised in the small fishing community of Yarmouth, Nova Scotia. That’s where Mike found his passion for filmmaking.

In 2014 Mike moved to Halifax, NS and began studying Digital Filmmaking at da Vinci College. While attending he had the opportunity to work on many short films, documentary’s, interview’s, and a feature film movie where Mike gained quality experience by working and living on set.

   After graduating in 2016 Mike moved back home to Yarmouth  Mike created Aerial Ridge Marketing & Film.</p>
       </div> </div></div>
</div>


       
      );
    }
  }
  