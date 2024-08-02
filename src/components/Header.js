import { Link } from "react-router-dom";
import React from "react";
import { useCart } from "../hooks/useCart";


function Header(props){

  const {totalPrice} = useCart();
  

    return(
        <header className="d-flex justify-between align-center p-40">
          <Link to="/">
            <div className="d-flex align-center">
              <img width={40} height={40} src="/img/logo.png" alt="Logo"></img>
              <div className="">
                <h3 className="text-uppercase">Viki Sneakers</h3>
                <p className="opacity-5">Магазин лучших кроссовок</p>
              </div>
            </div>
          </Link>
        <ul className="d-flex justify-between align-center">
          <li  onClick= {props.onClickCart}  className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="Cart"></img>
            <span>{totalPrice} руб.</span>
          </li>
          <li className="mr-30">
            <Link to="/favorites">
            <img  width={18} height={18} src="/img/liked.svg"alt="Liked" ></img>
            <span>Закладки</span>
            </Link>
          </li>
          <li>
            <Link to="/orders">
              <img width={18} height={18} src="/img/user.svg" alt="User"></img>
              <span>Профиль</span>
            </Link>
          </li>
        </ul>
      </header>
    );
}


export default Header