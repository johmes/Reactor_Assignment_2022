
import React, { useState } from 'react';

export default function Live() {

  const [socketUrl] = useState('ws://bad-api-assignment.reaktor.com/rps/live');
  const websocket = new WebSocket(socketUrl);

  websocket.onerror = (error) => {
    var label = document.getElementById("connectionText");
    label.innerHTML = "Connection failed";
  }

  document.addEventListener('DOMContentLoaded', (event) => {
    websocket.onmessage = (message) => {
      const unparsedDataFromServer = JSON.parse(message.data);
      const dataFromServer = JSON.parse(unparsedDataFromServer);
      if (dataFromServer.type === "GAME_BEGIN") {

        const input = document.getElementById("liveGameText");
        if (input != null) {
          input.className = "LiveGameText";
          input.innerHTML = dataFromServer.playerA.name != null &&
            dataFromServer.playerB.name != null ? dataFromServer.playerA.name + " VS " + dataFromServer.playerB.name : "Tyhjä";
        }

      } else if (dataFromServer.type === "GAME_RESULT") {
        return;
      }

    };
  })



  return (
    <>
      <h1 className='NavHeader'>
        Rock Paper Scissors
      </h1>
      <div className="snippet" id="liveGameText" data-title=".dot-pulse">
        <div className="stage">
          <div className="dot-pulse"></div>
        </div>
      </div>
    </>
  )


}