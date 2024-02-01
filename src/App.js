import Header from "./component/Header";
import Swiper from "./component/Swiper";
import { Route, Routes } from "react-router-dom";
import datasrc from './data/osulloc.json'
import Mov from "./component/Mov";

function App() {
  return (
    <>
      <Header></Header>
      <Swiper datasrc={datasrc.swiper}></Swiper>
      <Mov></Mov>
    </>
  );
}

export default App;
