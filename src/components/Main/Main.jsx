import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'

const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
          <p>Bourbon</p>
          <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

            {!showResult
            ?<>
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
            </>
            : <div className="result">
                  <div className="result-title">
                    <img src={assets.gemini_icon} alt="" />
                    <p>{recentPrompt}</p>
                  </div>
                  <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                  </div>
              </div>
            }


          

          <div className="main-bottom">
            <div className="search-box">
              <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
              </div>
            </div>
            <p className="bottom-info">
              Bourbon may display inaccurate information, so double check its responses.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Main
