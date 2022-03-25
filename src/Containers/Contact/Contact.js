import React, { useState } from 'react'
import SectionDivider from "../../components/SectionDivider/SectionDivider"
import loading from "../../img/loading2_nobg.gif"
import "./Contact.css"

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [formData, setFormData] = useState({name: "", email: "", message: ""})

    const submitEmail = (e) => {
        e.preventDefault()

        setIsLoading(true)
        window.emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, {
            from_name: formData.name,
            to_name: "Darien",
            from_email: formData.email,
            message: formData.message
        }).then(res => {
            setIsLoading(false)
            console.log('Email successfully sent!')
        }).catch(err => {
            setError(err)
            console.error('Oh well, you failed. Here some thoughts on the error that occured:', err)
        })
        
        setFormData({name: "", email: "", message: ""})
    }

    const handleInput = (e) => {
        const { name, value } = e.target //Retrieve the name of the input using the method, and the value of the input

        setFormData({ ...formData, [name]: value })
    }

    return (
        <>
            {    
                isLoading
                ?
                <div className="loading">
                    <img alt="loading" src={loading}/>
                </div>
                :
                error
                ?
                <div className="error">
                    { error }
                </div>
                :
                <form id="contact_section" onSubmit={submitEmail}>
                    <div className="contact_section_header"> Have any questions? Chat with me!</div>        
                    
                    <div className="contact_input">
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleInput} placeholder="Your name" required/>
                    </div>

                    <div className="contact_input">
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInput} placeholder="Your email" required/>
                    </div>

                    <div className="contact_textarea">
                        <textarea id="message" name="message" value={formData.message} onChange={handleInput} placeholder="Your message" rows="6" required/>
                    </div>
                    
                    <div className="send_message_button_wrapper">
                        <button className="send_message_button">Send Message</button>
                    </div>
                    
                    <SectionDivider addMargin={true}/>
                </form>
            }
        </>
    )
}
