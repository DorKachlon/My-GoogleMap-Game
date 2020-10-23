import React, { useState, useEffect } from "react";
import "./App.css";
import MapField from "./components/MapField";
import CheckboxesGui from "./components/CheckboxesGui";
import NewTargetGui from "./components/NewTargetGui";
import Distance from "./components/Distance";
import objPlaces from "./objectives.json";

function App() {
    const [places, setPlaces] = useState(objPlaces);
    const [currentLocation, setCurrentLocation] = useState();
    const [chosenLocation, setChosenLocation] = useState({});
    const [distance, setDistance] = useState();
    const [darkMode, setDarkMode] = useState(true);

    return (
        <>
            <MapField
                places={places}
                setPlaces={setPlaces}
                chosenLocation={chosenLocation}
                setChosenLocation={setChosenLocation}
                currentLocation={currentLocation}
                darkMode={darkMode}
            />
            <CheckboxesGui
                places={places}
                setPlaces={setPlaces}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <NewTargetGui
                places={places}
                currentLocation={currentLocation}
                setCurrentLocation={setCurrentLocation}
                setChosenLocation={setChosenLocation}
                setDistance={setDistance}
            />
            <Distance
                chosenLocation={chosenLocation}
                currentLocation={currentLocation}
                distance={distance}
                setDistance={setDistance}
            />
        </>
    );
}

export default App;
