import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { MdOutlineError } from "react-icons/md";
import './enquire.scss';
import instance from '../../apis/axios';


const EnquireRegister = () => {

    function setFocus(on) {
        var element = document.activeElement;
        var $ = window.jQuery;
        if (on) {
            setTimeout(function () {
                element.parentNode.classList.add("focus");
            });
        } else {
            let box = document.querySelector(".input-box");
            box.classList.remove("focus");
            $("input").each(function () {
                var $input = $(this);
                var $parent = $input.closest(".input-box");
                if ($input.val()) $parent.addClass("focus");
                else $parent.removeClass("focus");
            });
        };
    };


    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameValidate, setNameValidate] = useState();
    const [numbervalidate, setNumbervalidate] = useState();
    const [emailValidate, setEmailValidate] = useState();
    const [messageValidate, setMessageValidate] = useState();

    const onSubmit = async (e) => {
        e.preventDefault();
        const emailformate = /^\w+([-]?\w+)*@\w+(.-]?\w+)*(\.\w{2,3})+$/;
        let count = 0;
        if (name === "") {
            count = +1;
            setNameValidate(<MdOutlineError className="text-danger" />);
        } else if (number.length <= 0) {
            count = +1;
            setNumbervalidate(<MdOutlineError className="text-danger" />);
        } else if (number.length !== 10) {
            count = +1;
            setNumbervalidate("Type your 10 digit number corectly");
        } else if (email === "") {
            count = +1;
            setEmailValidate(<MdOutlineError className="text-danger" />);
        } else if (!emailformate.test(email)) {
            count = +1;
            setEmailValidate("Type your email corectly");
        } else if (message === "") {
            count = +1;
            setMessageValidate(<MdOutlineError className="text-danger" />);
        } else if (count === 0) {
            await instance.post("enquiry/message", { name, email, number, message });
            notify();
            setName("");
            setNumber("");
            setEmail("");
            setMessage("");
            setNameValidate("");
            setNumbervalidate("");
            setEmailValidate("");
            setMessageValidate("");

        }
    };

    const notify = async () => {
        toast("Thanks, we will contact you soon!");
    };

    return (
        <div className='col-md-5  home-contact-form  mt-2 '>
            <form className=' bg-dark rounded p-3 ' onSubmit={onSubmit}>
                <h3 className='no-wrap text-light text-center'>Request a Call Back</h3>
                <div className="mb-4 mt-4 ">
                    <div className="input-box">
                        <label className="input-label">Enter your full name</label>
                        <input
                            type="text"
                            className="input-1 "
                            onFocus={() => setFocus(true)}
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <p className="ms-3 p-0 text ">{nameValidate}</p>
                    </div>
                </div>

                <div className="mb-4 mt-2 ">
                    <div className="input-box">
                        <label className="input-label">
                            Enter your contact number
                        </label>
                        <input
                            type="number"
                            className="input-1 "
                            onFocus={() => setFocus(true)}
                            value={number}
                            onChange={(e) => {
                                setNumber(e.target.value);
                            }}
                        />
                        <p className="ms-2 p-0 text ">{numbervalidate}</p>
                    </div>
                </div>
                <div className="mb-4 mt-2">
                    <div className="input-box">
                        <label className="input-label">
                            Enter your email@gmail.com
                        </label>
                        <input
                            type="text"
                            className="input-1"
                            onFocus={() => setFocus(true)}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <p className="ms-2 p-0 text ">{emailValidate}</p>
                    </div>
                </div>
                <div className="mb-2 mt-2">
                    <div className="input-box">
                        <label className="input-label">
                            Enter your message for our team
                        </label>
                        <input
                            type="text"
                            className="input-1"
                            onFocus={() => setFocus(true)}
                            // onBlur={() => setFocus(false)}
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                        />
                        <p className="ms-2 p-0 text">{messageValidate}</p>
                    </div>
                </div>

                <div className="d-grid mt-2">
                    <button type="submit" className="rounded btn btn-danger p-1 btn-lg mt-3">
                        <h6 className=" mt-2">SEND MESSAGE</h6>
                    </button>
                    <ToastContainer />

                </div>

            </form>
        </div>
    )
}

export default EnquireRegister