import {infoCard} from './data/info'

import './App.css'
import CardApp from './components/CardApp'
import CarouselApp from './components/CarouselApp'
import FooterApp from './components/FooterApp'
import NavBarApp from './components/NavBarApp'
import ContactApp from './components/ContactApp'




function App() {
  return (
    <>
      <NavBarApp/>
      <CarouselApp/>

      <div className="container">
        <div className="row mt-5 mb-5">         
          {
          infoCard.map((item,index)=>(
            <CardApp key={index} item={item}/>
          ))
          }
        </div>

      </div>
      <ContactApp/>
      <FooterApp />
    </>

  )
    
}

export default App
