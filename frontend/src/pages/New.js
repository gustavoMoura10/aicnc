import React, { useState, useMemo } from 'react';
import './New.css'
import camera from '../assets/camera.svg';
import AxiosService from '../services/AxiosService';

export default function New(props) {
    const [spot, setSpot] = useState({})
    const preview = useMemo(() => {
        return spot.thumbnail ? `data:${spot.thumbnail.type};base64,${spot.thumbnail.data}` : null
    }, [spot.thumbnail])
    async function handleSubmit(event) {
        event.preventDefault()
        console.log(spot)
    }
    async function convertBase64(file) {
        const url = URL.createObjectURL(file);
        const response = await fetch(url);
        const blob = await response.clone().blob();
        const arrayBuffer = await response.clone().arrayBuffer();
        const base64 = btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));
        setSpot({
            ...spot,
            ['thumbnail']: {
                type: blob.type,
                data: base64
            }
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label id="thumbnail" style={{ backgroundImage: `url(${preview})` }}>
                    <input type="file" onChange={(event) => {
                        convertBase64(event.target.files[0])
                    }} />
                    <img src={camera} />
                </label>
                <label htmlFor="company">EMPRESA *</label>
                <input
                    type="text"
                    id="company"
                    value={spot.company}
                    placeholder="Qual o nome da sua empresa"
                    onChange={(event) => {
                        setSpot({
                            ...spot,
                            ['company']: event.target.value
                        })
                    }} />
                <label htmlFor="techs">TECNOLOGIAS (Separados por virgula ",")</label>
                <input
                    type="text"
                    id="techs"
                    value={spot.techs}
                    placeholder="Qual o nome da sua empresa"
                    onChange={(event) => {
                        setSpot({
                            ...spot,
                            ['techs']: event.target.value
                        })
                    }} />
                <label htmlFor="price">PREÇO (Caso vazio, será automaticamente GRATUITO)</label>
                <input
                    type="number"
                    id="price"
                    value={spot.price}
                    placeholder="Qual o nome da sua empresa"
                    onChange={(event) => {
                        setSpot({
                            ...spot,
                            ['price']: event.target.value
                        })
                    }} />
                <button type="submit" className="btn">Enviar</button>
            </form>
        </>
    )
}