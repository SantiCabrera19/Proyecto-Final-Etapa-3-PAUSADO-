import Buscador from "./components/BuscarPage";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import FormSearch from "./components/Searcher";
import NewsBox from "./components/News";

function App() {


  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center"></p>
        <Header/>
        <FormSearch/>
        /* <NewsBox/> */
        <Pagination/>
      </div>
    </div>
  );
}

export default App;
