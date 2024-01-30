import Header from "./component/Header";
import Swiper from "./component/Swiper";
import { Route, Routes } from "react-router-dom";
import datasrc from './data/osulloc.json'
import Mov from "./component/Mov";
import Test from './component/Test'

function App() {
  return (
    <>
      <Header></Header>
      <Swiper datasrc={datasrc.swiper}></Swiper>
      <Test></Test>
    </>
  );
}

export default App;
