import { forwardRef } from "react";

const MemeCanvas = forwardRef(({ selectedTemplate: { url, name } }, ref) => {
    return (
        <div
            className="col-md-4"
            xs={2}
            md={4}
            lg={6}
            style={{ marginTop: "10px" }}
        >
            <h1>MEME GENERATOR</h1>
            <div>Step 1: Pick your meme</div>
            <div>Step 2: Write your text in the boxes provided</div>
            <div>Step 3: Click submit</div>
            <div>Step 4: Click save to download your meme</div>
            <img src={url} alt={name} ref={ref} className="img-fluid"></img>
        </div>
    );
});

export default MemeCanvas;
