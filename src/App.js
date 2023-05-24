import './App.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import RoadMap from './Components/RoadMap';
import AboutUs from './Components/AboutUs';
import Faqs from './Components/Faqs';
import Footer from './Components/Footer';
import featuresData from './featuresData';
import Cards from './Components/Cards';
import Features from './Components/Features';
import RoadMapCards from './Components/RoadMap-Cards';
import roadMapData from './roadMapData';


function App() {
const cardElement = featuresData.map((features) =>{
  return(
    <Cards
    key={ features.id}
    {...features}
    
    />
  )

})

const roadMapElement = roadMapData.map((roadmap) =>{
   return(
    <RoadMapCards
    key = {roadmap.id}
    {...roadmap}
    />
   )
})
  return (
    <div className="App">
     <NavBar/>
     <Header/>
     <Features/>
     <div className="card-container">
     {cardElement}
     </div>
      <RoadMap/>
     {roadMapElement}
     <AboutUs/>
     <Faqs/>
     <Footer/>
    </div>
  );
}

export default App;
