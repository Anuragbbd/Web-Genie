import { useFormik } from 'formik';
import React from 'react';
import app_config from '../../config';
import Swal from 'sweetalert2';

const SearchSetup = () => {
  const { apiUrl } = app_config;

  const setupForm = useFormik({
    initialValues: {
      siteName: '',
      siteUrl: '',
      theme: '',
      created_at: new Date()
    },
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      console.log(values);
      const res = await fetch(`${apiUrl}/user/add`, {
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
      <section className="h-100 h-custom" style={{ backgroundColor: '#8fc4b7' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                  className="w-100"
                  style={{
                    borderTopLeftRadius: '.3rem',
                    borderTopRightRadius: '.3rem'
                  }}
                  alt="Sample"
                />
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-black">Configure Your Plugin</h3>
                  <form className="px-md-2">
                   
                    <div className="mb-4">
                      <label className="form-label" htmlFor="form3Example1q">
                        Site Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        onChange={setupForm.handleChange}
                        value={setupForm.values.name}
                        className="form-control"
                        placeholder="Site Name" />
                    </div>



                    <div className="mb-4">
                      <label className="form-label" htmlFor="form3Example1q">
                        Site URL
                      </label>
                      <input
                        type="text"
                        id="url"
                        onChange={setupForm.handleChange}
                        value={setupForm.values.name}
                        className="form-control"
                        placeholder="URL" />
                    </div>

                    <div className="mb-4">
                      <label className="form-label" htmlFor="form3Example1q">
                        Theme
                      </label>
                      <select className="form-control">
                        <option value={1} disabled="">
                          Gender
                        </option>
                        <option value={2}>Female</option>
                        <option value={3}>Male</option>
                        <option value={4}>Other</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label" htmlFor="form3Example1q">
                        Search Note
                      </label>
                      <input type="text"
                        id="search note"
                        onChange={setupForm.handleChange}
                        value={setupForm.values.name}
                        className="form-control"
                        placeholder="search note" />
                    </div>

                    <button type="submit" className="btn btn-success btn-lg mb-1">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div >
      </section >
    </div >
  );
};

export default SearchSetup;
