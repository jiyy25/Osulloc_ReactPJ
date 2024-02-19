import Header from "./component/Header";
import Swiper from "./component/Swiper";
import { Route, Routes } from "react-router-dom";
import datasrc from './data/osulloc.json'

import Mov from "./component/Mov";
import Footer from "./component/Footer";
import Bestseller from "./component/Bestseller";
import Story from "./component/Story";
import BestCategory from "./component/BestCategory";
import Location from "./component/Location";
import Subscribe from "./component/Subscribe";
import Event from "./router/Event";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={
          <>
            <Swiper datasrc={datasrc.swiper}></Swiper>
            <Mov></Mov>
            <Bestseller datasrc={datasrc.product}></Bestseller>
            <Story></Story>
            <BestCategory></BestCategory>
            <Location datasrc={datasrc.store}></Location>
            <Subscribe></Subscribe>
          </>
        }>

        </Route>
        <Route path="/event" element={<Event datasrc={datasrc.reveiw} />}></Route>

      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
