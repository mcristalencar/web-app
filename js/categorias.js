const CATEGORIAS = document.getElementById('tabela-categorias');
const MODAL_CONTEUDO =document.getElementById('modal-conteudo');

function abrirImagem(nome) {
    MODAL_CONTEUDO.innerHTML = `<img src="${nome}" width="100%">`
}

for(let id = 0; id <= 4; id++) {
    CATEGORIAS.innerHTML += `
        <tr>
            <td>${id}</td>
            <td>Nome ${id}</td>
            <td>Descrição ${id}</td>
            <td>
                <a onclick="abrirImagem('img/carro${id}.png')" href="#" data-bs-toggle="modal" data-bs-target="#modal-foto">
                    <img src="img/carro${id}.png" width="100px">
                </a>
            </td>
            <td>
                <button class="btn btn-warning btn-sm">Editar</buttob>
                <button class="btn btn-danger btn-sm">Excluir</buttob>
            </td>
        </tr>
    `;
}