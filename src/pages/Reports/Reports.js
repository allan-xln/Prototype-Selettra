import React from 'react';

export default function Home() {
    return (
        <div className="container d-flex justify-content-center">
            <div className="card mt-5 p-5 custom-card-width">
                <div className="input-group mb-3">
                </div>


                <div>
                    <h3>Falhas</h3>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Comentário</th>
                                <th scope="col">Solução</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>ALERTA</td>
                                <td>FALHA</td>
                                <td>OCORRE QUANDO É LOCALIZADA UMA FALHA NO SISTEMA</td>
                                <td>ALERTA INFORMATIVO</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
