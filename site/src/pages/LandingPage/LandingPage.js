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

  return (
      <div className="landing-page">
      <img src="/images/robot.png" className="landing-logo" />
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
          </div>
        )}
      </Transition>
      </div>
  )
}

export default LandingPage
