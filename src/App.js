import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">
    <Drawer></Drawer>
    

    <Header></Header>

      <div className="content p-40">
       <div className="d-flex justify-between align-center mb-40">
        <h1>Все кроссовки</h1>
        <div className="search d-flex">
          <img src="/img/search.svg" alt="Search"></img>
          <input placeholder="Поиск..."></input>
        </div>
       </div>

        <div className="sneakers d-flex ">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>


        </div>
      </div>
    </div>
  );
}

export default App;
