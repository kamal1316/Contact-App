import React from "react";
import { Link } from "react-router-dom";

const ContactDelete = (props) => {
    const { id, name, email } = props.location.state.contact;
    console.log(props);
    return (
        <div className="main">
            <div className="ui card">
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="Description">{email}</div>
                </div>
            </div>
            <div className="ui div">
                <div className="ui header">
                    Are you sure want to delete this contact?
                </div>
                <Link to="/">
                    <button
                        className="ui button red"
                        onClick={() => props.location.clickHandler(id)}
                    >
                        Yes
                    </button>
                    <button className="ui button">No</button>
                </Link>
            </div>
        </div>
    );
};

export default ContactDelete;
