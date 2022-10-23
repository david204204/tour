import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'


function App() {
  const [toursApi, setToursApi] = useState([]);
  const [isLoadong, setIsLoadong] = useState(true);
  const [refreshIt, setrefreshIt] = useState(false);

  const removeTour = (id) => {
    const newTours = toursApi.filter(tour => tour.id !== id)
    setToursApi(newTours);
  }

  useEffect(()=>{
    let isMounted = true;
      const fechData = async () => {
        setIsLoadong(true)
      
      try{
        const response = await fetch(url)
        if(response.ok && isMounted){
        const api = await response.json()
        setToursApi(api)
        setIsLoadong(false)
        }
      } catch(err) {
        setIsLoadong(false)
        console.log(err)
      }
      
      
      }
      
    fechData();
    
    return () => {isMounted = false};
  },[refreshIt])

  const refresher = () => {
    setrefreshIt(!refreshIt)
  }

  if(toursApi.length === 0){
    return(
      <main>
        <div className='title'>
          <h2>
            no tours left
          </h2>
          <button className='btn' onClick={refresher}>Refresh</button>
        </div>
      </main>
    )
  }
  
  return (
    <>
      
      <main>
        {isLoadong ? <Loading/> : <Tours api={toursApi} remove={removeTour}/> }
        
      </main>
      
    </>
    
  )
  
}

export default App
