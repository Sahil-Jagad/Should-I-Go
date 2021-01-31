import React from 'react'

function SymptomItem(props){
    return (
      <div className="symptom">
          <input className="checkbox" type="checkbox" onChange={() => props.handleChange(props.item.id)}/>
          <p>{props.item.value}</p>

      </div>
    )
}

export default SymptomItem