import React, { useState } from "react";
import "./editProfile.styles.scss";

import FormInput from "../../components/FormInput/FormInput";
import CustomButton from "./CustomButton";
import Password from "../../components/Password/Password";

const EditProfile = () => {
  const points = 120;
  const countOfCompletedTask = 15;

  const [edit, setEdit] = useState(true);

  const [user, setUser] = useState({
    first_name: "Ostap",
    last_name: "Klymko",
    email: " oostapk@gmail.com",
    password: "Secret - Secret",
    confirmPassword: "Secret - Secret",
    day: "03",
    month: "02",
    year: "2003",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <div className="profile-description">
        <div className="name-description">
          <h4>Welcome</h4>
          <h2>{user.first_name + " " + user.last_name}</h2>
        </div>
        <div className="score-description">
          <h4>
            Your score: <span>{points}</span> points
          </h4>
          <h4>
            Tasks done: <span>{countOfCompletedTask}</span>
          </h4>
        </div>
      </div>
      <form className="edit-form">
        <h3>Edit your information</h3>
        <div className="inputs">
          <div className="edit-form__flex">
            <FormInput
              type="text"
              name={"first_name"}
              value={user.first_name}
              labelText={"First name:"}
              onChange={handleChange}
              disabled={edit}
            />
            <FormInput
              type="text"
              name={"last_name"}
              value={user.last_name}
              labelText={"Last name:"}
              onChange={handleChange}
              disabled={edit}
            />
          </div>
          <div className="edit-form__flex">
            <FormInput
              type="text"
              name={"email"}
              value={user.email}
              labelText={"Email address:"}
              onChange={handleChange}
              disabled={edit}
            />
          </div>
          <div className="edit-form__flex">
            <Password
              name={"password"}
              value={user.password}
              labelText={"Password:"}
              onChange={handleChange}
              disabled={edit}
            />
            <Password
              name={"confirmPassword"}
              value={user.confirmPassword}
              labelText={"Confirm password:"}
              onChange={handleChange}
              disabled={edit}
            />
          </div>
          <div className="edit-form__flex">
            <FormInput
              type="number"
              name={"day"}
              min={1}
              max={31}
              value={user.day}
              labelText={"Day:"}
              onChange={handleChange}
              disabled={edit}
            />
            <FormInput
              type="number"
              name={"month"}
              min={1}
              max={12}
              value={user.month}
              labelText={"Month:"}
              onChange={handleChange}
              disabled={edit}
            />
            <FormInput
              type="number"
              name={"year"}
              min={1960}
              max={new Date().getFullYear()}
              value={user.year}
              labelText={"Year:"}
              onChange={handleChange}
              disabled={edit}
            />
          </div>
        </div>
        <div className="adjust-buttons">
          <CustomButton
            type="button"
            onClick={() => setEdit(!edit)}
            customClass={"edit-btn-green"}
            label={"Edit"}
          />
          <div className="save-cancel">
            <CustomButton
              customClass={edit && "edit-btn-green"}
              type="submit"
              label={"Save"}
            />
            <CustomButton type="button" label={"Cancel"} />
          </div>
        </div>
      </form>
    </>
  );
};

export default EditProfile;
