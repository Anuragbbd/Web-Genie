import React, { useEffect, useState } from 'react';
import Joyride from 'react-joyride';
import Swal from 'sweetalert2';
import app_config from '../../config';
import { useFormik } from 'formik';

const ManageTour = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const { apiUrl } = app_config;

  const [tourDataList, setTourDataList] = useState([]);
  

  const fetchTourData = async () => { 
    const res = await fetch(`${apiUrl}/tour/getbyuser/${currentUser._id}`);


    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      setTourDataList(data.result);
      console.log(data);
    }
  }

  useEffect(() => {
    fetchTourData();
  }, [])
  
  const displayTours = () => {
    return tourDataList.map((tour, index) => (
      <div className='col-md-4'>
        <div className='card'>
          <div className="card-body">
            <h5 className="card-title">{tour.title}</h5>
            <h6>Copy Plugin Code </h6>
            <textarea value={`<div id="tourPlugin" pluginId="${tour._id}"></div>
<script src="http://localhost:5000/index.js"></script>`}></textarea>
            <button className='btn btn-secondary'><i class="fas fa-copy"></i></button>
          </div>
        </div>
      </div>
    ))
  }

  const [tourSteps, setTourSteps] = useState([
    {
      target: '.step1',
      content: 'This is my awesome feature!',
    }
  ]);


  const addStep = () => {
    setTourSteps([
      ...tourSteps,
      {
        target: '.step2',
        content: 'This another awesome feature!',
        disableBeacon: true
      }
    ]);
  }

  const updateStep = (index, key, value) => {
    let steps = [...tourSteps];
    steps[index][key] = value;
    setTourSteps(steps);
  }

  const setupForm = useFormik({
    initialValues: {
      title: '',
      user: currentUser._id,
      created_at: new Date(),
      updated_at: new Date()
    },
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      values.steps = tourSteps;
      console.log(values);
      const res = await fetch(`${apiUrl}/tour/add`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status);
      if (res.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'User Registered Successfully!!'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Some Error Occured!!'
        });
      }
    }
  });

  return (
    <div>
      <div className='container'>
        <div className='row'>
          {displayTours()}
        </div>
      </div>

    </div>
  );
};

export default ManageTour;
