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
    </div>
  )
}

export default ViewTour