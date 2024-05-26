import "./contact-section.css";

export function ContactSection() {
    return (
        <div className="contact section">
            <div className="left-part">
                <img id="imge" src="src/assets/img_5.jpg" alt="fish"/>
            </div>
            <div className="right-part">
                <h3 id="right-head">SEE YOU SOON</h3>
                <div id="right-bod">
                    <p id="right-title">PHONE NUMBER</p>
                    <p id="right-body">+233 201 805 805</p>
                    <p id="right-title">EMAIL ADDRESS</p>
                    <p id="right-body">the805restaurant@food.com</p>
                    <p id="right-title">ADDRESS</p>
                    <p id="right-body">Accra</p>
                    <p id="right-body">3 jungle Ave</p>
                    <p id="right-body">Off Volta Street</p>
                    <p id="right-body">Airport Residential Area</p>
                </div>
            </div>
        </div>
    )
}