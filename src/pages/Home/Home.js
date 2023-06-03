import React from 'react';

export default function Home() {



    return (



        <div className="container d-flex justify-content-center">
            <div className="card mt-5 p-5 custom-card-width">
                <div className="input-group mb-3">
                    <input placeholder="Escolha uma Receita" type="text" className="form-control" />
                    <div className="input-group-append">
                        <button className="btn btn-primary">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>
                <span className="text mb-4">02 Receitas</span>
                <div className="d-flex flex-row justify-content-between mb-3">
                    <div className="d-flex flex-column p-3">
                        <p className="mb-1">Receita N° 1 - 25/05/2023</p>
                        <small className="text-muted">Exemplo Receita 1.</small>
                    </div>
                    <div className="price pt-3 pl-3">
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between mx-1">
                    <div className="d-flex flex-column p-3">
                        <p className="mb-1">Receita N° 2 - 26/05/2023</p>
                        <small className="text-muted">Exemplo Receita 2.</small>
                    </div>
                    <div className="price pt-3 pl-3">
                    </div>
                </div>
            </div>
        </div>
    );
}
