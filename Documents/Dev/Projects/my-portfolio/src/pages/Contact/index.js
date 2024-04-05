import contact from "../../Photos/contact.png"
import './index.scss'

function Contact() {
    return(
        <div className="contact">
            <div className="contact-text">
                <h1>Let's work together !</h1>
                <p>Sentence or paragraph saying to contact blah blah love to hear about your project whatever</p>
                <div className="email">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="#8a66cc" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                    </svg>
                    <p>email@gmail.com</p>
                </div>
            </div>
            <div className="image">
                <img src={contact} alt="femme sur un ordinateur répondant à des courriels et à des appels"/>
            </div>
            
        </div>
    )
}

export default Contact