import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import Policy from './Pages/Policy';
import Shipping from './Pages/Shipping';
import Conditions from './Pages/Conditions';
import AboutUs from './Pages/AboutUs';
import Collections from './Pages/Collections';
import NewArrivals from './Pages/NewArrivals';
import WorkWear from './Pages/WorkWear';
import Linen from './Pages/Linen';
import Denim from './Pages/Denim';
import Sale from './Pages/Sale';
import Scylla from './Pages/Scylla';
import Kelly from './Pages/Kelly';
import Redvers from './Pages/Redvers';
import Casual from './Pages/Casual';
import Evening from './Pages/Evening';
import Essential from './Pages/Essential';
import Over from './Pages/Over';
import Crop from './Pages/Crop';
import Dress from './Pages/Dress';
import Men from './Pages/Men';




function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contactUs" element={<ContactUs/>}/>
          <Route path="/policy" element={<Policy/>}/>
          <Route path="/returns" element={<Shipping/>}/>
          <Route path="/condition" element={<Conditions/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/collection" element={<Collections/>}/>
          <Route path="/new" element={<NewArrivals/>}/>
          <Route path="/workwear" element={<WorkWear/>}/>
          <Route path="/linen" element={<Linen/>}/>
          <Route path="/Denim" element={<Denim/>}/>
          <Route path="/sale" element={<Sale/>}/>
          <Route path="/scylla" element={<Scylla/>}/>
          <Route path="/Kelly" element={<Kelly/>}/>
          <Route path="/Redvers" element={<Redvers/>}/>
          <Route path="/casual" element={<Casual/>}/>
          <Route path="/Evening" element={<Evening/>}/>
          <Route path="/Essential" element={<Essential/>}/>
          <Route path="/over" element={<Over/>}/>
          <Route path="/crop" element={<Crop/>}/>
          <Route path="/Dress" element={<Dress/>}/>
          <Route path="/Men" element={<Men/>}/>

          
    
      
        </Routes>
      </BrowserRouter>
      
    </section>
    
  );
}

export default App;
