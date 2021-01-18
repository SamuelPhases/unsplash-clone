import {useState,useEffect} from  'react'
import './App.css';
import Header from './components/Header';
import Home from './Page/Home';
import axios  from  'axios'
import Single from './Page/Single';

function App() {

  const [images,setImages]=useState([])
  
  const fetchImages = () => {
    axios.get('https://api.unsplash.com/photos/random?client_id=ZiDYkw3qePACTmU2jWroVgDJK4m560_OQrI20OTedOc&count=100')
      .then(res => setImages(...images, res.data))
      .catch(err => console.error(err))
    // console.log(images)  
  }
  useEffect(() => {
    fetchImages()
  }, [])
  
    
    
    return (
      <div className="app">
      <Header />
        {/* <Home imagesList={images}/> */}
        <Single/>
    </div>
  );
}

export default App;
