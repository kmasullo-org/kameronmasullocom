import './App.css'
import TopBar from "./components/topbar/TopBar.tsx";
import Music from "./components/music/Music.tsx";
import Blogs from "./components/blogs/Blogs.tsx";
import Albums from "./components/albums/Albums.tsx";
import Footer from "./components/footer/Footer.tsx";

function App() {

  return (
      <div className="app">
          <TopBar/>
          <Music/>
          <Blogs/>
          <Albums/>
          <Footer/>
      </div>
  );
}

export default App
