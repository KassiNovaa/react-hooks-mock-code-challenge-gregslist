import {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [ listingsData , setListings ] = useState([])

  const removeListing = (doomedID) => {
    const newListings = listingsData.filter( (listingobj) => listingobj.id !== doomedID );
    setListings(newListings);
  }

  useEffect(()=>{
      fetch('http://localhost:3000/listings')
      .then(r=>r.json())
      .then((listingsArray) => {
        setListings(listingsArray);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <ListingsContainer  removeListing={removeListing} listings= {listingsData}/>
    </div>
  );
}

export default App;
