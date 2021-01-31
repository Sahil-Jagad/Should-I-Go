import React from 'react'

function SymptomItem(props){
    return (
      <div className="symptom">
          <input id={props.item.id} type="checkbox" />
          <p>{props.item.value}</p>

      </div>
    )
}

export default SymptomItem