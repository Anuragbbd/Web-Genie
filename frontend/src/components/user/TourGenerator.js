import React, { useState } from 'react';
import Joyride from 'react-joyride';
import Swal from 'sweetalert2';
import app_config from '../../config';
import { useFormik } from 'formik';

const TourGenerator = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const [tourSteps, setTourSteps] = useState([
    {
      target: '.step1',
      content: 'This is my awesome feature!',
    }
  ]);

  const { apiUrl } = app_config;

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
      {/* <Joyride steps={tourSteps} /> */}
      {/* <h1 className="step1">Step 1</h1>
      <p className="p-4 mt-5 bg-warning step2">My Step 2</p> */}
      {/* <button className="float-end step3">Nice</button> */}
      <section className="h-100 h-custom" style={{ backgroundColor: '#8fc4b7' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-8">
              <div className="card rounded-3">
                <img
                  src="https://kinsta.com/wp-content/uploads/2020/03/website-navigation.jpg"
                  className="w-100"
                  style={{
                    borderTopLeftRadius: '.3rem',
                    borderTopRightRadius: '.3rem'
                  }}
                  alt="Sample"
                />
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-black">Configure Your Tour Generation System</h3>


                  <div className="row">
                    <div className="col-md-6 mb-4">
                    <form className="px-md-2" onSubmit={setupForm.handleSubmit}>
                   
                   <div className="mb-4">
                     <label className="form-label" htmlFor="form3Example1q">
                       Tour Title
                     </label>
                     <input
                       type="text"
                       id="title"
                       onChange={setupForm.handleChange}
                       value={setupForm.values.title}
                       className="form-control"
                       placeholder="Title" />
                   </div>

                   <button type="submit" className="btn btn-success btn-lg mb-1">
                     Submit
                   </button>
                 </form>
                    </div>
                    <div className="col-md-6 mb-4">

                      <h4>Configure Page Tour Steps</h4>
                      <hr />  
                      {
                        tourSteps.map((step, index) => (
                          <div className='mb-3' key={index}>
                            <label>Element Class Name</label>
                            <input type="text" className="form-control mb-2" value={step.target} onChange={e => updateStep(index, 'target', e.target.value)} />
                            
                            <label>Message</label>
                            <input type="text" className="form-control" value={step.content} onChange={e => updateStep(index, 'content', e.target.value)} />
                          </div>
                        ))
                      }
                      <button className='btn btn-primary mt-2' onClick={addStep}> <i class="fa fa-plus-circle" aria-hidden="true"></i> Add New Step </button>
                    </div>

                  </div>


                </div>
              </div>
            </div>
          </div>
        </div >
      </section >
    </div>
  );
};

export default TourGenerator;
