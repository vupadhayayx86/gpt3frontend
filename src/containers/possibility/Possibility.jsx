import React from 'react'
import possibilityImage from "../../assets/possibility.png"
import "./possibility.css"

const Possibility = () => {
  return (
    <div className="gpt3_possibility section_padding" id="possibility">
      <div className="gpt3_possibility-image">
        <img src={possibilityImage} alt="Possibility" />
      </div>
      <div className="gpt3_possibility-content">
        <h4>Request Early Access to get Started</h4>
        <h1 className="gradient_text">
          The possibilities are beyond your imagination
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora commodi magnam consequuntur deleniti exercitationem nam quidem nobis blanditiis fugiat expedita?</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility