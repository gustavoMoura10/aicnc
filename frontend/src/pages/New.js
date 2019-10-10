import React, { useState, useMemo } from 'react';
import './New.css'
import camera from '../assets/camera.svg';
import AxiosService from '../services/AxiosService';
import { appendFile } from 'fs';

export default function New(props) {
    const [spot, setSpot] = useState({})
    const preview = useMemo(() => {
        return spot.thumbnail ? URL.createObjectURL(spot.thumbnail) : null
    }, [spot.thumbnail])
    async function handleSubmit(event) {
        event.preventDefault()
        const _id = localStorage.getItem('_id')
        const formData = Object.keys(spot).reduce((formData, key) => {
            formData.append(key, spot[key]);
            return formData;
        }, new FormData());

        const response = await AxiosService.post('/spot', formData, {
            headers: { _id }
        })
        if(response.data){
            props.history.push('/dashboard')
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label id="thumbnail" style={{ backgroundImage: `url(${preview})` }}>
                    <input type="file" onChange={(event) => {
                        setSpot({
                            ...spot,
                            ['thumbnail']: event.target.files[0]
                        })
                    }} />
                    <img src={camera} />
                </label>
                <label htmlFor="company">EMPRESA *</label>
                <input
                    type="text"
                    id="company"
                    value={spot.company}
                    placeholder="Qual o nome da sua empresa?"
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
                    placeholder="Quais técnologias a empresa usa?"
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
                    placeholder="Qual o valor da locação?"
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