const MemeInput = ({ inputs, setInputs, selectedTemplate }) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const params = new URLSearchParams({
            template_id: selectedTemplate.id,
            username: process.env.REACT_APP_IMG_FLIP,
            password: process.env.REACT_APP_IMG_FLIP_PASSWORD,
        });
        inputs.map((input, i) => params.append(`boxes[${i}][text]`, input));

        const options = {
            method: "POST",
        };
        try {
            const res = await fetch(
                `${process.env.REACT_APP_IMG_FLIP_API}/caption_image?${params}`,
                options
            );
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    const handleChange = ({ target: { value } }, index) =>
        setInputs(inputs.map((input, i) => (index === i ? value : input)));

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
