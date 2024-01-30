---
title: "Como instalar Alpine.js"
pubDate: 2024-01-29
description: "Breve introducción a Alpine.js, como instalarlo y el uso de su directiva x-data"
author: "Jerson Moreno"
image:
    url: "https://docs.astro.build/assets/full-logo-light.png"
    alt: "The full Astro logo."
tags: ["Alpine.js", "Javascript", "HTML"]
---

## Instalación

En esta serie voy a cubrir la base que conozco de Alpine.js

Alpine.js es una librería ligera de Javascript que nos permite agregar funcionalidad del lado del cliente de una forma muy fácil. La defino como un híbrido entre JQuery y Vue.

Nos permite manejar directivas, eventos, plugins y creación de componentes de una forma simple pero sin tener que instalar todo las dependencias que requiere utilizar un framework como Vue o React.

Tomando un ejemplo de su web oficial podemos crear un contador con algo tan simple como:

```html
<div x-data="{ count: 0 }">
    Increment
    <span x-text="count"></span>
</div>
```

Puedes instalar Alpine.js de varias formas:

## Utilizando un CDN

Agrega un script al final de tu documento HTML (antes de cerrar la etiqueta `</body>` con el siguiente código

`<script src="https://unpkg.com/alpinejs" defer></script>`

## Como un módulo

Puedes utilizar un manejador de dependencias como NPM, Yarn, etc para realizar la instalación de Alpine.js

Solo ubícate en tu proyecto, abre una terminal apuntando al directorio del mismo y ejecuta el siguiente comando:

```bash
# con NPM
npm install alpinejs

# con Yarn
yarn add alpinejs
```

Alpine.js puede utilizarse sobre cualquier etiqueta HTML y para inicializar solo es necesario agregar su directiva `x-data` la cual automáticamente convertirá ese elemento y sus hijos en un componente de Alpine.

Dentro de `x-data` vamos a trabajar con un objeto, el cual podrá contener propiedades y métodos como cualquier objeto de javascript

```html
<div x-data={hello: 'Hello World!'}>
    <span x-text="hello"></span>
</div>
```

Para imprimir los atributos dentro de nuestro HTML, Alpine utiliza dos directivas: `x-text` y `x-html` de las cuales hablaremos en mayor profundidad en próximas lecciones. Pero como podemos ver en el ejemplo de arriba, básicamente agregamos la directiva `x-text` a nuestra etiqueta HTML y la usamos como cualquier otro atributo en donde su valor será la propiedad declarada previamente en el atributo `x-data`

Si abrimos el navegador, esto mostrará en pantalla el texto <strong>Hello World!</strong>

Es importante destacar que dentro de la directiva `x-text` se esta ejecutando código javascript por lo tanto podemos agregar cualquier expresión javascript valida

```html
<span x-text="hello + 'new developers'"></span>
```

Esta expresión mostrará en pantalla el texto <strong>Hello World! new developers</strong>

```html
<div x-data={hello: 'Hello World!'}>
    <span x-text="2 + 2"></span>
</div>
```

Esto muestra en pantalla <strong>4</strong> ya que al ejecutarse javascript se estaría realizando la operación matemática.

Como podemos observar resulta muy simple inicializar Alpine.js y poner en funcionamiento sus directivas.
