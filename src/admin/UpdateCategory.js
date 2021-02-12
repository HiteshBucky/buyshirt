import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link, Redirect, useHistory } from "react-router-dom";
import { getCategory, updateCategory } from "./helper/adminapicall";
import { isAutheticated } from "../auth/helper/index";

const UpdateCategory = ({ match }) => {

  const { user, token } = isAutheticated();
  let history = useHistory();

  const [values, setValues] = useState({
    name: "",
    loading: false,
    error: "",
    message : "",
    getaRedirect: false,
  });

  const {
    name,
    loading,
    error,
    message,
    getaRedirect,
  } = values;


  useEffect(() => {
    getCategory(match.params.categoryId).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: data.name,
        });
      }
    });
  }, []);

  //TODO: work on it
  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    updateCategory(match.params.categoryId, user._id, token, name).then(
      data => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: "",
            loading: false,
            message : data.message,
            getaRedirect : true,
          });
        }
      }
    );
  };

  const handleChange = name => event => {
    setValues({ ...values, error : false, [name]: event.target.value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: message ? "" : "none" }}
    >
      <h4>Category updated successfully</h4>
    </div>
  );

  const performRedirect = () => (
    setTimeout(() => {
      if (getaRedirect) {
        if (user && user.role === 1) {
          return history.push('/admin/dashboard');
        } else {
          return history.push('/user/dashboard');
        }
      }
      if (isAutheticated()) {
        return <Redirect to="/" />;
      }
    }, 1200)
  )

  const createProductForm = () => (
    <form>
      <div className="form-group">
        <p className="lead">Update the category</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange("name")}
          value={name}
          autoFocus
          required
          placeholder="For Ex. Summer"
        />
      </div>

      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success mb-3"
      >
        Update Category
      </button>
    </form>
  );

  return (
    <Base
      title="Add a product here!"
      description="Welcome to product creation section"
      className="container bg-info p-4"
    >
      <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin Home
      </Link>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {createProductForm()}
          {performRedirect()}
        </div>
      </div>
    </Base>
  );
};

export default UpdateCategory;
