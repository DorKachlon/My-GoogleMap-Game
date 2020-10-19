import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import "../styles/GameGui.css";
import objPlaces from "../objectives.json";

export default function GameGui({ places, setPlaces }) {
    const [city, setCity] = useState(true);
    const [settlement, setSettlement] = useState(true);
    const [moshav, setMoshav] = useState(true);
    const [kibbutz, setKibbutz] = useState(true);

    const handleChange = (event) => {
        switch (event.target.name) {
            case "city":
                {
                    setCity(event.target.checked);
                    if (event.target.checked) {
                        const citys = objPlaces.filter((obj) => obj.TYPE.includes("תושבים"));
                        setPlaces([...places, ...citys]);
                    } else {
                        const filtering = places.filter((obj) => !obj.TYPE.includes("תושבים"));
                        setPlaces(filtering);
                    }
                    break;
                }
            case "settlement":
                {
                    setSettlement(event.target.checked);
                    if (event.target.checked) {
                        const citys = objPlaces.filter((obj) => obj.TYPE.includes("ישובים"));
                        setPlaces([...places, ...citys]);
                    } else {
                        const filtering = places.filter((obj) => !obj.TYPE.includes("ישובים"));
                        setPlaces(filtering);
                    }
                    break;
                }
            case "moshav":
                {
                    setMoshav(event.target.checked);
                    if (event.target.checked) {
                        const citys = objPlaces.filter((obj) => obj.TYPE.includes("מושבים"));
                        setPlaces([...places, ...citys]);
                    } else {
                        const filtering = places.filter((obj) => !obj.TYPE.includes("מושבים"));
                        setPlaces(filtering);
                    }
                    break;
                }
            case "kibbutz":
                {
                    setKibbutz(event.target.checked);
                    if (event.target.checked) {
                        const citys = objPlaces.filter((obj) => obj.TYPE.includes("קיבוצים"));
                        setPlaces([...places, ...citys]);
                    } else {
                        const filtering = places.filter((obj) => !obj.TYPE.includes("קיבוצים"));
                        setPlaces(filtering);
                    }
                    break;
                }
            default:
                break;
        }
    };
    return (
        <div className="GuiContainer">
            <FormGroup columns>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={city}
                            onChange={handleChange}
                            name="city"
                            color="primary"
                        />
                    }
                    label="ערים"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={settlement}
                            onChange={handleChange}
                            name="settlement"
                            color="primary"
                        />
                    }
                    label="ישובים"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={moshav}
                            onChange={handleChange}
                            name="moshav"
                            color="primary"
                        />
                    }
                    label="מושבים"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={kibbutz}
                            onChange={handleChange}
                            name="kibbutz"
                            color="primary"
                        />
                    }
                    label="קיבוצים"
                />
            </FormGroup>
        </div>
    );
}
