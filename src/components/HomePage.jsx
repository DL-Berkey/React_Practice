import ParameterForm from "./ParameterForm";
import QueryForm from"./QueryForm";
import ReducerButton from  "./ReducerButton";
import AsyncButton from "./ReducerButton";

import { Home } from "../styles";

const MainPage = () => {
    return (
        <Home>
            <ParameterForm />
            <QueryForm />
            <ReducerButton />
            <AsyncButton />
        </Home>
    );
}

export default MainPage;