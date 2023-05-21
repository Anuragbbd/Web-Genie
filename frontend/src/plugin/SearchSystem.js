import React, { useEffect, useState } from "react";
import annyang from "annyang";

const SearchSystem = () => {
  // const [annyang, setAnnyang] = useState(window.annyang);

  useEffect(() => {
    //   initVoiceListen();
    init();
  }, []);

  const init = () => {
    const commands = {
      hello: () => {
        console.log("Hello!");
        speak('Hello! How are you');
      },
      "say :message": (message) => {
        console.log("You said:", message);
        speak('You said: ' + message);
      },
    };

    // Add the commands to annyang
    annyang.addCommands(commands);

    // Start listening
    annyang.start();

    // Clean up when the component is unmounted
    return () => {
      annyang.removeCommands();
      annyang.abort();
    };
  };

  const initSpeechSystem = () => {

  }

  const speak = (text) => {
    const voiceName = 'Google US English';
    console.log("Speak: " + text);
    if ("speechSynthesis" in window) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);

      const voices = synth.getVoices();
        // console.log(voices);
      // Find the desired voice
      const voice = voices.find((v) => v.name === voiceName);

      // Set the voice for the utterance
      if (voice) {
        utterance.voice = voice;
      } else {
        console.log("Voice not found.");
      }

      synth.speak(utterance);
    } else {
      console.log("Speech synthesis is not supported in this browser.");
    }
  };

  return (
    <div>
      <div className="container">
        <button onClick={() => speak("Here are the search results")}>Speak</button>
      </div>
    </div>
  );
};

export default SearchSystem;
