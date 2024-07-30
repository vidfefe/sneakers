import styles from './Card.module.scss'
import React from 'react';
import ContentLoader from "react-content-loader";
import AppContext from '../../context';


function Card({id, title,price,imageUrl, OnPlus, OnLiked, favorited = false, loading = false}){

  const {isItemAdded, onAddToFavorites} = React.useContext(AppContext);
  const [isLiked, setIsLiked] = React.useState(favorited);

  const onClickPlus = () => {
    OnPlus({id, title,price,imageUrl});
  };

  const onClickLiked = () => {
      setIsLiked(!isLiked);
      OnLiked({id, title,price,imageUrl});
  }

    return(
    <div className={styles.card}>

      {
        loading ? <ContentLoader 
        speed={2}
        width={155}
        height={255}
        viewBox="0 0 150 255"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
       
      >
        <rect x="0" y="0" rx="10" ry="10" width="160" height="142" /> 
        <rect x="-6" y="156" rx="5" ry="5" width="160" height="15" /> 
        <rect x="0" y="177" rx="5" ry="5" width="90" height="15" /> 
        <rect x="0" y="225" rx="5" ry="5" width="80" height="24" /> 
        <rect x="117" y="220" rx="5" ry="5" width="32" height="32" />
      </ContentLoader> :

        <>
          <div onClick= {onClickLiked} className={styles.favorite}>
                <img src={isLiked ? '/img/heart-liked.svg': '/img/heart-unliked.svg'} alt="Unliked"></img>
              </div>
            
              <img  width={133} height={112} src={imageUrl} alt="Sneakers 1"></img>
              <h5>{title}</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>{price} руб.</b>
                </div>
                <button onClick={onClickPlus} className="button">
                  <img width={32} height={32} src={isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg' } alt="Plus"></img>
                </button>
              </div>
        </>
      }
            
    </div>
    );
}

export default Card;