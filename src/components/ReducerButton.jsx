import { useNavigate } from "react-router-dom";
import { Button, Span } from "../styles";

const AsyncButton = () => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        navigate("/reducerpage");
    }

    return (
        <Span>
            <Button onClick={handleClick}>ReducerPage</Button>
        </Span>
    );
}

export default AsyncButton;