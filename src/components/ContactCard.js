import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <div className="content">
                <Link
                    to={{
                        pathname: `/contact/${id}`,
                        state: { contact: props.contact },
                    }}
                >
                    <div className="header">
                        {name}
                        <span>{" : " + email}</span>
                    </div>
                </Link>
            </div>
            <Link
                to={{
                    pathname: `/contact/delete/${id}`,
                    state: {
                        contact: props.contact,
                    },
                    clickHandler: props.clickHandler,
                }}
            >
                <i
                    className="trash right floated icon"
                    style={{ color: "red" }}
                ></i>
            </Link>
            <Link
                to={{
                    pathname: `/edit`,
                    state: { contact: props.contact },
                }}
            >
                <i
                    className="edit right floated icon"
                    style={{ color: "blue" }}
                ></i>
            </Link>
        </div>
    );
};

export default ContactCard;
