import React from "react";

interface Props {
  title: string;
}

const MessageStatus: React.FC<Props> = ({ title }) => {
  return (
    <>
      <h3 className="sidebar-heading">{title}</h3>
      <div
        className="message-statusDiv py-2"
        style={{ display: "flex", width: "100%" }}
      >
        <input
          className="py-2"
          style={{ backgroundColor: "#f3f5f9", border: "none" }}
          placeholder="Min"
          type="text"
        />
        <input
          style={{ backgroundColor: "#f3f5f9", border: "none" }}
          placeholder="Max"
          type="text"
        />
      </div>
    </>
  );
};

export default MessageStatus;
