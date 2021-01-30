import React from 'react'
import Geosuggest from 'react-geosuggest';
import './StartPage.css'

const StartPage = () => {
  /**
   * When a suggest got selected
   */
  const onSuggestSelect = (suggest) => console.log(suggest);

  /**
   * When there are no suggest results
   */
  const onSuggestNoResults = (userInput) =>
    console.log(`onSuggestNoResults for : ${userInput}`);

  const fixtures = [
    { label: 'New York', location: { lat: 40.7033127, lng: -73.979681 } },
    { label: 'Rio', location: { lat: -22.066452, lng: -42.9232368 } },
    { label: 'Tokyo', location: { lat: 35.673343, lng: 139.710388 } }
  ];

  return (
    <div>
      <h1>What are your plans this week?</h1>
      <Geosuggest
        fixtures={fixtures}
        onSuggestSelect={onSuggestSelect}
        onSuggestNoResults={onSuggestNoResults}
        location={null}
        radius="20"
      />
      {/* <input/> */}
    </div>
  )
}

export default StartPage
