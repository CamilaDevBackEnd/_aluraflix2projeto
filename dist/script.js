var listaFilmesFavoritos = [];

    function adicionarFilme() {
      var filmeFavorito = document.getElementById('filme').value;

      if (filmeFavorito.endsWith('jpg') || filmeFavorito.endsWith('jpeg')) {
        document.getElementById('mensagemDeErro').innerHTML = '';
        listaFilmesFavoritos.push(filmeFavorito);
        limpaCampos();
        recarregarFilmes();
      } else {
        document.getElementById('mensagemDeErro').innerHTML = 'Endereço de imagem inválido, tente novamente';
        limpaCampos();
      }
    }

    function recarregarFilmes() {
      var elementoListaFilmes = document.getElementById('listaFilmes');
      elementoListaFilmes.innerHTML = '';

      for (var i = 0; i < listaFilmesFavoritos.length; i++) {
        elementoListaFilmes.innerHTML += `<a href="https://www.youtube.com/watch?v=${extrairNomeFilme(
          listaFilmesFavoritos[i]
        )}" target="_blank"><img src="${listaFilmesFavoritos[i]}"></a>`;
      }
    }

    function limpaCampos() {
      document.getElementById('filme').value = '';
    }

    function extrairNomeFilme(enderecoImagem) {
      var termosSeparados = enderecoImagem.split('/');
      var nomeFilme = termosSeparados[termosSeparados.length - 1].split('.')[0];
      return nomeFilme;
    }