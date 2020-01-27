import React, { useContext, useEffect, useState } from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { useHttp } from "../../hooks/http.hook";
import { AuthContext } from "../../context/AuthContext";

const Form = () => {
  const { login } = useContext(AuthContext);
  const { loading, error, request, clearError, success } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    clearError();
  }, [error, clearError]);

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      await request("/api/auth/register", "POST", { ...form });
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <MDBRow className="justify-content-center">
      <MDBCol md="6">
        <form className="border p-3 rounded mt-5 ">
          <p className="h5 text-center mb-4">Sign in</p>
          <div className="grey-text">
            <MDBInput
              label="Type your email"
              icon="envelope"
              group
              type="email"
              validate
              name="email"
              error="wrong"
              success="right"
              value={form.email}
              onChange={changeHandler}
            />
            <MDBInput
              label="Type your password"
              icon="lock"
              name="password"
              group
              type="password"
              validate
              value={form.password}
              onChange={changeHandler}
            />
          </div>
          <div className="text-center">
            <MDBBtn disabled={loading} onClick={loginHandler}>
              Login
            </MDBBtn>
            <MDBBtn
              color={"blue-grey"}
              disabled={loading}
              onClick={registerHandler}
            >
              Register
            </MDBBtn>
          </div>
        </form>
        {(success || error) && (
          <div>
            <p
              style={
                success
                  ? { color: "green", fontSize: 18, fontWeight: "bold" }
                  : { color: "red", fontSize: 18, fontWeight: "bold" }
              }
            >
              {success || error}
            </p>
          </div>
        )}
      </MDBCol>
    </MDBRow>
  );
};

export default Form;
