import React from 'react';
import '../index.css';

const Footer = () => {
  const handleFacebookClick = () => {
    // Navigate to Facebook page
    window.location.href = 'https://www.facebook.com'; // Replace with your Facebook URL
  };

  const handleLinkedInClick = () => {
    // Navigate to LinkedIn page
    window.location.href = 'https://www.linkedin.com'; // Replace with your LinkedIn URL
  };

  const handleLinkClick = (link) => {
    // Navigate to the specified link
    window.location.href = link;
  };

  return (
    <div className="mt-5 pt-5 pb-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xs-12 about-company">
            <h1>Hackverse</h1>
            <p className="pr-5 text-white-50 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
            <div>
              <i className="fa fa-facebook-square mr-1" onClick={handleFacebookClick}></i>
              <i className="fa fa-linkedin-square" onClick={handleLinkedInClick}></i>
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">Links</h4>
            <ul className="m-0 p-0">
              <li onClick={() => handleLinkClick('/link1')}>Lorem ipsum</li>
              <li onClick={() => handleLinkClick('/link2')}>Nam mauris velit</li>
            </ul>
          </div>
          <div className="col-lg-4 col-xs-12 location">
            <h4 className="mt-lg-0 mt-sm-4">Location</h4>
            <p className="mb-3">22, Lorem ipsum dolor, consectetur adipiscing</p>
            <p><i className="fa fa-phone mr-3"></i>(541) 754-3010</p>
            <p><i className="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col copyright">
            <p><small className="text-white-50">© 2024. All Rights Reserved.</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
