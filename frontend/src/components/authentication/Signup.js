import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = ({ handleAuthentication }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState(""); // State for gender
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const data = {
      firstName,
      lastName,
      username,
      email,
      password,
      phone,
      age,
      gender, // Include gender in the data object
    };

    const res = await axios.post("http://localhost:814/user/signup", data);
    if (res.data.status === 200) {
      handleAuthentication(true);
      navigate("/dashboard");
      localStorage.setItem("username", username);
    } else {
      alert("SignUp failed, please try again.");
    }
  };

  return (
    <div className="flex min-h-full w-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          action="#"
          method="POST"
          className="space-y-6"
          onSubmit={handleFormSubmit}
        >
          <div>
            <label
              style={{ color: "#d3d3d3" }}
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First Name
            </label>
            <div className="mt-2">
              <input
                style={{ padding: "10px" }}
                value={firstName}
                onChange={(event) => setfirstName(event.target.value)}
                id="fname"
                name="fname"
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              style={{ color: "#d3d3d3" }}
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last Name
            </label>
            <div className="mt-2">
              <input
                style={{ padding: "10px" }}
                value={lastName}
                onChange={(event) => setlastName(event.target.value)}
                id="lname"
                name="lname"
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              style={{ color: "#d3d3d3" }}
              htmlFor="age"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Age
            </label>
            <div className="mt-2">
              <input
                style={{ padding: "10px" }}
                value={age}
                onChange={(event) => setAge(event.target.value)}
                id="age"
                name="age"
                type="number"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              style={{ color: "#d3d3d3" }}
              htmlFor="gender"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Gender
            </label>
            <div className="mt-2">
              <select
                style={{ padding: "10px" }}
                value={gender}
                onChange={(event) => setGender(event.target.value)}
                id="gender"
                name="gender"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div>
            <label
              style={{ color: "#d3d3d3" }}
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                style={{ padding: "10px" }}
                value={username}
                onChange={(event) => setUserName(event.target.value)}
                id="uname"
                name="uname"
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              style={{ color: "#d3d3d3" }}
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email Address
            </label>
            <div className="mt-2">
              <input
                style={{ padding: "10px" }}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                id="email"
                name="email"
                type="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              style={{ color: "#d3d3d3" }}
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                style={{ padding: "10px" }}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                id="password"
                name="password"
                type="password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              style={{ color: "#d3d3d3" }}
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Mobile Number
            </label>
            <div className="mt-2">
              <input
                style={{ padding: "10px" }}
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                id="mobile"
                name="mobile"
                type="tel"
                pattern="[0-9]{10}" // Ensures 10-digit numbers only
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <input
              value={"SignUp"}
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            />
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
