import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Lobby() {
  const [roomId, setRoomId] = useState("");
  const history = useHistory();
  const joinRoom = (e) => {
    e.preventDefault();
    history.push(`/controller/${roomId}`);
  };
  const createNew = () => {
    history.push(`/player/111`);
  };

  return (
    <div className="container">
      <section className="section">
        <form className="control" onSubmit={joinRoom}>
          <input
            value={roomId}
            className="input has-text-centered"
            type="text"
            placeholder="Room code"
            onChange={(e) => setRoomId(e.target.value)}
          />
          <input
            type="submit"
            className="button is-primary"
            onClick={joinRoom}
            value="Join room"
          />
        </form>
      </section>

      <section className="section">
        <button className="button is-primary" onClick={createNew}>
          Create new room
        </button>
      </section>
    </div>
  );
}
