import "./header_section.css";

export function HeaderSection() {
    return (
        <div className="section header-section">
            <div className="overlay">
                <div className="header-text">
                    <h3 id="title">805 Restaurant</h3>
                    <h1 id="taste">A TASTE OF AFRICA</h1>
                    <button className="general-button" id="header-cta">Dine With Us</button>
                </div>
            </div>
        </div>
    )
}