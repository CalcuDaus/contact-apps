import React from "react";

function ContactItemImage({imageUrl}){
    return (
        <div className="contact-item-image">
            <img src={imageUrl} alt="tes" />
        </div>
    )
}

export default ContactItemImage;