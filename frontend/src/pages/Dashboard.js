import React, { useEffect, useState } from 'react';
import AxiosService from '../services/AxiosService';
import { Link } from 'react-router-dom';

export default function Dashboard(props) {
    const [spots, setSpots] = useState([]);
    useEffect(() => {
        (async () => {
            const _id = localStorage.getItem('_id');
            const response = await AxiosService.get('/dashboard', {
                headers: { _id }
            });
            setSpots(response.data);
        })()
    }, [])
    return (
        <>
            <ul className="spot-list">
                {
                    spots.map(spot => {

                        return (
                            <li key={spot._id}>
                                <header style={{ backgroundImage: `url(${spot.trumbnailImage})` }} />
                                <strong>{spot.company}</strong>
                                <span>{spot.price ? `R$${spot.price}` : `Gratuito`}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <Link to="/new">
                <button className="btn">Cadastrar Novo Spot</button>
            </Link>
        </>
    )
}