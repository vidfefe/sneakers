 
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";



function App() {

  const [cartOpened, setCartOpened]= React.useState(false);
  const [items, setItems]= React.useState([]);
  const [searchValue, setSearchValue]= React.useState('');
  const [cartItems, setCartItems]= React.useState([]);
  const [favoritesItems, setFavoritesItems]= React.useState([]);
  const [isLoading, setIsLoading]= React.useState(true);
 
  React.useEffect(()=>{
    async function fetchData () {
      const cartResponse = await axios.get('https://668bd89b0b61b8d23b0b6a22.mockapi.io/cart');
      const favoritesResponse  = await axios.get('https://6690e7dc26c2a69f6e8d91bd.mockapi.io/favorites');
      const itemsResponse = await axios.get('https://668bd89b0b61b8d23b0b6a22.mockapi.io/items');
      
      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavoritesItems(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  },[]);

  React.useEffect(() => {
    if (cartOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset'; 
    }
  
   
  }, [cartOpened]);

  const onAddToCart = (obj) =>{
    if(cartItems.find((item)=> Number(item.id)=== Number(obj.id))){
      axios.delete(`https://668bd89b0b61b8d23b0b6a22.mockapi.io/cart/${obj.id}`);
      setCartItems((prev)=> prev.filter((item) => Number(item.id) !== Number(obj.id)));
    }
    else{
      axios.post('https://668bd89b0b61b8d23b0b6a22.mockapi.io/cart', obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onChangeSearchInput = (event) =>{
    setSearchValue(event.target.value);
  };

  const onRemoveItem = (id) =>{
    axios.delete(`https://668bd89b0b61b8d23b0b6a22.mockapi.io/cart/${id}`);
    setCartItems((prev)=> prev.filter(item => Number(item.id) !== Number(id)));
  }

  const onAddToFavorites = async (obj) =>{
    try{
      if(favoritesItems.find((favObj) => Number(favObj.id) === Number(obj.id))){
        axios.delete(`https://6690e7dc26c2a69f6e8d91bd.mockapi.io/favorites/${obj.id}`);
        setFavoritesItems((prev)=> prev.filter((item) => Number(item.id) !== Number(obj.id)));
      }
      else{
        const {data} = await axios.post('https://6690e7dc26c2a69f6e8d91bd.mockapi.io/favorites', obj);
        setFavoritesItems((prev) => [...prev, data]);
      }
    }
   catch(error){
    alert('Не удалось доабвить товар в закладки');
   }  
  }

  const isItemAdded = (id) =>{
    return cartItems.some((obj) => Number(obj.id) === Number(id))
  };

  const isItemLiked= (id) =>{
    return favoritesItems.some((obj) => Number(obj.id) === Number(id))
  };

  return (
    <AppContext.Provider value = {{items,cartItems, favoritesItems,isItemAdded, isItemLiked, onAddToFavorites, onAddToCart, setCartOpened, setCartItems}}>
      <div className="wrapper clear">
       <Drawer items = {cartItems} onCloseCart={()=> setCartOpened(false)} onRemove={onRemoveItem} opened = {cartOpened}></Drawer> 
      

      <Header onClickCart= {()=> setCartOpened(true)}></Header>

        <Routes>
          <Route path="/" element={
            <Home items={items}  isLoading = {isLoading} searchValue={searchValue}  cartItems= {cartItems}  setSearchValue={setSearchValue} onChangeSearchInput={onChangeSearchInput}></Home>}>
          </Route>
          <Route path="/favorites" element={<Favorites onAddToFavorites={onAddToFavorites}></Favorites>}></Route>
          <Route path="/orders" element={<Orders></Orders>}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
