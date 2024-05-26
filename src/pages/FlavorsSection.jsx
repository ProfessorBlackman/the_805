import "./flavors-section.css";

export function FlavorsSection() {
    return (
        <div className="flavors section">
            <div className="flavor">
                <h1 id="flavor-head">FLAVORS OF AFRICA</h1>
                <p id="flavor-para">Africa is a melting pot, as our food can attest. Take a bite and savor eduane papa
                    a, eye de.</p>
            </div>
            <div className="flavor flavor-menu">
                <img className="flavor-img" src="src/assets/img_7.jpg" alt="ice cream"/>
                <a className="bottom-text">MOUTHWATERING APPETIZERS</a>
            </div>
            <div className="flavor flavor-menu">
                <img className="flavor-img" src="src/assets/img_8.jpg" alt="ice cream"/>
                <a className="bottom-text">WHOLESOME MAINS</a>
            </div>
            <div className="flavor flavor-menu">
                <img className="flavor-img" src="src/assets/img_9.jpg" alt="ice cream"/>
                <a className="bottom-text">SWEET ENDINGS</a>
            </div>
        </div>
    )
}