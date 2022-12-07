import Header from "./components/Header";
import Pagination from "./components/Pagination";
import FormSearch from "./components/Searcher";


function App() {


  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center"></p>
        <Header/>
        <FormSearch/>
          <br></br>
          <br></br>
          <br></br>
        <Pagination/>
      </div>
    </div>
  );
}

export default App;
