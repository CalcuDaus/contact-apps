import React from "react";

function ContactItemBody({name,tag}){
    return (
        <div className="contact-item-body">
            <h1 className="contact-item-title">{name}</h1>
            <p className="contact-item-username">@{tag}</p>
        </div>
    )
}

export default ContactItemBody;