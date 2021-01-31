import React  from 'react'
import SymptomItem from './SymptomItem'
import { withRouter } from 'react-router-dom';
import symptomsData from './symptomsData'
import axios from "axios"
import "./SymptomsPage.css"

class SymptomsPage extends React.Component{
  componentDidMount() {
    sessionStorage.removeItem("token")
  }
  
  constructor(){
    super()
    this.submitSymptoms = this.submitSymptoms.bind(this)
  }

  submitSymptoms() {
    let sympList = [];
    const symptoms = document.getElementsByClassName("symptom")
    for (let i=0; i<symptoms.length; i+=1) {
      if (symptoms[i].firstElementChild.checked) {
        sympList = [...sympList, symptoms[i].children[1].innerHTML]
      }
    }
    axios.post(`https://covid-should-i-go.herokuapp.com/symptoms`, {"symptoms": sympList}).then((res) => {
      console.log(res);
      sessionStorage.setItem("token", "auth");
      if (res.data.testForCovid) {
        this.props.history.push({
          pathname: "/doctor",
        })
      } else {
        this.props.history.push({
          pathname: "/success",
          deaths: res.data.deaths,
          deathIncrease: res.data.deathIncrease,
          critical: res.data.critical
        })
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
          <button className="button" onClick={this.submitSymptoms}>Next</button>
        </div>
      </div>
    )
  }

}

export default withRouter(SymptomsPage);