import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'

const IndexPage = () => (
  <div className="Row">
    <div className="Cards">
      <Card 
      title="React"
      text="Hello, this is a react tutorial"
      sub="ssss"/>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
   
  </div>
)

export default IndexPage
