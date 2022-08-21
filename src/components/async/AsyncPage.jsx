import { useState } from "react";
import { Link } from "react-router-dom";
import { Span } from "../../styles";

console.clear();

const timer = (style, time) => {
    setTimeout(() => {
        console.log("style: " + style + " time: " + time);
    })

    return time;
}

// use Callback style
console.log("====================callback style====================");
const callbackRun = () => {
    console.log("callback start runnig");

    const style = "callback";

    const time1 = timer(style, 1000);
    const time2 = timer(style, time1 * 2);
    timer(style, time2 * 2);

    console.log("callback end runnig");
}

callbackRun();

// use Promise style
console.log("====================promise style====================");
const promiseRun = () => {
    console.log("promise start runnig")

    const style = "promise";

    return new Promise((resolve) => {
        const time1 = timer(style, 1000);
        const time2 = timer(style, time1 * 2);
        timer(style, time2 * 2);

        resolve("promise end runnig");
    });
}
promiseRun().then((message) => console.log(message));

// use Async style
console.log("====================async style====================");
const asyncRun = async () => {
    console.log("start runnig");

    const style = "async start runnig";

    const time1 = await timer(style, 1000);
    const time2 = await timer(style, time1 * 2);
    await timer(style, time2 * 2);

    return "async end runnig";
}

asyncRun().then((message) => console.log(message));


console.log("이 코드는 위의 비동기 작업들이 안끝나도 실행됨");

const AsyncPage = () => {
    return (
        <Span>
            <button onClick={() => window.location.reload()}>새로고침</button>
            <Link to="/">Home</Link>
        </Span>
    );
}

export default AsyncPage;