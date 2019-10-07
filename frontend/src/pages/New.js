import React, { useState } from 'react';

export default function New(props) {
    const [spot, setSpot] = useState({})
    async function handleSubmit() {

    }
    return (
        <>
            <form onSubmit={handleSubmit} method="post">
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
            </form>
        </>
    )
}