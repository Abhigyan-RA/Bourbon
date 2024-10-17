import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
          <p>Bourbon</p>
          <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
          <div className="greet">
            <p><span>Hello There!</span></p>
            <p><span>How can I help you</span>?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>fdgsgsfgsfg</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>dfsfdsfsdfs</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>hfhtedrsdfsdf</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>gdfgdfgdgd</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main
