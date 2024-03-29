import React, { useState} from "react";

const TrafficLight = () => {
    const [redLight, setRedLight] = useState()
    const [amberLight, setAmberLight] = useState("darkorange")
    const [greenLight, setGreenLight] = useState("darkgreen")

    function switchRed() {
        if(redLight == "darkred"){
            setRedLight("red")
            setAmberLight("darkorange")
            setGreenLight("darkgreen")
        } else {
            setRedLight("darkred")
        }
    }
    function switchAmber() {
        if(amberLight == "darkorange"){
            setAmberLight("orange")
            setRedLight("darkred")
            setGreenLight("darkgreen")
        } else {
            setAmberLight("darkorange")
        }
    }
    function switchGreen() {
        if(greenLight == "darkgreen"){
            setGreenLight("green")
            setRedLight("darkred")
            setAmberLight("darkorange")
        } else {
            setGreenLight("darkgreen")
        }
    }

    return(
        <div className="card">
        <div className="d-flex align-items-center flex-column mt-5">
            <button onClick={switchRed} className={redLight}></button>
            <button onClick={switchAmber} className={amberLight}></button>
            <button onClick={switchGreen} className={greenLight}></button>
        </div>
        </div>
    )
}

export default TrafficLight