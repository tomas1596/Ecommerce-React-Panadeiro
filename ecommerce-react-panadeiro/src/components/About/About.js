import './About.css'

import WOW from 'wowjs';
import { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        new WOW.WOW({
        live: false
        }).init();
    }, [])
    return (
        <div>
            <div className="text-white d-flex flex-column ">
                <h1 className="mb-3 fw-bold wow bounceIn" data-wow-delay="0.2s">Hola, soy Tomás Panadeiro 👋</h1>
                <h2 className="mb-4 wow bounceIn" data-wow-delay="0.2s">Este es mi proyecto final para el curso de React</h2>
                <h2 className="wow fadeIn" data-wow-delay="1s"> Estoy estudiando Desarrollador Full Stack </h2>
                <ul className="mt-3">
                    <li className="d-flex justify-content-center"><h5 className="wow fadeIn" data-wow-delay="3s">Web Developer</h5> <p className="wow fadeIn" data-wow-delay="4s">✅</p> </li>
                    <li className="d-flex justify-content-center"><h5 className="wow fadeIn" data-wow-delay="3s">Javascript</h5><p className="wow fadeIn" data-wow-delay="5s">✅</p></li>
                    <li className="d-flex justify-content-center"><h5 className="wow fadeIn" data-wow-delay="3s">React</h5><p className="wow fadeIn" data-wow-delay="6s">❓(En proceso)</p></li>
                    <li className="d-flex justify-content-center"><h5 className="wow fadeIn" data-wow-delay="3s">Backend</h5><p className="wow fadeIn" data-wow-delay="7s">🔜  (No empezado)</p></li>
                </ul>
                    <div className="d-flex justify-content-center mt-2 mb-2 wow fadeIn" data-wow-delay="7.5s">
                        <img src="https://img.icons8.com/emoji/48/undefined/fire.png" width="30px" alt="Foto"/><h5> - ¡¡Mirá mis otros proyectos!! - </h5> <img src="https://img.icons8.com/emoji/48/undefined/fire.png" width="30px" alt="Foto"/>
                    </div>

                <div>
                    <div className='d-flex flex-column justify-content-center align-items-center mt-2 wow fadeIn' data-wow-delay="8.5s">
                    <a href="https://tomas1596.github.io/ProyectoFinal-DW/" rel="noopener noreferrer" target="_blank"> <h5 className='mb-3'>• Web developer (Imagine Dragons - Music)</h5> </a>
                        <img src="https://i.ibb.co/1JHD0mC/DWPF.gif" width="600px" alt="Gif" />
                    </div>
                    
                    <div className='d-flex flex-column justify-content-center align-items-center mt-2 wow fadeIn' data-wow-delay="8.5s">
                        <a href="https://tomas1596.github.io/ProyectoFinal-JS/" rel="noopener noreferrer" target="_blank"><h5 className='mb-3'>• Javascript (Animeflix - Netflix Clone)</h5> </a>
                    <img src="https://i.ibb.co/TmWdZwY/JSPF-1.gif" width="600px"alt="Gif"/>
                    </div>
                </div>

                    <div className="mt-3 bg-dark">
                        <h3>Contacto</h3>
                        <div className="mt-2 mb-2">
                            <a href="https://www.facebook.com/tomaspana/" rel="noopener noreferrer" target="_blank" className="pe-4"><img  src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="socialMedia" /></a>
                            <a href="https://www.linkedin.com/in/tom%C3%A1s-panadeiro-78698422a/" rel="noopener noreferrer" target="_blank" className="pe-4"><img  src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="socialMedia" /></a>
                            <a href="https://www.instagram.com/tomaspanadeiro" rel="noopener noreferrer" target="_blank"><img  src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="socialMedia" /></a>
                        </div>
                    </div>
                </div>
    </div>
    )
}

export default About;