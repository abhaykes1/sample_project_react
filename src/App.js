import logo from './logo.svg';
import './App.css';
import ListManager from './components/ListManager';
import { Parallax } from 'react-parallax';
import Title from './components/Title'
import PrimarySearchAppBar from './components/PrimarySearchAppBar';

function App() {
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
  const insideStyles = {
    background: "white",
    padding: 60,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    border: "1px solid blue",
    borderRadius: "25px"  
  };
  const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
  return (
    <div style={styles}>
      <PrimarySearchAppBar />
      <Title name="from HackerEarth" />
      <Parallax bgImage={image1} strength={500}>
        <div style={{ height: 1000 }}>
          <div style={insideStyles} >
            <ListManager title="Features"/>        
          </div>
        </div>
      </Parallax>
      
    </div>
  );
}

export default App;
