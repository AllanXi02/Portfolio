import React, { useState, useEffect } from 'react';
import "./HomeLink1.css";
import AIImage1 from './imgs/AI0.png';
import AIImage2 from './imgs/AI1.png';
import AIImage3 from './imgs/AI4.png';
import AVPImage1 from './imgs/AVP0.png';
import AVPImage2 from './imgs/AVP1.png';
// import AVPImage3 from './imgs/AVP2.png';
import BlockChainImage from './imgs/BlockChain0.png';

function Homelink1() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      title: 'Immersive Application Development',
      content: <HomeSub1 />,
    },
    {
      title: 'AI-Driven Frontend Code Generation',
      content: <HomeSub2 />,
    },
    {
      title: 'Blockchain Project',
      content: <HomeSub3 />,
    },
  ];

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      // Enter key
      setActiveTab(event.target.dataset.index);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className="home">
      <h2 className="home__title">Current Projects</h2>
      <div className="home__tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`home__tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            data-index={index}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="home__content">{tabs[activeTab].content}</div>
    </div>
  );
}

function HomeSub1() {
  return (
    <div className="homelink1">
      <div className="image-container">
        <img
          src={AVPImage1}
          alt="Immersive Application"
          className="home__image"
        />
        <img
          src={AVPImage2}
          alt="Immersive Application"
          className="home__image"
        />
        {/* <img
          src={AVPImage3}
          alt="Immersive Application"
          className="home__image"
        /> */}
      </div>
      <p className="home__description">
        <strong>Project Background:</strong> This project involves developing an immersive application based on visionOS. The application leverages virtual reality (VR) and augmented reality (AR) technologies to provide users with a novel interactive experience.
        <br />
        <strong>Project Progress:</strong> In the early stages, successful implementation of 3D interactions and expansion effects has been achieved. The current focus is on exploring the creation of more complex and refined 3D models to further enhance user experience.
      </p>
    </div>
  );
}

function HomeSub2() {
  return (
    <div className="homelink1">
      <div className="image-container">
        <img
          src={AIImage1}
          alt="AI-Driven Frontend Code Generation"
          className="home__image"
        />
        <img
          src={AIImage2}
          alt="AI-Driven Frontend Code Generation"
          className="home__image"
        />
        <img
          src={AIImage3}
          alt="AI-Driven Frontend Code Generation"
          className="home__image"
        />
      </div>
      <p className="home__description">
        <strong>Project Background:</strong> This project utilizes artificial intelligence to automate the generation of frontend interactive code, thereby improving development efficiency and code quality.
        <br />
        <strong>Project Progress:</strong> Basic 2D graphic generation has been successfully implemented. Efforts are now being directed towards exploring the application of 3D frameworks to provide richer and more complex frontend interactions.
      </p>
    </div>
  );
}

function HomeSub3() {
  return (
    <div className="homelink1" aria-label="Blockchain Project" >
      <img
        src={BlockChainImage}
        alt="Blockchain Project"
        className="home__image"
      />
      <p className="home__description">
        <strong>Project Background:</strong> Interest in blockchain technology has led to the development of a new blockchain project, named MEME coin, in collaboration with partners. The project aims to utilize the decentralization and transparency of blockchain technology to offer a new digital asset trading platform.
        <br />
        <strong>Project Progress:</strong> As the project manager, responsibilities include overall project planning and execution. Initial preparations for the project have been completed, and efforts are now focused on advancing to the launch stage.
      </p>
    </div>
  );
}

export default Homelink1;
