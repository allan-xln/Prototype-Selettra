export function RecipeCard() {
    return (
        <div id='RecipeCard' className="container-fluid ps-0 ms-3 mt-1 justify-content-left">
            <div id='CardWrapper'className="card mt-0 p-4">
                <div className="input-group mb-3">
                    <input placeholder="Escolha uma Receita" type="text" className="form-control" />
                    <div className="input-group-append">
                        <button id="SearchBtn" className="btn btn-primary">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>
                <div className="text ms-1 mb-3 justify-content-center">
                    <span>05 Receitas</span>
                    <button id="LoadBtn" className="btn btn-primary">
                            <span>CARREGAR</span>
                    </button>
                </div>
                <div className="d-flex flex-row justify-content-between mb-3">
                    <div className="d-flex flex-column p-3">
                        <p className="mb-1">Receita N° 1 - 25/05/2023</p>
                        <small className="text-muted">Lorem ipsum dolor sit amet.</small>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between mb-3">
                    <div className="d-flex flex-column p-3">
                        <p className="mb-1">Receita N° 2 - 26/05/2023</p>
                        <small className="text-muted">Lorem ipsum dolor sit amet.</small>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between mb-3">
                    <div className="d-flex flex-column p-3">
                        <p className="mb-1">Receita N° 2 - 26/05/2023</p>
                        <small className="text-muted">Lorem ipsum dolor sit amet.</small>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between mb-3">
                    <div className="d-flex flex-column p-3">
                        <p className="mb-1">Receita N° 2 - 26/05/2023</p>
                        <small className="text-muted">Lorem ipsum dolor sit amet.</small>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between mb-1">
                    <div className="d-flex flex-column p-3">
                        <p className="mb-1">Receita N° 2 - 26/05/2023</p>
                        <small className="text-muted">Lorem ipsum dolor sit amet.</small>
                    </div>
                </div>
                <span className="text-center mt-4   ">VER MAIS</span>
            </div>
        </div>
    );
}