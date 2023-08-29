    import React, { useEffect, useState } from "react";
    import { Link } from 'react-router-dom';
    import { FiArrowLeft } from 'react-icons/fi';
    import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
    import './styles.css';
    import logo from '../../assetes/logo.svg';
    import api from "../../services/api";


    
    const CreatePoint = () => {   
        useEffect(() => {
            api.get('items').then(response => {
                console.log(response);
            })
        }, [])
        return (
            <div id="page-create-point">
                <header>
                    <img src={logo} alt="Ecoleta" />
                    <Link to="/">
                        <FiArrowLeft />
                        Voltar para Home
                    </Link>
                </header>
                <form>
                    <h1>Cadastro do <br /> Ponto de coleta</h1>

                    <fieldset>
                        <legend>
                            <h2>Dados</h2>
                        </legend>
                        <div className="field">
                            <label htmlFor="name">Nome de entidade</label>
                            <input 
                                type="text"
                                name="name"
                                id="name"
                            />
                        </div>
                        <div className="field-group">
                            <div className="field">
                                <label htmlFor="email">E-mail</label>
                                <input 
                                    type="email"
                                    name="email"
                                    id="email"
                                />
                            </div>

                            <div className="field">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input 
                                type="text"
                                name="whatsapp"
                                id="whatsapp"
                            />
                        </div>
                        </div>
                    </fieldset>


                    <fieldset>
                        <legend>
                            <h2>Endereço</h2>
                            <span>Selecione o endereço no mapa</span>
                        </legend>
                        
                        <div className="field-group">
                            <div className="field">
                                <label htmlFor="uf">Estado (UF)</label>
                                <select name="uf" id="uf">
                                    <option value="0">Seleciona uma UF</option>
                                </select>
                            </div>
                            <div className="field">
                                <label htmlFor="city">cidade</label>
                                <select name="city" id="city">
                                    <option value="0">Seleciona uma Cidade</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>

                    <MapContainer center={[ -21.599746, -48.8370901 ]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[ -21.599746, -48.8370901 ]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                    
                    <fieldset>
                        <legend>
                            <h2>Ítens de Coleta</h2>
                            <span>Seleciona um ou mais ítens abaixo</span>
                        </legend>
                        <ul className="items-grid">
                            <li>
                                <img src="http://localhost:3333/uploads/oleo.svg" alt="test" />
                                <span>Óleo de Cozinha</span>
                            </li>
                            <li className="selected">
                                <img src="http://localhost:3333/uploads/oleo.svg" alt="test" />
                                <span>Óleo de Cozinha</span>
                            </li>
                            <li>
                                <img src="http://localhost:3333/uploads/oleo.svg" alt="test" />
                                <span>Óleo de Cozinha</span>
                            </li>
                            <li>
                                <img src="http://localhost:3333/uploads/oleo.svg" alt="test" />
                                <span>Óleo de Cozinha</span>
                            </li>
                            <li>
                                <img src="http://localhost:3333/uploads/oleo.svg" alt="test" />
                                <span>Óleo de Cozinha</span>
                            </li>
                            <li>
                                <img src="http://localhost:3333/uploads/oleo.svg" alt="test" />
                                <span>Óleo de Cozinha</span>
                            </li>
                        </ul>
                    </fieldset>

                    <button type="submit">
                        Cadastrar Ponto de Coleta
                    </button>
                </form>
            </div>
        );
    };

    export default CreatePoint;