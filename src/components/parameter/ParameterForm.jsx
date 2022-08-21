import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Button, Span, Input } from "../../styles";

const ParameterButton = () => {
    const [ parameter, setParameter ] = useState("");
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        if (parameter === "") {
            return;
        }

        navigate(`/params/${parameter}`);

        setParameter("")
    }

    return (
        <Span>
            <Input placeholder="파라미터를 입력하세요!" value={parameter} onChange={((e) => setParameter(e.target.value))} />
            <Button onClick={handleClick}>Input Parameter</Button>
        </Span>
    );
}

export default ParameterButton;