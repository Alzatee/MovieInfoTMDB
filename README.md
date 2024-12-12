# MovieInfoTMDB
# DOCUMENTACIÓN:
Documentación [Doumentación de Agular](https://angular.dev/overview)


## Ejecutar información sobre las versiones Angular:
````sh
$ ng version
````

Información:
Angular CLI: 18.2.12
Node: 18.20.4
Package Manager: npm 10.8.2
OS: win32 x64

Angular: 18.2.13
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1802.12
@angular-devkit/build-angular   18.2.12
@angular-devkit/core            18.2.12
@angular-devkit/schematics      18.2.12
@angular/cli                    18.2.12
@schematics/angular             18.2.12
rxjs                            7.8.1
typescript                      5.5.4
zone.js                         0.14.10


## Instalación:
**Para compilar el proyecto se necesita tener en cuenta lo siguiente:**

1. Instalar Node: 18.20.4 [NodeJS Descarga](https://nodejs.org/en/)
2. Instalar Angular CLI en una termina nodejs o cmd [Angular CLI](https://www.npmjs.com/package/@angular/cli) version 18.2.12.
````sh
$ npm install -g @angular/cli
````
3. Instalar Visual Estudio Code [VSCode Descarga](https://code.visualstudio.com/) o su IDE de preferencia.
4. Descargar la carpeta del proyecto y abrirlo en Visual Studio code.
5. Ejecutar el siguiente comando para instalar las dependencias del package (Se creará una carpera "node_modules")
````sh
$ npm install
````


## Compilación:
1. Ejecutar el siguiente comando para compilar el proyecto:
````sh
$ ng serve
````
2. Abrir en el navegador el puerto `http://localhost:4200/`
También puede saltar este paso y ejecutar el siguiente comando para que se abra el navegador automáticamente:
````sh
$ ng serve --open
````
***El comando `ng serve` básico ejecutará por defecto el ambiente de desarrolo; puede compilar otros ambientes con los comandos a continuación***
### Ambientes locales (Comandos Compilación):
| AMBIENTE | COMANDO |
| ------ | ----- | ----- | ------ | ----- | ----- | ------ |
| DESARROLLO     | `ng serve --configuration dev`          |
| PRUEBAS        | `ng serve --configuration qa`           |
| PRODUCCIÓN     | `ng serve --configuration production`   |


## Transpilación (Build):
1. Ejecutar el siguiente comando para transpilar(Realizar el build) el proyecto:
````sh
$ ng build
````
***El comando `ng build` básico ejecutará por defecto el Build para el ambiente de producción; puede realizar el build a otros ambientes con los comandos a continuación***
### Ambientes locales (Comandos Build):
| AMBIENTE | COMANDO |
| ------ | ----- | ----- | ------ | ----- | ----- | ------ |
| DESARROLLO     | `ng build --configuration dev`          |
| PRUEBAS        | `ng build --configuration qa`           |
| PRODUCCIÓN     | `ng build --configuration production`   |


## Pruebas unitarias/cobertura:
1. Ejecutar el siguiente comando para compilar el apartado de pruebas unitarias
[Karma](https://karma-runner.github.io).
````sh
$ ng test --codeCoverage --watch 
````
o
````sh
$ ng test --codeCoverage
````


## Despliegues GitHub Pages:
1. Ejecutar el siguiente comando para realizar el deploy (esto generará un build y desplegará el proyecto en GitHub pages).
Tenga en cuenta cambiar la ruta a <base href="./"> en el index.html para su correcta estructuración en GitHub pages, antes de ejecutar el comando.
````sh
$ npm run deploy
````
Repo gh-pages: https://github.com/Alzatee/MovieInfoTMDB/tree/gh-pages
Page: https://alzatee.github.io/MovieInfoTMDB/

Consultar "homepage" en el archivo package.json.


## Alias
**Se crearon unos Alias/Paths en el archivo tsconfig.json**
Estos Alias nos permiten acceder en las importaciones a carpetas de interés mucho más directo, fácil y mantenible, Ejemplo:
`import { environment } from '@env/environment';`
`import { ... } from '@shared/...';`


## Dependencias:
- Sass: (preprocesador utilizado por defecto en el proyecto).
(Sintaxis SCSS: **Sass (SCSS) usa la misma sintaxis que el CSS normal con los cambios y ventajas especificados en la documentación**)
[Sass Documentación](https://sass-lang.com/)

- Bootstrap 5 (Bootstrap es un framework de código abierto que permite crear páginas web y aplicaciones móviles de forma rápida y sencilla).
[Bootstrap Documentación](https://getbootstrap.com/)

- SweetAlert2 (Se utiliza para la gestión de modales personalizadas para el proyecto).
[SweetAlert2 Documentación](https://sweetalert2.github.io/) 

[gh-pages](https://www.npmjs.com/package/gh-pages) Para gestionar el deploy a Github pages.


## Recursos y utilidades
-**Existe un archivo en shareds de util.service para codigo reutilizable.**
-Los colores definidos para la identidad del proyecto en: [assets/scss/_variables.scss]