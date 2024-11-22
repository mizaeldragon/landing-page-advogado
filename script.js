// pegando os valores de cada elemento
const btnFechar = document.getElementById("btn-fechar");
const menuMobile = document.getElementById("menu-mobile");
const btnOpen = document.getElementById("btn-open");
const menuLinks = document.querySelectorAll(".menu-mobile nav a");
const overlayMenu = document.querySelector(".overlay-menu");

// para fechar o menu quando eu clicar no boitao de fechar menu
btnFechar.addEventListener("click", function () {
  menuMobile.classList.remove("open");
  overlayMenu.classList.remove("show");
  btnOpen.classList.remove("hidden");
});

// para abrir o menu quando clicar no icone do menu
btnOpen.addEventListener("click", function () {
  menuMobile.classList.add("open");
  overlayMenu.classList.add("show");
  btnOpen.classList.add("hidden");
});

// para selecionar todos os links e fechar o menu quando eu clicar em qualquer link
menuLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    // Fecha o menu
    menuMobile.classList.remove("open");
    overlayMenu.classList.remove("show");
    btnOpen.classList.remove("hidden"); // Mostrar o botão ao fechar o menu

    // Pegando o ID da seção para rolar até ela
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      // Rola suavemente até a seção
      targetSection.scrollIntoView({
        behavior: "smooth",
      });

      // Previne o comportamento padrão do link
      event.preventDefault();
    }
  });

  overlayMenu.addEventListener("click", function () {
    menuMobile.classList.remove("open");
    overlayMenu.classList.remove("show"); // Esconde a sobreposição
    btnOpen.classList.remove("hidden");
  });
});
