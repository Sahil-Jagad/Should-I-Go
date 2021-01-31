import React, {useState} from 'react'
import Geosuggest from 'react-geosuggest';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './StartPage.css'

/*global google*/

const StartPage = () => {

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
    setState(place.description)
  };

  return (
    <div>
      <h1>What are your plans this week?</h1>
      <p>Where?</p>
      <Geosuggest className="location"
        placeholder="Locations"
        onBlur={closeSuggestions}
        onFocus={onFocus}
        onSuggestSelect={onSuggestSelect}
        location={new google.maps.LatLng(53.558572, 9.9278215)}
        radius="20"
      />
      <p>When?</p>
      <DatePicker selected={date} onChange={d => setDate(d)} />
    </div>
  )
}

export default StartPage
