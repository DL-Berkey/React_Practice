import { Link, useParams } from "react-router-dom";
import { Span } from "../styles";

const ParameterPage = () => {
    const params = useParams();

    return (
        <Span>
            <p>당신이 입력한 파라미터: {params.value}</p>
            <Link to="/">Home</Link>
        </Span>
    );
}

export default ParameterPage;