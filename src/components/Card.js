
function Card(){
    return(
    <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked"></img>
            </div>
           
            <img  width={133} height={112} src="/img/sneaker/1.png" alt="Sneakers 1"></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={32} height={32} src="/img/plus.png" alt="Plus"></img>
              </button>
            </div>
    </div>
    );
}

export default Card;