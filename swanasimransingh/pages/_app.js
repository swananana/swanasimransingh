/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from 'theme-ui'
import React from "react"
// import Head from "next/head"
//import { ThemeProvider } from 'theme-ui'

import Nav from '../pages/src/components/nav'
// import Word from './Word'
// import Header from './src/components/Header'
// if (typeof window !== "undefined") {
//   require("jquery");
// }
// import "../static/hello"
import "../styles/index.css"
import 'bootstrap/dist/css/bootstrap.css'
//import {Helmet} from "react-helmet";

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
    
      <div>
        {/* <Nav /> */}
        <Component {...pageProps} />
      </div>      
    

    </React.Fragment>

    
  )
}