import React from "react";
import Carousel from "./Carousel";
import "./Aboutlink2.css";

function Aboutlinke2() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1556790989-1f992d023b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      alt: "David Austin Roses",
    },
    {
      src: "https://images.unsplash.com/photo-1552256400-b4e8b9b3ae22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80",
      alt: "Alba Roses",
    },
    {
      src: "https://images.unsplash.com/photo-1606048005590-ac109542b311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      alt: "Buque Roses",
    },
    {
      src: "https://images.unsplash.com/photo-1607427747698-851d256789ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      alt: "Angelina Rose",
    }
  ];

  return (
    <div className="home" aria-label="Gallery">
      {/* <h2 className="home__title">Daily Gallery</h2> */}
      {/* <Carousel images={images} /> */}
      <div className="home__content">
        <div className="home__section">
          <h2 className="About__subtitle">Past Project Analysis</h2>
          <div className="project">
            <h3 className="home__project-title"> RPC Project</h3>
            <p className="home__paragraph">
              <strong>Project Content:</strong> Traditional RPC (Remote Procedure Call) projects cover functionalities such as long connections, asynchronous calls, heartbeat detection, and JSON serialization. The project implements a service registration center based on Zookeeper, supports dynamic management of client connections, service monitoring and discovery, and service registration functionality based on Netty 4.X version.
            </p>
            <p className="home__paragraph">
              <strong>Learning Outcomes:</strong> This project provided an in-depth understanding of how to build efficient and stable RPC systems, enhancing comprehension of distributed systems.
            </p>
          </div>
          <div className="project">
            <h3 className="home__project-title">Microservices Architecture</h3>
            <p className="home__paragraph">
              <strong>Project Content:</strong> The microservices architecture decomposes applications into multiple independent services, each of which can be deployed and scaled separately. This architecture improves system flexibility and maintainability.
            </p>
            <p className="home__paragraph">
              <strong>Learning Outcomes:</strong> Through practice, I learned how to design and implement microservices architecture, understood the communication and coordination mechanisms between services, and enhanced system design capabilities.
            </p>
          </div>
          <div className="project">
            <h3 className="home__project-title">Image Recognition</h3>
            <p className="home__paragraph">
              <strong>Project Content:</strong> In the image recognition project, Kaggle datasets were utilized along with Python and ROI (Region of Interest) techniques to extract text from images, achieving an accuracy rate of over 85%.
            </p>
            <p className="home__paragraph">
              <strong>Learning Outcomes:</strong> I learned and mastered image processing and machine learning algorithms, enhancing my understanding and application of computer vision.
            </p>
          </div>
          <div className="project">
            <h3 className="home__project-title">Mobile Application Project</h3>
            <p className="home__paragraph">
              <strong>Project Content:</strong> The mobile application project involved API calls, data processing, and the use of Swift UI, including image transmission and extraction. Through learning and reference, I reconstructed a new Stock API call display.
            </p>
            <p className="home__paragraph">
              <strong>Learning Outcomes:</strong> This project deepened my understanding of the mobile development process and techniques, mastering how to efficiently develop mobile applications.
            </p>
          </div>
        </div>
        <div className="home__section">
          <h2 className="About__subtitle">Reflection and Future Directions</h2>
          <p className="home__paragraph">
            During the process of handling traditional projects, various issues in understanding technical concepts often arise. These issues mainly stem from the functional limitations of specific technologies, especially when learning from books and video tutorials based on support frameworks. I discovered that some fundamental and conceptual technologies, including traditional services and frameworks, appear very abstract and hard to understand when detached from core application functionalities.
          </p>
          <p className="home__paragraph">
            Therefore, I adopted a series of core small functional projects that are relatively easy and rewarding to achieve the corresponding main functions. The primary function of these projects is not to use highly sophisticated and frequently used technologies, but to master these technical concepts and understand how they are applied in practice. However, I must admit that I still lack a lot, especially in terms of actual work experience. This lack of experience in the real industry process requires going through and accumulating experiences to understand what the standard practices are in the industry or what the best practices are.
          </p>
          <p className="home__paragraph">
            Thus, my current understanding of these traditional technical projects is that I know how to use them and understand some of their underlying principles. But when it comes to broad design aspects and actual implementation in industrial projects, I need to seriously hone my skills in the industry to achieve a thorough understanding.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutlinke2;
