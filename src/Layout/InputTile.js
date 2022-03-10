import React, { useState } from 'react'
import '../styles/main.scss'
const InputTile = (props) => {
  const [input, setInput] = useState({
    volume: 500,
    iTime: 1,
    resistance: 10,
    compliance: 50,
    peep: 5,
    autoPeep: 0
  })

  const [pip, setPip] = useState('')

  const handleChange = (event) => {
    event.preventDefault()
    setInput({...input, [event.currentTarget.name]: event.currentTarget.value})
    setPip(calculatePip(input))
  }

  const calculatePip = (parameters) => {
    const { volume, iTime, compliance, resistance, peep, autoPeep } = parameters
    const flow = (parseInt(volume) / 1000) / parseFloat(iTime)
    const pip = (parseInt(volume) / parseInt(compliance)) + (parseInt(resistance) * parseFloat(flow)) + parseInt(peep) + parseInt(autoPeep)
    return pip.toFixed(2)
  }

  return(
    <div className="input-tile">
      <div className="input">
        <label for="volume">Volume</label>
        <input 
          type="range" 
          name="volume" 
          min="0" 
          max="1000" 
          value={input.volume} 
          onChange={handleChange}
          />
          <div className="display-input">
            {input.volume}
          </div>
      </div>
      <div className="input">
        <label for="iTime">iTime</label>
        <input 
          type="range"  
          name="iTime" 
          min="0" 
          max="3" 
          step="0.1"
          value={input.iTime} 
          onChange={handleChange}
          />
          <div className="display-input">
            {input.iTime}
          </div>
      </div>
      <div className="input">
        <label for="resistance">Resistance</label>
        <input 
          type="range" 
          name="resistance" 
          min="0" 
          max="100" 
          value={input.resistance} 
          onChange={handleChange}
          />
          <div className="display-input">
            {input.resistance}
          </div>
      </div>
      <div className="input">
        <label for="compliance">Compliance</label>
        <input 
          type="range" 
          name="compliance" 
          min="0" 
          max="100" 
          value={input.compliance} 
          onChange={handleChange}
          />
          <div className="display-input">
            {input.compliance}
          </div>
      </div>
      <div className="input">
        <label for="peep">Peep</label>
        <input 
          type="range" 
          name="peep" 
          min="0" 
          max="40" 
          value={input.peep} 
          onChange={handleChange}
          />
          <div className="display-input">
            {input.peep}
          </div>
      </div>
      <div className="input">
        <label for="autoPeep">autoPeep</label>
        <input 
          type="range" 
          name="autoPeep" 
          min="0" 
          max="20" 
          value={input.autoPeep} 
          onChange={handleChange}
          />
          <div className="display-input">
            {input.autoPeep}
          </div>
      </div>

      <div className="pip">
        {pip}
      </div>
    </div>
  )
}

export default InputTile