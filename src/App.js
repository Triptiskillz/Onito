import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./App.css";

import data from "./data.json";
function validateEmail(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

// function validateUsername(value) {
//   let error;
//   if (value === 'admin') {
//     error = 'Nice try!';
//   }
//   return error;
// }
const App = () => {
  const [contacts, setContacts] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const getUser = async () => {
    fetch(setContacts)
      .then((res) => res.json())
      .then();
  };
  const [addFormData, setAddFormData] = useState({
    name: "",
    age: "",
    sex: "",
    mobile: "",
    idtype: "",
    govtid: "",
    label: "",
    gname: "",
    email: "",
    enumber: "",
    addr: "",
    state: "",
    city: "",
    country: "",
    occupation: "",
    religion: "",
    marital: "",
    blood: "",
    nationality: "",
  });
  const handleChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      age: addFormData.age,
      sex: addFormData.sex,
      mobile: addFormData.mobile,
      idtype: addFormData.idtype,
      govtid: addFormData.govtid,
      label: addFormData.label,
      gname: addFormData.gname,
      email: addFormData.email,
      enumber: addFormData.enumber,
      addr: addFormData.addr,
      state: addFormData.state,
      city: addFormData.city,
      country: addFormData.country,
      occupation: addFormData.occupation,
      religion: addFormData.religion,
      marital: addFormData.marital,
      blood: addFormData.blood,
      nationality: addFormData.nationality,
    };
    // console.log(gname);
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  return (
    <div>
      <Formik
        initialValues={{
          email1: "",
        }}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched, values, handleBlur, isValidating }) => (
          <div className="form">
            <Form onSubmit={handleSubmit}>
              <h3>
                {" "}
                <u>Personal Details </u>
              </h3>
              <label>
                {" "}
                Name<i>*</i>
              </label>
              <Field
                className=" field field1"
                type="text"
                name="name"
                placeholder="Enter Name"
                onChange={handleChange}
                required="required"
              />
              <span className="space">
                <label>
                  {" "}
                  Date of Birth or Age <i>*</i>
                </label>
                <Field
                  className=" field field2"
                  type="text"
                  required="required"
                  name="age"
                  placeholder="Age in Years"
                  onChange={handleChange}
                />
                <ErrorMessage name="age" component="div" />
                <label>
                  Sex<i>*</i>
                </label>
                <Field
                  className="field"
                  type="text"
                  name="sex"
                  placeholder="Enter Sex"
                  onChange={handleChange}
                />
              </span>

              <ErrorMessage name="sex" component="div" />
              <br />
              <label>Mobile</label>
              <Field
                className="field field3"
                type="text"
                name="mobile"
                required="required"
                placeholder="Enter Mobile"
                onChange={handleChange}
              />

              <span className="space">
                <label>Govt Issued ID</label>
                <Field
                  className="field field4"
                  type="text"
                  name="idtype"
                  placeholder="ID Type"
                  onChange={handleChange}
                />
                <Field
                  className="field field3"
                  type="text"
                  name="govtid"
                  placeholder="Enter Govt ID"
                  onChange={handleChange}
                />
              </span>
              <h3>
                <u>Contact Details</u>
              </h3>
              <label>Guardlian Details</label>
              <Field
                className="field field4"
                type="text"
                name="label"
                placeholder="Enter label"
                onChange={handleChange}
              />
              <Field
                className="field"
                type="text"
                name="gname"
                placeholder="Enter Guardlian Name"
                onChange={handleChange}
              />

              <label>
                Email<i>*</i>
              </label>

              <Field
                className="field"
                type="email"
                name="email"
                value={values.email}
                placeholder="Enter Email"
                onBlur={handleBlur}
                onChange={handleChange}
                validate={validateEmail}
              />

              {errors.email && touched.email && <div>{errors.email}</div>}

              <label>Emergency Contact number</label>
              <Field
                className="field"
                type="text"
                name="enumber"
                placeholder="Enter Emergency No"
                onChange={handleChange}
              />

              <h3>
                {" "}
                <u> Address Details</u>
              </h3>
              <label>Address</label>
              <Field
                className="field field1"
                type="text"
                name="addr"
                placeholder="Enter Address"
                onChange={handleChange}
              />
              <span className="space">
                <label>State</label>
                <Field
                  className="field field2"
                  type="text"
                  name="state"
                  placeholder="Enter state"
                  onChange={handleChange}
                />
                <label>City</label>
                <Field
                  className="field field2"
                  type="text"
                  name="city"
                  placeholder="Enter city/town/village"
                  onChange={handleChange}
                />
              </span>
              <br />
              <label>Country</label>
              <Field
                className="field field3"
                type="text"
                name="country"
                placeholder="Enter country"
                onChange={handleChange}
              />

              <span className="space">
                <label>Pincode</label>
                <Field
                  className="field"
                  type="text"
                  name="pincode"
                  placeholder="Enter pincode"
                  onChange={handleChange}
                />
              </span>

              <h3>
                {" "}
                <u>Other Details </u>
              </h3>
              <label>Occupation</label>
              <Field
                className="field"
                type="text"
                name="occupation"
                placeholder="Enter Occupation"
                onChange={handleChange}
              />
              <label>Religion</label>
              <Field
                className="field"
                type="text"
                name="religion"
                placeholder="Enter Religion"
                onChange={handleChange}
              />
              <label>Marital Status</label>
              <Field
                className="field"
                type="text"
                name="marital"
                placeholder="Enter Marital Status"
                onChange={handleChange}
              />
              <br />
              <label>Blood Group</label>
              <Field
                className="field"
                type="text"
                name="blood"
                placeholder="Enter Group"
                onChange={handleChange}
              />

              <label>Nationality</label>
              <Field
                className="field"
                type="text"
                name="nationality"
                placeholder="Enter Nationality"
                onChange={handleChange}
              />

              <div className="button">
                <button className="btn btn2" type="Cancel">
                  Cancel
                </button>
                <button className="btn" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
      <div className="itemS">
        {/* <h2>Search Item</h2> */}
        <form>
          <label>Search Item :</label><br/><br/>
          <input
            className="filter"
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            results
          />
        </form>
      </div>

      <table>
        <tr>
          <th>Personal Details</th>
          <th>Contact Details</th>
          <th>Address Details</th>
          <th>Other Details</th>
        </tr>

        {contacts
          .filter((items) => {
            if (searchTerm == "") {
              return items;
            } else if (
              items.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return items;
            }
          })
          .map((items, key) => (
            <tr>
              <td>
                <b>Name:</b> <span>{items.name}</span>
                <br />
                <b>Age:</b> <span>{items.age}</span>
                <br />
                <b>Sex:</b> <span>{items.sex}</span>
                <br />
                <b>Mobile:</b> <span>{items.mobile}</span>
                <br />
                <b>ID Type:</b> <span>{items.idtype}</span> <br />
                <b>Govt ID:</b> <span>{items.govtid}</span>
              </td>
              <td>
                <b>label :</b> <span>{items.label}</span>
                <br />
                <b>Guardlian Name:</b> <span>{items.gname}</span>
                <br />
                <b>Email :</b> <span>{items.email}</span>
                <br />
                <b>Emergency Number :</b> <span>{items.enumber}</span>
              </td>
              <td>
                <b>Address : </b>{" "}
                <span>
                  {items.addr},{items.state},{items.city},{items.country},
                  {items.pincode}
                </span>
              </td>
              <td>
                <b>Occupation: </b> <span>{items.blood}</span>
                <br />
                <b>Religion: </b> <span>{items.religion}</span>
                <br />
                <b>Marital: </b> <span>{items.marital}</span>
                <br />
                <b>Nationality</b> <span> {items.nationality}</span>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};
export default App;
