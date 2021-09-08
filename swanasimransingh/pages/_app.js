/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from 'theme-ui'
import React from "react"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false
import "../styles/globals.css"
import Nav from '../pages/src/components/nav'
import "../styles/index.css"
import 'bootstrap/dist/css/bootstrap.css'

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