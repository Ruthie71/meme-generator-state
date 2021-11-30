const MemeInput = ({ inputs, setInputs }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const handleChange = (event, index) => {
        const value = event.target.value || "";
        const newInputs = inputs.map((input, i) => {
            if (index === i) {
                return value;
            } else {
                return input;
            }
        });
        setInputs(newInputs);
    };

    return (
        <div className="col-md-3">
            <form onSubmit={handleSubmit}>
                {inputs.map((input, i) => (
                    <div className="form-group" key={i}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => handleChange(e, i)}
                        />
                    </div>
                ))}
                <input type="submit" className="btn btn-primary"></input>
            </form>
        </div>
    );
};

export default MemeInput;
