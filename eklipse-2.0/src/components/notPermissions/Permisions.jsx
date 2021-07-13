import React from 'react'

import darhtVider from '../../assets/img/darht_vider.png';

import './permisions.css';

function Permisions() {
    return (
        <div className="contetn_not_permissions">
            <section className="not_permissions_image">
                <img src={darhtVider} alt=""  width="600" loading="lazy" />
            </section>
            <section className="not_permissions_message">
                <h2 className="not_permissions_message--title">
                    ALTO AHI! NO TIENES EL PODER CONTIGO 💀 
                </h2>
                <p className="not_permissions_message--message">
                    No tienes los permisos suficientes para acceder a esta pagina, consulta
                    con tu lider o el encargado. 🔐
                </p>
            </section>
        </div>
    )
}

export default Permisions;
