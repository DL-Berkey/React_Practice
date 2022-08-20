import { Link, useParams } from "react-router-dom";
import { Span } from "../styles";
import ParameterForm from "./ParameterForm";

const ParameterPage = () => {
    const params = useParams();

    return (
        <Span>
            <p>당신이 입력한 파라미터: {params.value}</p>
            <ParameterForm />
            <Link to="/">Home</Link>
        </Span>
    );
}

export default ParameterPage;