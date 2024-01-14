import './App.css';
import gptLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import save from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendBtn from './assets/send.svg'
import user from './assets/user-icon.png'
import gptImgIcon from './assets/chatgptLogo.svg'
import { openAI } from './openAI';
import { useState } from 'react';

function App() {

  const [input,setInput]=useState("")

  const handleSend=async ()=>{
          const res=await openAI(input);
          console.log(res) 
  }
  return (
    <div className="App">
             <div className="sideBar">
                    <div className="upperSide">
                         <div className="upperSideTop"><img src={gptLogo} className="logo"/><span className="brand">ChatGPT</span></div>
                         <button className="midBtn"><img src={addBtn} className="addBtn"/>New Chat</button>
                         <div className="upperSideBottom">
                             <button className="query"><img src={msgIcon} alt="Query" />What is Porgramming?</button>
                             <button className="query"><img src={msgIcon} alt="Query"  />How to use an API?</button>
                         </div>
                    </div>
                    <div className="lowerSide">
                         <div className="listItems"><img src={home} alt="Home" className="listItemsImage"/>Home</div>
                         <div className="listItems"><img src={save} alt="save"  className="listItemsImage"/>Save</div>
                         <div className="listItems"><img src={rocket} alt="rocket"   className="listItemsImage"/>Upgrade to Pro</div>
                    </div>
             </div>

             <div className="main">
                   <div className="chats">
                       <div className="chat">
                        <img src={user} className="chatImg" alt="User" /><p className="txt">
                        As of my last knowledge update in January 2022, OpenAI provides different API plans, and some of them are available with associated costs. They offer both free and paid access tiers, depending on your usage needs and requirements.
                        For the most accurate and up-to-date information on OpenAI's pricing and plans, I recommend checking the official OpenAI website or contacting OpenAI directly. They may have updated their pricing structure or introduced new plans since my last update.
                        </p>

                       </div>
                       <div className="chat bot">
                        <img src={gptImgIcon} className="chatImg" alt="chatgpt" /><p className="txt">
                        As of my last knowledge update in January 2022, OpenAI provides different API plans, and some of them are available with associated costs. They offer both free and paid access tiers, depending on your usage needs and requirements.
                        For the most accurate and up-to-date information on OpenAI's pricing and plans, I recommend checking the official OpenAI website or contacting OpenAI directly. They may have updated their pricing structure or introduced new plans since my last update.
                        </p>

                       </div>
                   </div>
                   <div className="chatFooter">
                       <div className="inp">
                        <input type="text" placeholder="Send a message......" value={input} onChange={(e)=>setInput(e.target.value)} /><button  className="send" onClick={handleSend}><img src={sendBtn} alt="button"/></button>
                       </div>
                       <p>ChatGPT may produces some incorrect result about the people,places and some other stuff as well so make sure waht you asking</p>
                   </div>
             </div>

    </div>

  );
}

export default App;
