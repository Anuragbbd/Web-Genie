import React, { useEffect, useState } from 'react';
import annyang from 'annyang';

const SearchSystem = ({ userid }) => {
  // const [annyang, setAnnyang] = useState(window.annyang);

  const url = 'http://localhost:5000';

  const [webpagesList, setWebpagesList] = useState([]);

  const fetchWebpagesData = async () => {
    const response = await fetch(`${url}/webpage/getbyuser/${userid}`);
    const data = await response.json();
    console.log(data.result);
    setWebpagesList(data.result);
    // return data;
  };

  useEffect(() => {
    fetchWebpagesData();
  }, []);

  useEffect(() => {
    //   initVoiceListen();
    init();
  }, []);

  const [listening, setListening] = useState(false);

  const init = () => {
    const commands = {
      hello: () => {
        console.log('Hello!');
        speak('Hello! How are you');
      },
      'say :message': (message) => {
        console.log('You said:', message);
        speak('You said: ' + message);
      },
      'open :pagename page': (pagename) => {
        console.log(pagename);
        const webpage = webpagesList.find((w) =>
          w.keywords[0]
            .split(',')
            .map((key) => key.trim().toLowerCase())
            .includes(pagename.toLowerCase())
        );
        console.log(webpage);
        if (webpage) {
          console.log(`Opening ${webpage.title} Page`);
          speak(`Opening ${webpage.title} Page`);
          setTimeout(() => {
            window.open(webpage.url);
          }, 2000);
        }
      }
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

  const initSpeechSystem = () => {};

  const speak = (text) => {
    const voiceName = 'Google US English';
    console.log('Speak: ' + text);
    if ('speechSynthesis' in window) {
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
        console.log('Voice not found.');
      }

      synth.speak(utterance);
    } else {
      console.log('Speech synthesis is not supported in this browser.');
    }
  };

  const startListening = () => {
    setListening(true);
    // annyang.start();

    setTimeout(() => {
      setListening(false);
    }, 5000);
  };

  return (
    <div>
      <div className="container">
        <button onClick={() => speak('Here are the search results')}>Speak</button>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add New Webpage
                </h5>
                <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <input className="form-control form-control-lg" />
                <button className="btn btn-primary" onClick={startListening}>
                  {listening ? 'Listening...' : 'Click To Speak'}
                </button>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <button type="button" className="btn btn-primary float-end my-4" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
          <i className="fas fa-search"></i> Search
        </button>
      </div>
    </div>
  );
};

export default SearchSystem;
