import React from "react";
import app_config from "../../config";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useFormik } from "formik";

const Signup = () => {
  const url = app_config.apiUrl;
  const { themeColor, themeColorLight } = app_config;
  const navigate = useNavigate();

  const signupform = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cPassword: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await fetch(`${url}/user/add`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      if (res.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "User Registered Successfully!!",
        });
        const data = (await res.json()).result;
        // sessionStorage.setItem("user", JSON.stringify(data));
        navigate("/main/signin");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Some Error Occured!!",
        });
      }
    },
  });

  return (
    <section className="vh-100">
      <div style={{ backgroundColor: '#FFFAF4' }}>

        <div className="container h-100">
          <div className="row">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black shadow-0 pb-4" style={{ borderRadius: 25 }}>
                  <div className="card-body  p-md-5">
                    <div className="row justify-content-center ">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1" style={{ backgroundColor: 'white' }}>
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Sign up
                        </p>
                        <form
                          className="mx-1 mx-md-4 p-2  " style={{ backgroundColor: 'white', width: "55vh" }}
                          onSubmit={signupform.handleSubmit}
                        >
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                            <div className=" flex-fill mb-0">
                              <label
                                className="form-label"
                                htmlFor="form3Example1c"
                              >
                                {/* Your Name */}
                              </label>
                              <input
                                type="text"
                                id="name"
                                onChange={signupform.handleChange}
                                value={signupform.values.name}
                                className="form-control"
                                placeholder="Your Name"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                            <div className="flex-fill mb-0">
                              <label
                                className="form-label"
                                htmlFor="form3Example3c"
                              >
                                {/* Your Email */}
                              </label>
                              <input
                                type="email"
                                id="email"
                                onChange={signupform.handleChange}
                                value={signupform.values.email}
                                className="form-control"
                                placeholder="Your Email"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw" />
                            <div className="flex-fill mb-0">
                              <label
                                className="form-label"
                                htmlFor="form3Example4c"
                              >
                                {/* Password */}
                              </label>
                              <input
                                type="password"
                                id="password"
                                onChange={signupform.handleChange}
                                value={signupform.values.password}
                                className="form-control"
                                placeholder="Password"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw" />
                            <div className="flex-fill mb-0">
                              <label
                                className="form-label"
                                htmlFor="form3Example4cd"
                              >
                                {/* Repeat your password */}
                              </label>
                              <input
                                type="password"
                                id="cPassword"
                                onChange={signupform.handleChange}
                                value={signupform.values.cPassword}
                                className="form-control"
                                placeholder="Repeat Your Password"
                              />
                            </div>
                          </div>
                          <div className="form-check d-flex justify-content-center mb-3">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              defaultValue=""
                              id="form2Example3c"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="form2Example3"
                            >
                              I agree all statements in{" "}
                              <a href="#! " >Terms of service</a>
                            </label>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              className="btn btn-primary btn-lg"
                            >
                              Register
                            </button>
                          </div>
                          <p className="ms-4 small fw-bold mt-2 pt-1 mb-0 text-center">Already a user?{" "}
                            <Link to='/main/signin'>SignIn</Link></p>
                        </form>
                      </div>

                    </div>
                  </div>
                </div>
                <div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
