
import Info from "./Info";
import React from "react";
import axios from "axios";
import { useCart } from "../hooks/useCart";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Drawer({onCloseCart, items = [], onRemove}){
    const [isOrdered, setIsOrdered] = React.useState(false);
    const [orderId, setOrderId] = React.useState(null);
    const [isLoading,setIsLoading] = React.useState(false);
    const {cartItems, setCartItems, totalPrice} = useCart();
    



    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const {data} = await axios.post('https://6690e7dc26c2a69f6e8d91bd.mockapi.io/orders', { 
                item: cartItems,
            });
            setOrderId(data.id);
            setIsOrdered(true);
            setCartItems([]);

            for(let i = 0;i < cartItems.length; i++){
                const item = cartItems[i];
                await axios.delete('https://668bd89b0b61b8d23b0b6a22.mockapi.io/cart/'+ item.id);
                await delay(1000);
            }
            
        } catch (error) {
            alert('Не удалось оформить заказ.')
        }
        setIsLoading(false);
    }

    return(
        <div className="overlay">
        
            <div className="drawer">
            <h2 className="mb-20 d-flex justify-between align-center">
                Корзина
            <img onClick= {onCloseCart} className="removebtn cu-p" src="/img/btn-remove.svg" alt="Remove"></img>
            </h2>

            {items.length > 0 ? (
                <div className="d-flex flex-column flex">
                    <div className="items ">
                    {items.map((obj)=>(
                        <div key={obj.id} className="cartItem d-flex align-center justify-between  mb-20">
                    <img className=" cartItemSneakers mr-20" src={obj.imageUrl} alt="Sneakers 2"></img>
                    <div className="mr-15">
                        <p className="mb-5">{obj.title}</p>
                        <b>{obj.price} руб.</b>
                    </div>
                    <img className="removebtn" onClick={()=>onRemove(obj.id)} src="/img/btn-remove.svg" alt="Remove"></img>
                    </div>
    
                    ))}
                    </div>

                    <div className="cartTotalBlock">
                <ul >
                <li>
                    <span>Итого: </span>
                    <div></div>
                    <b>{totalPrice} руб. </b>
                </li>
                <li >
                    <span>Налог 5%: </span>
                    <div></div>
                    <b>{Math.round(totalPrice / 100 * 5)} руб. </b>
                </li>
                </ul>
                <button disabled={isLoading}  onClick={onClickOrder} className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow"></img></button>
            </div>
            
                </div>    
                ) : (
                    <Info title={isOrdered ? "Заказ оформлен!" : "Корзина пустая"} description={isOrdered ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."} image ={ isOrdered ? "/img/ordered-cart.svg" : "/img/empty-cart.svg"} ></Info>
                    
                )
            }
           
           


            
            </div>
        </div>
    );
}

export default Drawer;