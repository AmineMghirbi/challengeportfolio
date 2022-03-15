import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar/navbar';
import Introduction from './Components/Introduction/introduction';
import Projects from './Components/Projects/projects';
import Contact from './Components/Contact/contact';
import  Footer  from './Components/Footer/footer';
function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Introduction />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
