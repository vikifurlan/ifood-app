import React from "react";
import "./index.css";
import Body from "./components/body"
  import {FcSettings}from "react-icons/fc"
  import {AiOutlineUser} from "react-icons/ai"
  import{FiShoppingBag} from "react-icons/fi"
const Home = () => {
  return (
    <div>
    <header>
      <div>
        <img className="ifood_img" src="https://logopng.com.br/logos/ifood-43.png" />
      </div>

      <div className="container_hamb">
        <div className="hamb_div">
          <img src="https://www.ifood.com.br/static/images/categories/restaurant.png" />
        </div>
        <p>Restaurante</p>
      </div>

      <div className="container_input">
        <input placeholder="Busque por item ou loja"/>
      </div>
      <div className="container_location">
        <p>Entregar em</p>
        <span>Rua rio claro,69</span>
      </div>
      <div className="container_icons">
        <FcSettings color="red"/>
        <AiOutlineUser/>
        <FiShoppingBag/>
      </div>
     
    </header>
    <Body/>
    </div>

  );
};
export default Home;


