import React from 'react'
import Feature from "../../components/feature/Feature"
import "./features.css"

const featuresData=[
  {
    title:'Improving end distrusts instantly',
    text:'From they fine john he give of the rich. They age draws nears like improving and distrust may instantly was household applauded.'
  },
  {
    title:'Become the tended active',
    text:'The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.'

  },
  {
    title:'Message or say nothing',
    text:'The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.'

  },
  {
    title:'Really by law county',
    text:'Lets ask possible masterization elegance test likewise debating by message or am nothing without charity address.'

  }
]


const Features = () => {
  return (
    <div className="gpt3_features section_padding" id="features">
      <div className="gpt3_features-heading">
        <h1 className="gradient_text">
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className="gpt3_features-container">
        {
          featuresData.map((item,index)=>(
            <Feature title={item.title} text={item.text} key={index + item.title}/>
          ))
        }
      </div>
    </div>
  )
}

export default Features