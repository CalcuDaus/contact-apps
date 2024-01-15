import React from "react";
import ContactItem from "./ContactItem";

function ContactList({contacts,onDelete}){
    return(
        <div className="contact-list">
           {
           contacts.map(con =><ContactItem key={con.id} id={con.id} onDelete={onDelete} {...con}/>)
           }
        </div>
    )
}

export default ContactList;