import React, { useState } from 'react'

const StatisticLine = (props) => {
  return (
    
      <tr><td>{props.text}</td>   <td>{props.value}</td></tr>
    
  )
}

const Statistics = (props) => {
  return(
    
      <table>
        <tbody>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="Total" value ={props.bad + props.good + props.neutral} />
        </tbody>
      </table>
    
  )
}
const Average = (props) =>{
  if (props.good === 0 & props.neutral === 0 & props.bad === 0){
    return (
      <div>Average 0</div>
    )
  }
  return(
    
      <tr><td>{props.text}</td> <td>{((props.good - props.bad)/(props.good + props.neutral + props.bad)).toFixed(2)}</td></tr>
    
  )
}
const Positive = (props) =>{
  if (props.good === 0 & props.neutral === 0 & props.bad === 0){
    return (
      <div>Positive 0%</div>
    )
  }
  return(
    
    <tr><td>{props.text} </td> <td>{((props.good)/(props.good + props.neutral + props.bad)*100).toFixed(1)} %</td></tr>
    
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeu] = useState(0)
  const [bad, setBad] = useState(0)

  /*const handleGood = () =>{
    setGood(good + 1)
  }
  const handleNeu = () =>{
    setNeu(neutral + 1)
  }
  const handleBad = () =>{
    setBad(bad + 1)
  }*/
 
  if (good === 0 & neutral === 0 & bad === 0){
    return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text = 'Good'/>
      <Button handleClick={() => setNeu(neutral + 1)} text = 'neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text = 'bad'/>
      <h2>No feedback given</h2>
    </div>
  )}
  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text = 'Good'/>
      <Button handleClick={() => setNeu(neutral + 1)} text = 'neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text = 'bad'/>
      <h1>Statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
      <Average text = 'average' good = {good} neutral = {neutral} bad = {bad}/>
      <Positive text = 'positive' good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}


export default App;
