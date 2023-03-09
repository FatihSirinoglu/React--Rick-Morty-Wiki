import React from 'react'
import Gender from './Category/Gender'
import Spicies from './Category/Spicies'
import Status from './Category/Status'

const Filters = () => {
  return (
    <div className='col-3'>
      <div className="text-center fs-5 fw-bold mb-2">
        Filter
      </div>
      <div style={ {cursor: 'pointer'} } className="text-center text-primary text-decoration-underline">
        Clear Filters
      </div>
    
    
      <div className="accordion" id="accordionExample">
        <Gender />
        <Status />
        <Spicies />
       </div>
    </div>
  )
}

export default Filters