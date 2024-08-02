import Card from "../components/Card";
import AppContext from "../context";
import React from "react";

function Home ({items, searchValue,setSearchValue, onChangeSearchInput, cartItems,isLoading }){
    
  const {onAddToCart, onAddToFavorites} = React.useContext(AppContext);

    const renderItems = () => {
        const filtredItems = items.filter((item) => 
            item.title.toLowerCase().includes(searchValue)
        );
        return (isLoading ? [...Array(8)] : filtredItems) 
          .map((item, index) => (
            <Card key = {index} OnPlus = {(obj) => onAddToCart(obj)} loading={isLoading} OnLiked= {(obj)=> onAddToFavorites(obj)}  {...item}></Card>
          ));
    }
    
    return (
        <div className="content p-40">
       <div className="d-flex justify-between align-center mb-40">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"`: 'Все кроссовки'}</h1>
        <div className="search d-flex">
          <img src="/img/search.svg" alt="Search"></img>
          <input onChange={onChangeSearchInput} value = {searchValue} placeholder="Поиск..."></input>
         {searchValue && <img  onClick={() => setSearchValue('')} className="clear cu-p" src="/img/btn-remove.svg" alt="Clear"></img>}
        </div>
       </div>

        <div className="sneakers d-flex flex-wrap ">
          {renderItems()}


        </div>
      </div>
    );
}


export default Home;