import React, { useEffect, useState } from 'react';
import Joyride from 'react-joyride';

const ViewTour = ({pluginId}) => {

  const [tourData, setTourData] = useState(null);
  

  const fetchTourData = async () => { 
    const res = await fetch(`http://localhost:5000/tour/getbyid/${pluginId}`);


    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      setTourData(data.result);
      console.log(data);
    }
  }

  useEffect(() => {
    fetchTourData();
  }, [])

  return (
    <div>

        {
            tourData!==null && <Joyride steps={tourData.steps} />
        }

        <h1>Test Tour</h1>

        <h3 className='step1'>Step 1</h3>
        <button className='step2 float-end'>Step 2</button>
    </div>
  )
}

export default ViewTour