import React, { useState, useEffect } from "react";
import "../styles/Distance.css";
export default function Distance({ chosenLocation, currentLocation }) {
    const [distance, setDistance] = useState();

    function haversine_distance(mk1, mk2) {
        debugger
        var R = 3958.8; // Radius of the Earth in miles
        var rlat1 = mk1.lat * (Math.PI / 180); // Convert degrees to radians
        var rlat2 = mk2.location.lat * (Math.PI / 180); // Convert degrees to radians
        var difflat = rlat2 - rlat1; // Radian difference (latitudes)
        var difflon = (mk2.location.lng - mk1.lng) * (Math.PI / 180); // Radian difference (longitudes)

        var d =
            2 *
            R *
            Math.asin(
                Math.sqrt(
                    Math.sin(difflat / 2) * Math.sin(difflat / 2) +
                        Math.cos(rlat1) *
                            Math.cos(rlat2) *
                            Math.sin(difflon / 2) *
                            Math.sin(difflon / 2)
                )
            );
        return Math.round(d);
    }

    useEffect(() => {
        if (!!Object.keys(chosenLocation).length && !!Object.keys(currentLocation).length) {
            setDistance(haversine_distance(chosenLocation, currentLocation));
        }
    }, [chosenLocation, currentLocation]);
    return (
        <>
            <div className="distanceContainer">The distance is {distance}</div>
        </>
    );
}
