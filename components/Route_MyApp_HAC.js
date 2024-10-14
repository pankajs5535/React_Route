import React from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Route_Home from './Route_Home'
import Route_About from './Route_About'
import Route_Contact from './Route_Contact'
import Route_Navbar from './Route_Navbar'
import Route_PageNotFound from './Route_PageNotFound'
import Route_Products from './Route_Products'
import Route_Prod_Shirt from './Route_Prod_Shirt'
import Route_Prod_Jeans from './Route_Prod_Jeans'

function Route_MyApp_HAC() {

    const nevigate = useNavigate() // it comes from react-router-dom

    // const NevigateToAbout=()=>{
    //     nevigate('/about')
    // }

    // const NevigateTo = (url) => {
    //     nevigate(url)
    // }



    const NevigateTowhere = () => {
        let name = "Pankaj Suryawanshi"

        if (name == "  Suryawanshi") {
            nevigate('./about')
        }
        else {
            nevigate('./contact')
        }

    }

    return (
        <>
            <Route_Navbar />
            <Routes>
                <Route path='/' element={<Route_Home />} />
                
                <Route path='/product' element={<Route_Products />}>
                    <Route path='shirts' element={<Route_Prod_Shirt />} />
                    <Route path='jeans' element={<Route_Prod_Jeans />} />
                </Route>

                <Route path='/about' element={<Route_About />} />
                <Route path='/contact' element={<Route_Contact />} />
                <Route path='*' element={<Route_PageNotFound />} />

            </Routes>

            {/* <button onClick={()=>nevigate('/about')}>About</button> */}

            {/* <button onClick={() => NevigateToAbout()}>About</button> &nbsp;&nbsp; */}
            {/* <button onClick={() => nevigate('/contact')}>contact</button> */}

            {/* <button onClick={() => NevigateTo('/about')}>contact</button>
            <button onClick={() => NevigateTo('/contact')}>contact</button> */}

            <button onClick={() => NevigateTowhere()}>Click Me</button> &nbsp;&nbsp;

            <button onClick={() => nevigate(-1)}>Go Back</button>




        </>
    )
}

export default Route_MyApp_HAC
