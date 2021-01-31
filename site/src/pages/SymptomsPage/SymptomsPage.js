import React  from 'react'
import SymptomItem from './SymptomItem'
import symptomsData from './symptomsData'
import "./SymptomsPage.css"

class SymptomsPage extends React.Component{
  constructor(){
    super()
    this.state = {
      symptoms: symptomsData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      const updatedSymptoms = prevState.symptoms.map(symp => {
        if (symp.id === id){
          symp.completed = !symp.completed
        }
        return symp
      })
      return {
        todos: updatedSymptoms
      }
    })
  }

  render(){
    const symptomItems = symptomsData.map(item => <SymptomItem key={item.id} item={item} 
      handleChange={this.handleChange}/>)
    return(
      <div className="symptoms-page">
        <div>
          <h1 className="almost-title">Almost There</h1>

          <p className="first-header">It is safe for you to social distance.</p>

          <p className="second-header">But first...</p>

          <h1 className="third-header">What are your symptoms?</h1>

          <ul className="checkbox-grid">
            {symptomItems}
          </ul>
        </div>
      </div>
    )
  }

}

export default SymptomsPage