
export const UserInput = ({ inputOne, inputTwo, handleInputChange,handleKeyPress }) => {
  return (
    <div className="user-inputs">
      <div className="input-one py-2">
        <h2 className="username">User One</h2>
        <input type="text" className="user-one" name="inputOne" value={inputOne} placeholder="User One type here..." onChange={handleInputChange} onKeyPress={handleKeyPress} />
      </div>
      <div className="input-two">
        <h2 className="username">User Two</h2>
        <input type="text" className="user-two" name="inputTwo" value={inputTwo} placeholder="User two type here..." onChange={handleInputChange} onKeyPress={handleKeyPress} />
      </div>
    </div>
  )
}