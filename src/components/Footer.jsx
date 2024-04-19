import React from 'react'
import "./Footer.css";
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3 d-flex flex-row justify-content-around" >
            <div>
                <b> All Rights Reserved <br></br> &copy; <br></br> 2024 Denny N J </b>
            </div>
            <div className="col-md-4 d-flex flex-column">
                <h5>Let's stay in touch</h5>
                <div className="footer-social-icons">
                    <a href="https://wa.me/919947487951" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
                    <a href="https://www.instagram.com/dennyneelamkavil?igsh=MWtkZGVtZmtmN2J3NQ==" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://github.com/dennyneelamkavil" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/dennynj/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>

    )
}

export default Footer