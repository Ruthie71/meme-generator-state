import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { useRef, useState } from "react";
import MemeSelector from "./components/MemeSelector";
import MemeCanvas from "./components/MemeCanvas";
import MemeInput from "./components/MemeInput";

const App = () => {
    const memeToShare = useRef();
    const [selectedTemplate, setSelectedTemplate] = useState({});
    const [inputs, setInputs] = useState([]);
    const shareMeme = async () => {
        const blob = await domtoimage.toBlob(memeToShare.current);
        saveAs(blob, `meme_${Date.now()}`);
    };

    console.log(memeToShare.current);
    return (
        <div
            style={{ backgroundColor: "hotpink", marginTop: "10px" }}
            className="container mt-5"
        >
            <div className="row" xs={2} md={4} lg={6}>
                <MemeSelector
                    setSelectedTemplate={setSelectedTemplate}
                    setInputs={setInputs}
                />
                <MemeCanvas
                    ref={memeToShare}
                    selectedTemplate={selectedTemplate}
                />
                <MemeInput
                    inputs={inputs}
                    setInputs={setInputs}
                    selectedTemplate={selectedTemplate}
                    setSelectedTemplate={setSelectedTemplate}
                    shareMeme={shareMeme}
                />
            </div>
        </div>
    );
};

export default App;
