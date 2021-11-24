const MemeCanvas = ({ selectedTemplate: { url, name } }) => {
    return (
        <div className="col-md-4">
            <img src={url} alt={name} className="img-fluid"></img>
        </div>
    );
};

export default MemeCanvas;
