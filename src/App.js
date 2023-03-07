import React, { useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {

  let [pageNumber, setPageNumber] = useState(1)
  let [fetchedData, setFetchedData] = useState([])
  let [search, setSearch] = useState(" ")

  let api = ` https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
  // console.log(fetchedData.results)
  // console.log(fetchedData.info)
  let {info, results} = fetchedData;

  

  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then((res)=>res.json())
      // console.log(data)
      // console.log(data.results)
      setFetchedData(data)
    })();  
  },[api])
  
  
  


  
  return (
    <div className="App">
      <h1 className='text-center ubuntu my-4'>Rick & Morty <span className="text-primary">Wiki</span></h1>

      <Search  setSearch={setSearch} setPageNumber={setPageNumber }/>

      <div className="container">
        <div className="row">
          {/* Filter Component goes here */}
          <div className="col-3">
            <Filters />
          </div>
          {/* Cards component goes here */}
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      
      
      <Pagination info={info} setPageNumber = {setPageNumber} pageNumber={pageNumber}/>
    </div>
  );
}

export default App;
