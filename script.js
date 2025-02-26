const toggleTheme = () => {
  const html = document.documentElement;

  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/squirtle-de-cria.jpg");
    img.setAttribute("alt", "Squirtle de óculos");
  } else {
    img.setAttribute("src", "./assets/squirtle-fofo.jpg");
    img.setAttribute("alt", "Squirtle colhendo flores");
  }
};
