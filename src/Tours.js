import React from 'react';
import Tour from './Tour';
const Tours = ({api,remove}) => {
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {api.map(tour=>{
              return <Tour key={tour.id} remove={remove} {...tour} /> 
            }
            
            )}
      </div>
      
    </section>

  )
  
};

export default Tours;
