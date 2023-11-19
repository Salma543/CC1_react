import Tp1Calcu from "./My Comp/TP1/Tp1Calcu";
import Tp3Todo from "./My Comp/Tp3/Tp3Todo";
import Useeffect from "./My Comp/TP4/Useeffect";
import {Routes,Route} from  'react-router-dom'
import Menu from "./My Comp/Menu";
import Slider from "./My Comp/TP2/Slider";
import Langcontext from './My Contexts/LangContext';
import Ccontent from './Components/Ccontent';
import Cicones from './Components/Cicones';
import ThemeContextProvider from "./Drk/ThemeContext";
import Content from './Drk/Content/Content'

function App() {
  
  return (
    <div>
      <Menu></Menu>
    <Langcontext>
       <Cicones/><Ccontent/>
       <ThemeContextProvider>
        <Content />
      </ThemeContextProvider>
    </Langcontext>
      <Routes>
         <Route path="/" element={<Tp1Calcu></Tp1Calcu>}></Route>
         <Route path="/Tp3Todo" element={<Tp3Todo></Tp3Todo>}></Route>
         <Route path="/Useeffect" element={<Useeffect></Useeffect>}></Route>
         <Route path="/Slider" element={<Slider></Slider>}></Route>
         <Route path="*" element={<><h1>404</h1></>}></Route>

      </Routes>
     
    </div>
  );
}

export default App;
