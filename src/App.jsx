import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import "./App.scss";

function App(props) {
  const movieInfo = props.store.movieInfo;

  return (
    <div className='App'>
      <Header />
      <Main movieInfo={movieInfo} />
      <Footer />
    </div>
  );
}

export default App;
