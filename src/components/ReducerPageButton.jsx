import { useNavigate } from "react-router-dom";
import { Button, Span, Input } from "../styles";

const ReducerPageButton = () => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        navigate("/reducerpage");
    }

    return (
        <Span>
            <Button onClick={handleClick}>Input Parameter</Button>
        </Span>
    );
}

export default ReducerPageButton;