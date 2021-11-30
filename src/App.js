import { useState } from "react";
import MemeSelector from "./components/MemeSelector";
import MemeCanvas from "./components/MemeCanvas";
import MemeInput from "./components/MemeInput";

const App = () => {
    const [selectedTemplate, setSelectedTemplate] = useState({});
    const [inputs, setInputs] = useState([]);

    return (
        <div className="container mt-5">
            <div className="row">
                <MemeSelector
                    setSelectedTemplate={setSelectedTemplate}
                    setInputs={setInputs}
                />
                <MemeCanvas selectedTemplate={selectedTemplate} />
                <MemeInput
                    inputs={inputs}
                    setInputs={setInputs}
                    selectedTemplate={selectedTemplate}
                />
            </div>
        </div>
    );
};

export default App;
