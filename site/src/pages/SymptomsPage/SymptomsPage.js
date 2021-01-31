import React  from 'react'
import SymptomItem from './SymptomItem'
import symptomsData from './symptomsData'

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
      <div>
        <h1>Almost There</h1>
        <h2>It is safe for you to social distance.</h2>
        <h2>But first...</h2>
        {symptomItems}
      </div>
    )
  }

}

export default SymptomsPage