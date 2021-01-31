import React, {useState, useEffect} from 'react'
import "./LandingPage.css"
import {Link} from 'react-router-dom'
import {Transition} from 'react-transition-group'

const LandingPage = () => {
  const [inProp, setInProp] = useState(false)
  useEffect(() => {
    setInProp(true)
  }, [])

  const duration = 1000;

  const defaultStyle = {
    transition: `all ${duration}ms ease-in`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0},
    exited: { opacity: 0},
  };

  let audio = new Audio("/audio/The Clash - Should I Stay or Should I Go (Official Audio).mp3")
  const start = () => {
    audio.play()
  }

  return (
      <div className="landing-page flexdiv">
      <img src="/images/robot.png" alt="robot logo" className="landing-logo" />
      <Transition in={inProp} timeout={duration}>
        {state => (
          <div className="landing-text" style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            <h1>SHOULD I GO?</h1>
            <p>Keeping you safe and social</p>
            <Link to="start">
              <button className="landing-launch">LAUNCH APPLICATION</button>
            </Link>
            <button className="landing-launch2" onClick={start}>PLAY SONG</button>
          </div>
        )}
      </Transition>
      </div>
  )
}

export default LandingPage
