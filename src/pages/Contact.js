export default function Contact() {
    return (
        <div className="contact__container">
            <h2>Contact</h2>
            <div className="contact__information">
                <div className="contact__left__side">
                    <h2>Getting in touch is easy!</h2>
                    <p>Find us here!</p>
                    <p>globalelectronics@gmail.com</p>
                </div>
                <div className="contact__right__side">
                    <input type="text" placeholder="Enter your name"/>
                    <input type="email" placeholder="Enter your email"/>
                    <textarea cols="30" rows="10"></textarea>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24384.20049552865!2d44.45723395!3d40.18625569999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shy!2sam!4v1688218200213!5m2!1shy!2sam" width="100%" height="700" style={{border : 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}