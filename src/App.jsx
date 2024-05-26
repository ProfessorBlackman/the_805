import './App.css'
import {HeaderSection} from "./pages/HeaderSection.jsx";
import {StorySection} from "./pages/StorySection.jsx";
import {FlavorsSection} from "./pages/FlavorsSection.jsx";
import {OthersSection} from "./pages/OthersSection.jsx";
import {ContactSection} from "./pages/ContactSection.jsx";

function App() {

    return (
        <div>
            <HeaderSection/>
            <StorySection/>
            <FlavorsSection/>
            <OthersSection/>
            <ContactSection/>
        </div>
    )
}

export default App
