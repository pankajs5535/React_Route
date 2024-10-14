import React from 'react'

import shirtImage1 from '../imgine/shirtImage1.png'
import shirtImage2 from '../imgine/shirtImage2.png'

 


function Route_Prod_Shirt() {
  return (
    <div>
      <h2>All Shirt are Available</h2>
    
      <img  src={shirtImage1} height={500} width={400} />&nbsp;&nbsp;&nbsp;

      <img  src={shirtImage2} height={500} width={400} />
    </div>
  )
}

export default Route_Prod_Shirt

