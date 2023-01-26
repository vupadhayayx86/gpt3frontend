import React from 'react'
import Feature from '../../components/feature/Feature'
import "./whatGPT3.css"
const WhatGPT3 = () => {
  return (
    <div className="gpt3_whatgpt3 section_margin" id="wgpt3">
      <div className="gpt3_whatgpt3-feature">
        <Feature title="What is GPT-3" text=" Lorem ipsum dolor sit amet consectetur adipisicing elit .Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit similique distinctio corrupti laborum nam expedita. Magnam unde quam doloremque aliquid?
" />
      </div>
      <div className="gpt3_whatgpt3-heading">
        <h1 className="gradient_text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3_whatgpt3-container">
        <Feature title="Chatbot" text="Lorem ipsum dolor sit amet consectetur adipisicing elit .Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit similique distinctio corrupti laborum nam expedita." />
        <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit .Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit similique distinctio corrupti laborum nam expedita." />
        <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit .Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit similique distinctio corrupti laborum nam expedita." />
      </div>
    </div>
  )
}

export default WhatGPT3