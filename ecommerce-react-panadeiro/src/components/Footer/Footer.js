import React from "react";
import "./Footer.css"

const Footer = () => {
    return(
        <div className="container-fluid bg-dark">
            <footer className="text-lg-start">
                <section className="d-flex justify-content-between p-4 text-white">
                    <h6>© 2022 Copyright • Tomás Panadeiro - React JS - Ecommerce</h6>
                <div>
                    <a href="https://www.facebook.com/tomaspana/" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook-f fa-lg me-4"></i></a>
                    
                    <a href="https://www.instagram.com/tomaspanadeiro/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram fa-lg me-4"></i></a>
                    <a href="https://www.linkedin.com/in/tom%C3%A1s-panadeiro-78698422a/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin fa-lg me-4"></i></a>
                </div>
                </section>
            </footer>
        </div>
    )
}

export default Footer;