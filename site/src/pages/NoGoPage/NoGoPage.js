import React from 'react'
import {useLocation} from "react-router-dom"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import './NoGoPage.css'



const NoGoPage = () => {
  sessionStorage.removeItem("token")
  const { deaths, deathIncrease, critical } = useLocation() 


  function Graph(){
    const data = [
      {
        "name": "Number of Deaths (Total)",
        "people": deaths + ""
      },
      {
        "name": "Number of Deaths (Today)",
        "people": deathIncrease + ""
      },
      {
        "name": "Number in Critical Condition",
        "people": critical + ""
      }
    ]
    return (
      <ResponsiveContainer width={1200} height={450}>
        <BarChart width={1200} height={450} data={data}>
          <XAxis dataKey="name" domain={[0, 50000]}/>
          <YAxis />
          <Tooltip />
          <Bar dataKey="people" fill="#f26419"/>
        </BarChart>
      </ResponsiveContainer>
    )
  }

  console.log(deaths, deathIncrease, critical)

  return (
    <div className="nogo-page">
      <h1 className="header2">Uh-oh.</h1>
      <p className="recomend">We recommend that you stay inside.</p>
      <p className="deaths">{deaths} people have died in total and {deathIncrease} of those deaths were from the past day alone.</p>
      <p className="critical">There are also {critical} people currently in critical condition.</p>
      <br/>
      <br/>
      {Graph()}
    </div>
  )
}

export default NoGoPage
