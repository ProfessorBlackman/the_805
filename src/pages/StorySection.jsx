import "./story-section.css"

export function StorySection() {
    return (
        <div className="story section">
            <div className="lefty">
                <img className="img-1" id="fish" src="src/assets/img_11.jpg" alt="fish"/>
                <img className="img-1" id="food" src="src/assets/img_10.jpg" alt="food plate"/>
            </div>
            <div className="righty">
                <h3 id="right-heading">Our Story</h3>
                <p id="right-para">In 2001 Mr and Mrs James opened their first African restaurant at 805 Old Kent Road, London and the 805 Restaurants brand was born. Their mission was to present a new West African dining experience and be known as the best African Restaurant in London.
Almost 20 years on, we continue to serve authentic West African food, staying true to traditional recipes that are eaten across the region. Our dining experiences cater for dish-sharing pleasures, a party of many or one. All this in a modern environment that affords a pleasurable dining experience all-round.
</p>
                <button className="general-button" id="story-cta">Book Now</button>
            </div>
        </div>
    )
}