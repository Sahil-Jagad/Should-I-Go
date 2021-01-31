import React, {useState} from 'react'
import axios from "axios"
import {Link, useHistory} from 'react-router-dom'
import Geosuggest from 'react-geosuggest';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './StartPage.css'

/*global google*/

const StartPage = () => {
  const { push } = useHistory();

  const [date, setDate] = useState(new Date())
  const [state, setState] = useState("")

  const closeSuggestions = () => {
    const suggestions = document.getElementsByTagName('ul')[0]
    suggestions.style.display = 'none';
  }

  const onFocus = () => {
    const suggestions = document.getElementsByTagName('ul')[0]
    suggestions.style.display = 'block';
  }

  const onSuggestSelect = (place) => {
    closeSuggestions()
    if (place !== undefined) {
      const str = place.description.split(", ");
      if (str.length === 3) {
        setState(str[str.length - 2].toLowerCase())
      } else if (str.length === 2) {
        setState("ca")
      }
    } else {
      const suggestions = document.getElementsByTagName('ul')[0]
      suggestions.style.display = 'block';
      setState('')
    }
  };

  const noPlans = () => {
    sessionStorage.setItem("token", "auth");
  }

  const submitPlans = () => {
    if (state === "") {
      alert("Location not selected")
    } else {
      sessionStorage.setItem("token", "auth");
      axios.get(`https://covid-should-i-go.herokuapp.com/start/${state}`).then((res) => {
        if (res.data.shouldGoOut) {
          push({
            pathname: "/symptoms",
          })
        } else {
          push({
            pathname: "/no",
            deaths: res.data.deaths,
            deathIncrease: res.data.deathIncrease,
            critical: res.data.critical
          })
        }
      })
    }
  }

  return (
    <div className="flexdiv" style={{gridTemplateColumns: '1fr 1fr', height: "100vh"}}>
      <div className="plans">
        <h1>What are your plans this week?</h1>
          <div className="where">
            <p>Where?</p>
            <Geosuggest className="location"
              placeholder="Search"
              onBlur={closeSuggestions}
              onFocus={onFocus}
              onSuggestSelect={onSuggestSelect}
              location={new google.maps.LatLng(53.558572, 9.9278215)}
              radius="20"
            />
          </div>
          <div className="when">
            <p>When?</p>
            <DatePicker className="date" selected={date} onChange={d => setDate(d)} />
          </div>
        <Link to="/success"><p onClick={noPlans}>I don't have any plans.</p></Link>
        <button onClick={submitPlans} className="button">Next</button>
      </div>
      <img src="/images/schedule.png" alt="" width="400px"/>
    </div>
  )
}

export default StartPage
