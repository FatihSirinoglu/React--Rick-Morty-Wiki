import React from 'react'

const Spicies = () => {
  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    Spicies
  </button>
</h2>
<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
  <div className="accordion-body">
    
  </div>
</div>
</div>
  )
}

export default Spicies