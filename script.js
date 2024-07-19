$(document).ready(() => {
  $("header button").click( () => $("form").slideDown())

  $("#botao-cancelar").click( () => $("form").slideUp() )

  // segunda maneira
  $("form").on("submit", (e) => {
    e.preventDefault()
    const enderecoNovaImagem = $("#endereco-nova-imagem").val()

    $(`<li style='display: none;'>
        <img src="${enderecoNovaImagem}" alt="">
        <div class="overlay-imagem-link">
          <a href="${enderecoNovaImagem}" target="_blank">Ver imagem em tamanho real</a>
        </div>
      </li>`).appendTo("ul").fadeIn()

    $("#endereco-nova-imagem").val("")
  })

})