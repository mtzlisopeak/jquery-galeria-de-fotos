$(document).ready(() => {
  $("header button").click( () => $("form").slideDown())

  $("#botao-cancelar").click( () => $("form").slideUp() )

  // segunda maneira
  $("form").on("submit", (e) => {
    e.preventDefault()
    const enderecoNovaImagem = $("#endereco-nova-imagem").val()
    let novoItem = $("<li style='display:none;'></li>")

    $(`<img src="${enderecoNovaImagem}" alt="">
        <div class="overlay-imagem-link">
          <a href="${enderecoNovaImagem}" target="_blank">Ver imagem em tamanho real</a>
        </div>`).appendTo(novoItem)
    $(novoItem).fadeIn(1000)
    $(novoItem).appendTo("ul")

    $("#endereco-nova-imagem").val("")

  })

})