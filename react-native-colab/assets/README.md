
Contributors Forks Stargazers Issues Unlicense License LinkedIn


Logo
Best-README-Template
An awesome README template to jumpstart your projects!
Explore the docs »

View Demo · Report Bug · Request Feature

Table of Contents
About The Project
Product Name Screen Shot

There are many great README templates available on GitHub; however, I didn't find one that really suited my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need -- I think this is it.

Here's why:

Your time should be focused on creating something amazing. A project that solves a problem and helps others
You shouldn't be doing the same tasks over and over like creating a README from scratch
You should implement DRY principles to the rest of your life 😄
Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!

Use the BLANK_README.md to get started.

(back to top)

Built With
This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

Next
React
Vue
Angular
Svelte
Laravel
Bootstrap
JQuery
(back to top)

Getting Started
This is an example of how you may give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.

Prerequisites
This is an example of how to list things you need to use the software and how to install them.

npm
npm install npm@latest -g
Installation
Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services.

Get a free API Key at https://example.com
Clone the repo
git clone https://github.com/github_username/repo_name.git
Install NPM packages
npm install
Enter your API in config.js
const API_KEY = 'ENTER YOUR API';
Change git remote url to avoid accidental pushes to base project
git remote set-url origin github_username/repo_name
git remote -v # confirm the changes
(back to top)

Usage
Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

For more examples, please refer to the Documentation

(back to top)

Roadmap
 Add Changelog
 Add back to top links
 Add Additional Templates w/ Examples
 Add "components" document to easily copy & paste sections of the readme
 Multi-language Support
 Chinese
 Spanish
See the open issues for a full list of proposed features (and known issues).

(back to top)

Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
Top contributors:
contrib.rocks image
(back to top)

License
Distributed under the Unlicense License. See LICENSE.txt for more information.

(back to top)

Contact
Your Name - @your_twitter - email@example.com

Project Link: https://github.com/your_username/repo_name

(back to top)

Acknowledgments
Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

Choose an Open Source License
GitHub Emoji Cheat Sheet
Malven's Flexbox Cheatsheet
Malven's Grid Cheatsheet
Img Shields
GitHub Pages
Font Awesome
React Icons
(back to top)


11) Tipo de aplicación


📱 Mini Red Social de Perfiles
La app permite ver un contador en la pantalla de inicio y una lista de perfiles con imagen, nombre y descripción.

Pantallas
Home

Muestra un saludo.

Incluye el contador (Counter.js).

Botón para ir a la pantalla de Perfiles.

Perfiles

Lista de tarjetas (ProfileCard.js).

Botón "Ver más" que muestra alerta con el nombre del perfil.

Funcionalidad sorpresa (rama ajena)

Un botón extra en Home que abre Google en el navegador del dispositivo.

Funcionalidades por pantalla
Home: Contador con botones para sumar y restar, navegación a Perfiles.

Perfiles: Mostrar lista de usuarios con datos ficticios y fotos.

Funcionalidad sorpresa: Acción extra creada por un compañero en una rama aparte.

Aportes de cada integrante
A: Navegación general (react-navigation) y pantalla de inicio.

B: Pantalla de Perfiles y componentes reutilizables (ProfileCard).


13) Evaluacion cruzada

A: Me gustó trabajar con navegación. Me costó entender los conflictos de merge, pero aprendí a resolverlos, y aunque hubieron algunos errores pavos como olvidarse el auto save entonces cuando haciamos push habian cosas que no se subian creo que pudimos resolverlas correctamente y avanzar.

B: Me pareció muy buena la idea de utilizar el merge para trabajar. Creo que es algo que voy a empezar a utilizar más seguido. Tambien me gustó trabajar en React Native, ya que al usar este lenguaje en mi proyecto final me pareció bueno utilizarlo como prueba para implementarlo en el futuro.

14) Code Reviews realizados

A revisó 1 PR de B en la rama feature/perfil.

B revisó varios PR de A en las ramas:
feature/counter
feature/prueba-useState
feature/mejora-card