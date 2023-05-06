
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
      user:"me",
      message : "I'm using chatGPT"
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
    
    const response = await fetch("http://localhost:3080/",{
      method : "POST",
      headers : {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        message:chatLog.map((message)=>message.message).join("")
      })
    });
    const data = await response.json();
    setChatLog([...chatLog,{
      user:"gpt",
      message:`${data.message}`
    }])
    console.log(data);

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
  <div className={`chat-message ${message.user ==="gpt" && "chatgpt"}`}>
              <div className="chat-message-center">
                <div className={`avatar ${message.user ==="gpt" && "chatgpt"}`}>
                  
                </div>
                <div className="message">
                    {message.message}
                </div>
              </div>
            </div>
  )
}

export default App;
