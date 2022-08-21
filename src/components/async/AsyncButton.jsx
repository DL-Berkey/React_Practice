import { useNavigate } from "react-router-dom";
import { Button, Span } from "../../styles";

const ReducerPageButton = () => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        navigate("/asyncpage");
    }

    return (
        <Span>
            <Button onClick={handleClick}>AsyncPage</Button>
        </Span>
    );
}

export default ReducerPageButton;