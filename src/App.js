import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./layout/Header";
import Home from "./layout/Home";
import FoodDetail from "./food/FoodDetail";
import FoodList from "./food/FoodList";
import Location from "./seoul/Location";
import Nature from "./seoul/Nature";
import Shop from "./seoul/Shop";
import Find from "./food/Find";
import News from "./news/News";
function App() {
  return (
    <Router>
      <Header/>
      <div className={"container"}>
        <Routes>
          <Route exact path={"/"} element={<Home/>}/>
          <Route exact path={"/food/food_list/:cno"} element={<FoodList/>}/>
          <Route exact path={"/food/food_detail/:fno"} element={<FoodDetail/>}/>
          <Route exact path={"/food/food_find"} element={<Find/>}/>
          <Route exact path={"/seoul/Location"} element={<Location/>}/>
          <Route exact path={"/seoul/Nature"} element={<Nature/>}/>
          <Route exact path={"/seoul/Shop"} element={<Shop/>}/>
          <Route exact path={"/news/news_find"} element={<News/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
