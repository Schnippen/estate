import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import Main from "./components/Main";


function App(){
    return (
      <>
        <header>
        <Navbar/>
        <SearchForm/>
        </header>
        <Main/>
        <footer>footer</footer>
      </>
    );
}

export default App;