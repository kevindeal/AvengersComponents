
export const ChatBody = ({ chatLog, onLongPress }) => {
  return (
    <div>
      {chatLog.map((msg, index) => (
        <p
          key={index}
          onContextMenu={(event) => {
            event.preventDefault();
            onLongPress(index);
          }}
        >
          {msg.user}: {msg.text}
        </p>
      ))}
    </div>
  );
};