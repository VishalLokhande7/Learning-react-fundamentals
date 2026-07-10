import { useState } from "react";

export default function Form() {
    // let [fullName, setFullName] = useState("");
    // let [userName, setUserName] = useState("");

    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: "",
    });

    // let handleNameChange = (event) => {
    //     setFullName(event.target.value);
    // }

    // let handleUserName = (event) => {
    //     setUserName(event.target.value);
    // }


    let handleInputChange = (event) => {
        // let fieldName = event.target.name;
        // let newValue = event.target.value;

        setFormData((currData) => {
            // currData[fieldName]  = newValue;
            return {
                ...currData,
                [event.target.name]: event.target.value,
            };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullName: "",
            userName: "",
            password: "",
        });
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="userName">FullName</label>
            <input
                type="text"
                placeholder="enter full name"
                value={formData.fullName}
                onChange={handleInputChange}
                id="userName"
                name="fullName"
            />

            <br />
            <br />

            <label htmlFor="username">UserName</label>
            <input
                type="text"
                placeholder="enter username"
                value={formData.userName}
                onChange={handleInputChange}
                id="username"
                name="userName"
            />

            <br />
            <br />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                placeholder="enter password"
                value={formData.password}
                onChange={handleInputChange}
                id="password"
                name="password"
            />

            <button>Submit</button>
        </form>
    );
}