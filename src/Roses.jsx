import "./Roses.css";


function Roses({ page, setPage }) {
 const Rose = (page) => {
   return (
     <div className="rose">
     <img
         src=
         "https://images.unsplash.com/photo-1586963740689-b5928f8dda10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"     
         alt="leanging rose in glass"
         className="home__image"
       />
       <a
         className="roses-link"
         href={`${page}.html`}
         onClick={(e) => {
           e.preventDefault();
           setPage("Past Project");
         }}
       >
        Past Projects
       </a>
     </div>
   );
 };
 const Rose2 = (page) => {
   return (
     <div className="rose">
       <img
         src="https://images.unsplash.com/photo-1560790671-b76ca4de55ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80
"         alt="leanging rose in glass"
         className="home__image"
       />
       <a
         className="roses-link"
         href={`${page}.html`}
         onClick={(e) => {
           e.preventDefault();
           setPage("Current");
         }}
       >
       Current Intro - Project and goals

       </a>
     </div>
   );
 };
 const Rose3 = (page) => {
   return (
     <div className="rose">
       <img
         src="https://images.unsplash.com/photo-1556790989-1f992d023b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80
"         alt="leanging rose in glass"
         className="home__image"
       />
       <a
         className="roses-link"
         href={`${page}.html`}
         onClick={(e) => {
           e.preventDefault();
           setPage("Past");
         }}
       >
        Past Intro - Project and goals 
 
       </a>
     </div>
   );
 };


 const Rose4 = (page) => {
   return (
     <div className="rose">
       <img
         src= "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
  
    
         alt="leanging rose in glass"
         className="home__image"
       />
       <a
         className="roses-link"
         href={`${page}.html`}
         onClick={(e) => {
           e.preventDefault();
           setPage("Current Project");
         }}
       >
        AVP - AI绘图 - 前沿项目  
       </a>
     </div>
   );
 };


 const Rose5 = (page) => {
   return (
     <div className="rose">
       <img
         src= 
         "https://images.unsplash.com/photo-1554486840-db3a33d9318e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHJvc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="leanging rose in glass"
         className="home__image"
       />
       <a
         className="roses-link"
         href={`${page}.html`}
         onClick={(e) => {
           e.preventDefault();
           setPage("Current Goal");
         }}
       >
        Belief in AI, VR, and Blockchain 

       </a>
     </div>
   );
 };
 const Rose6 = (page) => {
   return (
     <div className="rose"         aria-label="Rose dashboard review">
       <img
         src="https://images.unsplash.com/photo-1541143011610-fe5c3458686e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
         alt="leanging rose in glass"
         className="home__image"
       />
       <a
         className="roses-link"
         href={`${page}.html`}
         onClick={(e) => {
           e.preventDefault();
           setPage("Past Goal");
         }}
       >
         Past Projects' Reflection and Future Directions

       </a>
     </div>
   );
 };
 const PersonalIntro = () => {
  return (
    <div className="personal-intro">
      <h2 className="about__title">About Me</h2>
      <p className="about__description">
        Hello! I'm Yue(Allan) Xi, a passionate developer with a keen interest in AI, VR, and Blockchain technologies. Over the years, I've worked on various projects that span traditional RPC systems, microservices architecture, image recognition, and mobile applications. My journey has been one of continuous learning and adaptation, constantly seeking to understand the deeper intricacies of the technologies I work with.
      </p>
      <p className="about__description">
        My projects are not just about using cutting-edge technologies, but about mastering the fundamental concepts that drive them. I've always believed in the power of small, core functionality projects to truly grasp the essence of any technology. This approach has allowed me to understand not just how to use these technologies, but also the underlying principles that make them work.
      </p>
      <p className="about__description">
        However, I acknowledge that there is still much to learn, particularly in terms of real-world experience. The practical application of these technologies in industrial projects requires hands-on experience and an understanding of best practices. As I continue to hone my skills, I look forward to gaining more experience and making meaningful contributions to the field.
      </p>
    </div>
  );
};
 return (
   <div className="roses">
    {page === "Personal Intro" && <PersonalIntro />}

     {page === "Personal Intro" && <Rose2 />}
     {page === "Personal Intro" && <Rose3 />}


     {page === "Personal Intro" && <Rose4 />}
     {page === "Personal Intro" && <Rose5 />}
     {page === "Personal Intro" && <Rose6 />}
     {page === "Personal Intro" && <Rose />}


   </div>
 );
}


export default Roses;





