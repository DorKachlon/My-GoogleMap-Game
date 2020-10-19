import React, { useState, useEffect } from "react";
import "./App.css";
import MapField from "./components/MapField";
import GameGui from "./components/GameGui";
import NewTargetGui from "./components/NewTargetGui";
import Distance from "./components/Distance";
import objPlaces from "./objectives.json";

function App() {
    const [places, setPlaces] = useState(objPlaces);
    const [currentLocation, setCurrentLocation] = useState({});
    const [chosenLocation, setChosenLocation] = useState({});

    useEffect(() => {
        const random = Math.floor(Math.random() * (1035 - 1) + 1);
        setCurrentLocation(places[random]);
    }, []);
    return (
        <>
            <MapField
                places={places}
                setPlaces={setPlaces}
                chosenLocation={chosenLocation}
                setChosenLocation={setChosenLocation}
                currentLocation={currentLocation}
            />
            <GameGui places={places} setPlaces={setPlaces} />
            <NewTargetGui
                currentLocation={currentLocation}
                setCurrentLocation={setCurrentLocation}
            />
            <Distance chosenLocation={chosenLocation} currentLocation={currentLocation} />
        </>
    );
}

export default App;
