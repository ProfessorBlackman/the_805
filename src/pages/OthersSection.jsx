import "./others-section.css";

export function OthersSection() {
    return (
        <div className="section others">
            <h1 id="others-head">WHAT OTHERS HAVE TO SAY</h1>
            <div className="reviews">
                <div className="review">
                    <p className="review-heading">FELT LIKE I ATE AFRICA</p>
                    <p className="review-para">One bite and I felt like I had eaten a portion of Africa off. The Chef
                        and
                        his team have outdone
                        themselves!</p>
                    <p className="reviewer">- Teddy, Entrepreneur</p>
                </div>
                <div className="review">
                    <p className="review-heading">LOVELY ENVIRONMENT</p>
                    <p className="review-para">The ambience was great - and the food even better! Simple recipes done
                        well, with top-notch ingredients. Will be back!</p>
                    <p className="reviewer">- Dani, Mother</p>
                </div>
                <div className="review">
                    <p className="review-heading">TRANSPORTED TO AFRICA</p>
                    <p className="review-para">Eating here made me miss Africa so much. What a treat! I will be bringing
                        my client meetings here. </p>
                    <p className="reviewer">- Carly, Entrepreneur</p>
                </div>
            </div>
        </div>
    )
}