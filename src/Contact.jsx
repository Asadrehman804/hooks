import React, { useState } from "react";


const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone:"",
        email: "",
        msg: "",
    });
    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };


    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}.My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`); 

    };
    return (
        <>
            <div className="my-3">
                <h1 className="text-center">Contact Us </h1>
            </div> 
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form>
                            <form onSubmit={formSubmit}>
                                <div className="mb-3">
                                    <label for="text " className="form-label">Full Name</label>
                                    <input type="text" className="form-control"  name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name"  />
                                </div>
                                <div className="mb-3">
                                    <label for="tel" className="form-label">Phone Number</label>
                                    <input type="tel" className="form-control"  name="phone number" value={data.phone} onChange={InputEvent} placeholder="Mobile Number"  />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={data.email} onChange={InputEvent} placeholder="Enter Your Email" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="text" className="form-label">Message</label>
                                    <input type="text" name="message" value={data.msg} onChange={InputEvent} className="form-control"  />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary">Submit</button>
                            </form>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;