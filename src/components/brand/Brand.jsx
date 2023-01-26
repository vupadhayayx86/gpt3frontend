import React from 'react'
import "./brand.css"
import { google,slack,atlassian,dropbox,shopify } from './import'

const Brand = () => {
  return (
    <div className="gpt3_brand section_padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="google" />
      </div>
      <div>
        <img src={atlassian} alt="google" />
      </div>
      <div>
        <img src={dropbox} alt="google" />
      </div>
      <div>
        <img src={shopify} alt="google" />
      </div>
      
    </div>
  )
}

export default Brand