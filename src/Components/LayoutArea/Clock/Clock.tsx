import { useEffect, useState } from "react";
import "./Clock.css";

export function Clock(): JSX.Element {
    const [time,setTime] = useState<string>("");

    useEffect (()=>{
        setInterval(()=>{
            const time = new Date().toLocaleTimeString();
            setTime(time);
        },1000)
    })
    return (
        <div className="Clock">
			<span>{time}</span>
        </div>
    );
}
