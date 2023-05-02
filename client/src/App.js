
import './normal.css';
import './App.css';
import { useState } from 'react';

function App() {

  const [input,setInput] = useState("");
  const [chatLog , setChatLog] = useState([
    {
      user:"gpt",
      message : "hi thinesh what do you need"
    }
    ,
    {
      user:"gpt",
      message : "hi thinesh what do you nee"
    }
  ]);

 // console.log(input);
  async function handleSubmit(e){
    e.preventDefault();
    //console.log('hi thinesh');
    setChatLog([...chatLog , {
      user:"me",
      message :  `${input}`
    }]);
    setInput("");
  }

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          {chatLog.map((message , index) =>(
            <ChatMessage key={index} message={message} />
          )
          )}
        </div>

      <div className="chat-input-holder">
        <form onSubmit={handleSubmit}>
          <input 
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          rows="1" className="chat-input-textarea" placeholder="Send a message."></input>
          </form>
      </div>
      </section>
    </div>
  );
}


const ChatMessage = ({message})=>{
  return (
  <div className="chat-message">
              <div className="chat-message-center">
                <div className="avatar">
                  
                </div>
                <div className="message">
                    {message.message}
                </div>
              </div>
            </div>
  )
}

export default App;
