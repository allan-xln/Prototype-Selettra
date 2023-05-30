export default function Reports() {
    return (
        <div
        style={{
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            alignContent: 'Center',
            justifyContent: 'center',
            minHeight: '38vh',
            height: '38vh',
            paddingLeft: '15%',
            paddingRight: '15%',
            
            }}>
            <h1 style={{paddingBottom: "30px"}}>Não consta nenhuma falha!</h1>
            <table class="table table-responsive table-bordered table-hover">
            <thead class="table-dark">
                <tr>
                <th scope="col"></th>
                <th scope="col">Tipo</th>
                <th scope="col">Descrição</th>
                <th scope="col">Comentário</th>
                <th scope="col">Solução</th>
                </tr>
            </thead>
                <tbody style={{opacity: "100%"}} class="table-light">
                <tr>
                <th scope="row">1</th>
                <td>ALERTA</td>
                <td>GRAVANDO MAPA</td>
                <td>OCORRE QUANDO É INICIADA A GRAVAÇÃO DE UM MAPA</td>
                <td>ALERTA INFORMATIVO</td>
                </tr>
            </tbody>
            </table>
        </div>

    
    )
}