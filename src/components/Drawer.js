

function Drawer(){
    return(
        <div className="overlay">
        
            <div className="drawer">
            <h2 className="mb-20 d-flex justify-between align-center">
                Корзина
            <img className="removebtn cu-p" src="/img/btn-remove.svg" alt="Remove"></img>
            </h2>

            <div className="items">
                <div className="cartItem d-flex align-center justify-between  mb-20">
                <img className=" cartItemSneakers mr-20" src="/img/sneaker/2.png" alt="Sneakers 2"></img>
                <div className="mr-15">
                    <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 999 руб.</b>
                </div>
                <img className="removebtn" src="/img/btn-remove.svg" alt="Remove"></img>
                </div>


                <div className="cartItem d-flex align-center justify-between mb-20">
                <img  className="cartItemSneakers mr-20" src="/img/sneaker/2.png" alt="Sneakers 2"></img>
                <div className="mr-15">
                    <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 999 руб.</b>
                </div>
                <img className="removebtn" src="/img/btn-remove.svg" alt="Remove"></img>
                </div>
            </div>


            <div className="cartTotalBlock">
                <ul >
                <li>
                    <span>Итого: </span>
                    <div></div>
                    <b>21 498 руб. </b>
                </li>
                <li >
                    <span>Налог 5%: </span>
                    <div></div>
                    <b>1074 руб. </b>
                </li>
                </ul>
                <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow"></img></button>
            </div>
            
            </div>
        </div>
    );
}

export default Drawer;