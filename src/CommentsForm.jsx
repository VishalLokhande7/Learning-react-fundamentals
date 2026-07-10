import { useState } from "react";
import { useFormik } from "formik";
import "./CommentsForm.css";

const validate = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = "Username cannot be empty!";
    }

    if (!values.remarks) {
        errors.remarks = "Remarks cannot be empty!";
    }

    return errors;
};

export default function CommentsForm({ addNewComment }) {
    // let [formData, setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5,
    // });

    const formik = useFormik({
        initialValues: {
            username: '',
            remarks: '',
            rating: 5,
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            console.log(values);

            addNewComment(values);

            resetForm();
        },
    });

    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return {...currData, [event.target.name] : event.target.value};
    //     });
    // };

    // let handleSubmit = (event) => {
    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //         username: "",
    //         remarks: "",
    //         rating: 5,
    //     })
    // }

    return (
        <div className="comments-form">
            <h4>Give a Comment!</h4>
            <form action="" onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    placeholder="username"
                    type="text"
                    name="username"
                    id="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                {formik.errors.username ? <p style={{ color: "red" }} >{formik.errors.username}</p> : null}
                <br />
                <br />

                <label htmlFor="remarks">Remarks</label>
                <textarea
                    name="remarks"
                    id="remarks"
                    value={formik.values.remarks}
                    placeholder="add few remarks"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </textarea>

                {
                    formik.touched.remarks && formik.errors.remarks ? (
                        <div style={{ color: "red" }}>
                            {formik.errors.remarks}
                        </div>
                    ) : null
                }

                <br />
                <br />

                <label htmlFor="rating">Rating</label>
                <input
                    placeholder="rating"
                    type="number"
                    name="rating"
                    id="rating"
                    min={1}
                    max={5}
                    value={formik.values.rating}
                    onChange={formik.handleChange}
                />

                <br />
                <br />

                <button type="submit">Add Comment</button>
            </form>
        </div>
    )
}