// Create a chat-like interface. With user one and user two inputs. Each input should add a message from that user to the chat log.

// You want them to be inserted back and forth like text messages basically. 

// You should be able to delete a message by long pressing then a modal pops up and you can delete or ignore
import { useState } from 'react';

import { UserInput } from "./UserInput/UserInput"
import { ChatBody } from "./ChatBody/ChatBody"

export const ChatInterface = () => {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [modal, setModal] = useState({ show: false, messageIndex: null });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "inputOne") {
      setInputOne(value);
    } else if (name === "inputTwo") {
      setInputTwo(value);
    }
  };

  const addMessage = (user, text) => {
    setChatLog([...chatLog, { user, text }]);
  }

  const handleLongPress = (index) => {
    setModal({ show: true, messageIndex: index });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const { name } = event.target;
      if (name === "inputOne" && inputOne.trim()) {
        addMessage("User One", inputOne.trim());
        setInputOne(""); // Clear the input after sending
      } else if (name === "inputTwo" && inputTwo.trim()) {
        addMessage("User Two", inputTwo.trim());
        setInputTwo(""); // Clear the input after sending
      }
    }
  };

  const deleteMessage = () => {
    setChatLog(chatLog.filter((_, i) => i !== modal.messageIndex));
    setModal({ show: false, messageIndex: null });
  };

  const closeModal = () => {
    setModal({ show: false, messageIndex: null });
  };

  return (
    <div>
      <h1>interface</h1>
      <UserInput
        inputOne={inputOne}
        inputTwo={inputTwo}
        handleInputChange={handleInputChange}
        handleKeyPress={handleKeyPress}    
      />
      <ChatBody
        chatLog={chatLog}
        onLongPress={handleLongPress}
      />
      {modal.show && (
        <div className="modal">
          <p>Do you want to delete this message?</p>
          <button onClick={deleteMessage}>Delete</button>
          <button onClick={closeModal}>Ignore</button>
        </div>
      )}
    </div>
  )
}