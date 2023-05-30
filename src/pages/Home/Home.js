

export default function Home() {
    return (
            <div class="container d-flex justify-content-center">
        <div class="card mt-5 p-4">
            <div class="input-group mb-3">
                <input placeholder="Escolha uma Receita" type="text" class="form-control"></input>
                <div class="input-group-append"><button class="btn btn-primary"><i class="bi bi-search"></i></button></div>
            </div>
            <span class="text mb-4">02 Receitas</span>
            <div class="d-flex flex-row justify-content-between mb-3">
                <div class="d-flex flex-column p-3"><p class="mb-1">Receita N° 1 - 25/05/2023</p> <small class="text-muted">Lorem ipsum dolor sit amet.</small>
                </div>
                <div class="price pt-3 pl-3">
                    <span class="mb-2"></span>
                    <h5><span></span></h5>
                </div>
            </div>
            <div class="d-flex flex-row justify-content-between mx-1">
                <div class="d-flex flex-column p-3"><p class="mb-1">Receita N° 2 - 26/05/2023</p> <small class="text-muted">Lorem ipsum dolor sit amet.</small>
                </div>
                <div class="price pt-3 pl-3">
                    <span class="mb-2"></span>
                    <h5><span></span></h5>
                </div>
            </div>
        </div>	
    </div>
    )
}