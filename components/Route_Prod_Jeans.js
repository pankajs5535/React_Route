import React from 'react'
 
import jeansImage1 from '../imgine/jeansImage1.png'
import jeansImage2 from '../imgine/jeansImage2.png'

 
function Route_Prod_Jeans() {
  return (
    <div>
      <h2>All Jeans are Available</h2>

      <img  src={jeansImage1} height={500} width={350} />&nbsp;&nbsp;&nbsp;

      <img  src={jeansImage2} height={500} width={350} />

 
    </div>
  )
}

export default Route_Prod_Jeans
