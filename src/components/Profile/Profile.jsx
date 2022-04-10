import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { updateProfile } from "../../services/studentService";
import { CommonContext } from "../Home/Home";
import InputText from "../Shared/InputText";
import SelectInput from "../Shared/SelectInput";
import "./Profile.css";
export default function Profile(props) {
  const years = [];
  for (let i = 2000; i < 2023; i++) {
    years.push(i);
  }
  let { profile } = props;

  const { setIsLoading } = useContext(CommonContext);
  const [firstName, setFirstName] = useState(profile?.firstName);
  const [lastName, setLastName] = useState(profile?.lastName);
  const [mobile, setMobile] = useState(profile?.firstName);
  const [address, setAddress] = useState(profile?.firstName);
  const [sscYear, setSscYear] = useState(profile?.firstName);
  const [sscMarks, setSscMarks] = useState(profile?.firstName);
  const [hscYear, setHscYear] = useState(profile?.firstName);
  const [hscMarks, setHscMarks] = useState(profile?.firstName);
  const [graduationYear, setGraduationYear] = useState(profile?.firstName);
  const [graduationMarks, setGraduationMarks] = useState(profile?.firstName);
  const [postGraduationYear, setPostGraduationYear] = useState(
    profile?.firstName
  );
  const [postGraduationMarks, setPostGraduationMarks] = useState(
    profile?.firstName
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    profile = {
      firstName,
      lastName,
      mobile,
      address,
      sscMarks,
      sscYear,
      hscYear,
      hscMarks,
      graduationYear,
      graduationMarks,
      postGraduationYear,
      postGraduationMarks,
    };
    setIsLoading(true);
    updateProfile(profile)
      .then((res) => {
        toast.success("Profile updated successfully!!");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("profile update error = ", err);
        toast.error("Profile update fail. Plase try again!!");
        setIsLoading(false);
      });
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <InputText
            name="firstName"
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <InputText
            name="lastName"
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <InputText
            label="Email"
            name="email"
            value={props.email || ""}
            onChange={(e) => {}}
            disabled={true}
          />
          <div className="input-divider"></div>
          <InputText
            type="number"
            label="Mobile No."
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            className="form-control"
            rows={4}
          ></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <SelectInput
            label="SSC"
            name="ssc_year"
            value={sscYear}
            onChange={(e) => setSscYear(e.target.value)}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <InputText
            label="SSC Percentage/ CGPA"
            name="ssc_marks"
            value={sscMarks}
            onChange={(e) => setSscMarks(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-12">
          <SelectInput
            label="HSC"
            name="hsc_year"
            value={hscYear}
            onChange={(e) => setHscYear(e.target.value)}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <InputText
            label="HSC Percentage/ CGPA"
            name="hsc_marks"
            value={hscMarks}
            onChange={(e) => setHscMarks(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <SelectInput
            label="Graduation"
            name="graduation_year"
            value={graduationYear}
            onChange={(e) => setGraduationYear(e.target.value)}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <InputText
            label="Graduation Percentage/ CGPA"
            name="graduation_marks"
            value={graduationMarks}
            onChange={(e) => setGraduationMarks(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-12">
          <SelectInput
            label="Post Graduation"
            name="post_graduation_year"
            value={postGraduationYear}
            onChange={(e) => setPostGraduationYear(e.target.value)}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <InputText
            label="Post Graduation Percentage/ CGPA"
            name="post_graduation_marks"
            value={postGraduationMarks}
            onChange={(e) => setPostGraduationMarks(e.target.value)}
          />
        </div>
      </div>
      <div className="col-12">
        <input
          className="btn btn-success update_profille"
          type="submit"
          value={"Update Profile"}
        />
      </div>
    </form>
  );
}
