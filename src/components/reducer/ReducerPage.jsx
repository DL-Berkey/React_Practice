import { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { Span, Input } from "../../styles"

const initialState = {
    result: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "addition":
            return {result: action.payload.num1 + action.payload.num2};
            break;
        case "subtraction":
            return {result: action.payload.num1 - action.payload.num2};
            break;
    }
}

const ReducerPage = () => {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const [ num1, setNum1 ] = useState(0);
    const [ num2, setNum2 ] = useState(0);
    const [ operator, setOperator ] = useState("addition");

    const handleClick = () => {
        switch (operator) {
            case "addition":
                dispatch({type: operator, payload: {num1, num2}});
                break;
            case "subtraction":
                dispatch({type: operator, payload: {num1, num2}});
                break;
        }
    }

    const changeNum = (name, value) => {
        let num = value;

        if (value === "") {
            num = 0;
        }

        switch(name) {
            case "num1":
                setNum1(parseInt(num));
                break;
            case "num2":
                setNum2(parseInt(num));
                break
        }
    }

    return (
        <Span>
            <Input type="text" value={num1} onChange={(e) => changeNum("num1", e.target.value)} />
            <Input type="text" value={num2} onChange={(e) => changeNum("num2", e.target.value)} />
            <select onChange={(e) => setOperator(e.target.value)} value={operator}>
                <option value="addition">더하기</option>
                <option value="subtraction">빼기</option>
            </select>
            <button onClick={handleClick}>계산</button>
            <p>{state.result}</p>
            <Link to="/">Home</Link>
        </Span>
        
    );
}

export default ReducerPage;