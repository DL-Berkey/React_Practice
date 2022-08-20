import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Button, Span, Input } from "../styles";

const ParameterButton = () => {
    const [ parameter, setParameter ] = useState("");
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        
        navigate(`/${parameter}`);
    }

    return (
        <Span>
            <Input value={parameter} onChange={((e) => setParameter(e.target.value))} />
            <Button onClick={handleClick}>Setting Parameter</Button>
        </Span>
    );
}

export default ParameterButton;