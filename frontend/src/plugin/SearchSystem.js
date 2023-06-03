import React, { useEffect, useState } from 'react';
import annyang from 'annyang';
import './plugin.css';

const SearchSystem = ({ userid, pluginid }) => {
  // const [annyang, setAnnyang] = useState(window.annyang);

  const url = 'http://localhost:5000';

  const [webpagesList, setWebpagesList] = useState([]);
  const [pluginData, setPluginData] = useState(null);

  const [modalDisplay, setModalDisplay] = useState('none');

  const fetchWebpagesData = async () => {
    const response = await fetch(`${url}/webpage/getbyuser/${userid}`);
    const data = await response.json();
    console.log(data.result);
    setWebpagesList(data.result);
    init(data.result);
    // return data;
  };

  const fetchPluginData = async () => {
    const response = await fetch(`${url}/search/getbyid/${pluginid}`);
    const data = await response.json();
    console.log(data.result);
    setPluginData(data.result);
    // return data;
  };

  useEffect(() => {
    fetchWebpagesData();
    fetchPluginData();
  }, []);

  useEffect(() => {
    //   initVoiceListen();
    // init();
  }, []);

  const [listening, setListening] = useState(false);

  const init = (webpages) => {
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
        // console.log(webpages);
        const webpage = webpages.find((w) =>{
          const keys = w.keywords[0]
          .split(',')
          .map((key) => key.trim().toLowerCase())
          console.log(keys);
          return keys.includes(pagename.toLowerCase())
        })
        console.log(webpage);
        if (webpage) {
          console.log(`Opening ${webpage.title} Page`);
          speak(`Opening ${webpage.title} Page`);
          setTimeout(() => {
            window.open(pluginData.siteUrl+'/'+webpage.url);
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

  //   const openModalBtn = document.getElementById('openModalBtn');
  const modal = document.getElementById('my-modal');
  // const closeBtn = document.getElementsByClassName('my-close')[0];

  // openModalBtn.addEventListener('click', () => {
  //   modal.style.display = 'block';
  // });

  // closeBtn.addEventListener('click', () => {
  //   modal.style.display = 'none';
  // });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      setModalDisplay('none');
    }
  });

  return (
    <div>
      <div id="modal" class="my-modal" style={{ display: modalDisplay }}>
        <div class="my-modal-content">
          <span class="my-close" onClick={(e) => setModalDisplay('none')}>
            &times;
          </span>
          {
            pluginData && (
              <>
                <h3>{pluginData.note}</h3>
                <input className='form-control' placeholder='Search here..' />
                or
                <h4>Speak Something</h4>
              </>
            )
          }
        </div>
      </div>
      <button id="openModalBtn" onClick={(e) => setModalDisplay('block')}>
        Open Modal
      </button>


      
      <div className="container">
       <img src="https://wallpaperaccess.com/full/343990.jpg" />
      </div>
    </div>
  );
};

export default SearchSystem;
