export default function History() {
    return (
        <div
        style={{
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            alignContent: 'Center',
            justifyContent: 'center',
            height: '38vh',
            paddingLeft: '15%',
            paddingRight: '15%',
            
            }}>
            <h1 style={{paddingBottom: "30px"}}>Histórico:</h1>
            <table class="table table-responsive table-bordered table-hover">
            <thead class="table-dark">
                <tr>
                <th scope="col">Data</th>
                <th scope="col">Horário</th>
                <th scope="col">Mensagem</th>
                </tr>
            </thead>
                <tbody style={{opacity: "100%"}} class="table-light">
                <tr>
                <td>ALERTA</td>
                <td>GRAVANDO MAPA</td>
                <td>OCORRE QUANDO É INICIADA A GRAVAÇÃO DE UM MAPA</td>
                </tr>
            </tbody>
            </table>
        </div>

    
    )
}