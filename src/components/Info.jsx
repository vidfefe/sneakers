import React from 'react'
import AppContext from '../context';

const Info = ({title, description, image}) => {
    const { setCartOpened } = React.useContext(AppContext);
  return (
        <div className="cartEmpty d-flex flex-column align-center justify-center">
            <img width={120} height={120} className="mb-20" src={image} alt="Empty cart"></img>
            <h2>{title}</h2>
            <p className="opacity-4">{description}</p>
            <button onClick={() => setCartOpened(false)} className="greenButton"> <img src="/img/arrow.svg" alt="Arrow"></img>Вернуться назад</button>
        </div>
  )
}

export default Info;
