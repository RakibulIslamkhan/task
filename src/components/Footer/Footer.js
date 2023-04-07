import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-div">
        <div className="footer-logo">
          <img src="../Tech.png" alt="" />
          <p className="footer-title-one">
            Techport is world's leading community for creatives to share,grow,
            and get hired.
          </p>
          <p style={{textAlign:'center'}}>Don't miss out! Join Our Newsletter</p>
          <div style={{margin:'1rem 0', width:'100%'}}>
            <input type="text" style={{borderRadius:'8px', padding:'4px 20px', outline:'none', border:'1px solid gray', width:'75%'}} />
            <button type="button" style={{background:'#630EB2', padding:'4px 25px',color:'#fff', borderRadius:'10px', border:'none', transform:'translateX(-15px)'}}>Join</button>
          </div>
          <span style={{fontSize:'12px'}}>
            Yes, I would like to receive e-mail with special offers, Website
            updates.
          </span>
          <p style={{fontSize:'10px', marginTop:'0.5rem'}}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English
          </p>
        </div>
        <div className="footer-list">
        <div>
          <h3 style={{marginBottom:"1rem"}}>For designers</h3>
          <li> Explore design </li>
          <li>Work </li>
          <li>Design blog</li>
          <li>Overtime podcast </li>
          <li>Playoffs</li>
          <li>Weekly warm up </li>
          <li>Refer a friend </li>
          <li>Code of conduct </li>
        </div>
        <div>
          <h3 style={{marginBottom:"1rem"}}>Hire designers</h3>
          <li>Post a job opening  </li>
          <li>Post a freelance</li>
          <li>Project </li>
          <li>Search for definers</li>
          <li>Brands</li>
          <li>Advertise with us</li>
        </div>
        <div>
          <h3 style={{marginBottom:"1rem"}}>Community</h3>
          <li>Customer Success </li>
          <li>Stories </li>
          <li>Community hub </li>
          <li>Forum </li>
          <li>Influencer</li>
          <li>Podcast </li>
          <li>Invite a Friend</li>
          <li>Become a Seller</li>
          <li>Community Standards</li>
        </div>
        <div>
          <h3 style={{marginBottom:"1rem"}}>About</h3>
          <li>About Us </li>
          <li>Social Responsibility </li>
          <li>Partner Program</li>
          <li>Affiliates  </li>
          <li> Sell your art </li>
          <li>Jobs  </li>
          <li>Artist Blog </li>
        </div>
        </div>
      </div>
    </footer>
  );
}
