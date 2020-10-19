import React from "react";
import "../styles/NewTargetGui.css";
export default function NewTargetGui({ currentLocation, setCurrentLocation }) {
    return (
        <>{currentLocation&&
            <div className="targetContainer">{currentLocation.NAME}</div>
        }
        </>
    );
}
