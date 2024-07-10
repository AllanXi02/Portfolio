
import Home from "./Home.jsx";
import About from "./About.jsx";
import Roses from "./Roses.jsx";
 
import Homelink1 from "./HomeLink1";
import AboutSub1 from "./AboutLink1";
import Homelink2 from "./HomeLink2";
import Aboutlinke2 from "./AboutLink2";



function Main({ page, setPage,theme }) {
  return (
    <main className={`main ${theme}`} aria-label={`Rose main-page -  ${theme}`} >
     
      {page === "Current Goal" && < Homelink2/>}
      {page === "Current Project" && < Homelink1/>}
      {page === "Past Goal" && <Aboutlinke2/>}
      {page === "Past Project" && < AboutSub1 />}

      {page === "Current" && <Home />}
      {page === "Past" && <About />}
      {page === "Personal Intro" && <Roses page={page} setPage={setPage} />}
    </main>
  );
}

export default Main;
