import Card from "../components/Card";
import AppContext from "../context";
import React from "react";
 
function Favorites ({items, onAddToFavorites}){
  const {favoritesItems} = React.useContext(AppContext);

    return (
        <div className="content p-40">
       <div className="d-flex justify-between align-center mb-40">
        <h1>Мои закладки</h1>
       </div>

        <div className="sneakers d-flex flex-wrap ">
          {favoritesItems.map((item, index) => (
              <Card key = {index} favorited={true} OnLiked = {onAddToFavorites} {...item}></Card>
            ))}
        </div>
      </div>
    );
}


export default Favorites;