import Card from "../components/Card";
import React from "react";
import axios from "axios";
 
function Orders ({items}){

  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading]= React.useState(true);


  React.useEffect(()=>{
    (async () => {
      try {
        
        const {data} = await axios.get('https://6690e7dc26c2a69f6e8d91bd.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => [...prev,...obj.item],[]));
        setIsLoading(false);

      } catch (error) {
        alert('Не удалось загрузки покупки');
      }
    }) ();
  }, []);
 
    return (
        <div className="content p-40">
       <div className="d-flex justify-between align-center mb-40">
        <h1>Мои покупки</h1>
       </div>

        <div className="sneakers d-flex flex-wrap ">
          {( isLoading ? [...Array(8)] : orders).map((item, index) => (
              <Card key = {index}  loading={isLoading}  {...item}></Card>
            ))}
        </div>
      </div>
    );
}


export default Orders;