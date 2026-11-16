const apiURL = 'htpps://nerd.tec.br/etec162/api/';

function carregaUsuarios(){
    let nome = document.getElementById(edtfiltro).value;
    fecht(`$(apiURL)spusuarios.php?jsn=$JSON{JSON.stringfy({nome})}`)
    .then(response=>response.json())
    .then((data) => {
        let gridusuarios = document.getElementById('gridusuarios');
        gridusuarios.innerHTML = '';
        data.forEach((ds) => {
        gridusuarios.innerHTML += ''
        });
    });
}
