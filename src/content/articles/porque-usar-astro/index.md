---
title: "¿Porqué usar Astro para hacer mi perfil web?"
pubDate: 2024-01-30
description: "Cuando me inicié en el mundo de la programación una de las primeras cosas que tuve claro debía hacer era tener mi propio perfil web. En aquel entonces (año 2014 - lo sé, soy viejo xD) comencé a explorar las alternativas que tenía disponible. No eran muchas... Básicamente hacer un blog estático con HTML, CSS y Javascript (JQuery) o usar WordPress"
author: "Astro Learner"
image:
    url: "https://docs.astro.build/assets/full-logo-light.png"
    alt: "The full Astro logo."
tags: ["astro", "blogging", "learning in public"]
---

![Astro y Tailwind](./astro-tailwind-web.jpg)

Cuando me inicié en el mundo de la programación una de las primeras cosas que tuve claro debía hacer era tener mi propio perfil web. En aquel entonces (año 2014 - lo sé, soy viejo 😅) comencé a explorar las alternativas que tenía disponible. No eran muchas... Básicamente hacer un blog estático con HTML, CSS y Javascript (JQuery) o usar WordPress

Como soy desarrollador PHP de origen mi opción clara fue usar WordPress y lo usé para crear mi primer perfil web. Sin embargo, al tener poca experiencia como desarrollador y poco que mostrar me pareció una tarea muy grande mantener un site hecho en WordPress para solo mostrar quien era yo, entonces opté por hacer una web estática simple con la consecuencia de tener que prescindir del dinamismo que una web hecha con PHP/WordPress me ofrecía, aun así, me decidí por esta opción

Tiempo después, al aventurarme con Vue/Nuxt creé una versión de mi perfil que utilizaba estas dos tecnologías (me sirvió para probar y practicar) pero también lo consideré mucha herramienta solo para mostrar quien era yo...

Una vez más, regresé al tradicional sitio estático hecho con HTML/CSS/Javascript (la vieja confiable 😁)

![Mi viejo perfil web](./old-profile.jpg)

Aún puedes mirarlo <a href="https://jersonmr.github.io" target="_blank">acá</a> si lo quieres curiosear un poco. Este perfil está bien y es el que me ha acompañado en los últimos años sin embargo se queda corto en cuanto a funcionalidades. Todo esto lleva a la pregunta relevante en este post:

## ¿Porqué usar Astro y Tailwindcss?

Astro como su slogan dice es "The web framework for content-driven websites - El framework web para sitios web que manejen contenido" me resultó la opción natural para desarrollar el que espero sea mi perfil web por muchos años más...

Las ventajas que para mi destacan es lo ligero y escalable que resulta ser. Puedes iniciar creando un sitios estáticos y transformarlo en gestor de contenido poderoso que me permite (como es este el caso) crear artículos utilizando markdown (lo incorpora de forma nativa) e incluso si es necesario puedo conectarlo a una API para obtener información de terceros

Pero una de las características que mas me emocionó utilizar es crear componentes web que puedo reutilizar. Puedo crearlos usando los archivos `.astro` o puedo instalar plugins adicionales y usar frameworks como React, Vue o Svelte y crear componentes con la sintaxis respectiva

Otra característica a destacar es que Astro no compila javascript, esto lo hace más ligero en comparación a frameworks como Next o Nuxt, no digo que usar estos frameworks esté mal pero ciertamente si necesitas crear algo que no requiera toda la estructura de un framework javascript entonces Astro es una opción ideal

¿Entonces, no puedo usar javascript con Astro? Claro que si, como dije anteriormente puedes incluso agregar frameworks pero Astro solo cargará el javascript que hayas agregado puntualmente

Esto hace que el nivel de performance que posea un sitio web hecho con Astro sea enorme. Abajo pueden ver una métrica de lighthouse de mi perfil hecho en Astro y mi antiguo perfil

![Comparativa Lighthouse](./lighthouse-web.jpg)

Por otra parte, decidí utilizar <strong>Tailwindcss</strong> para manejar los estilos de mi web ya que como dice su slogan: "Rapidly build modern websites without ever leaving your HTML" es muy fácil si conoces CSS nativo implementarlo ya que se trata básicamente de ir agregando propiedades CSS como clases en tus etiquetas HTML

Además, Tailwind es magnífico para crear componentes web y reutilizarlos ya que agregas las clases CSS directamente en las etiquetas HTML que conforman el documento sin tener la necesidad de generar archivos CSS adicionales. Esto lo hace muy compatible con Astro

Por ejemplo, te muestro debajo el código de un componente `Badge` que cree para el home

```html
<span
    class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 tracking-wide"
>
    <slot />
</span>
```

Otra ventaja que destacar de Tailwind es su JIT (just-in-time) el cual solo va a compilar tu CSS solo con las clases de Tailwind que estés usando y no todo el bundle

En conclusión si quieres crear un sitio web estático pero que puedas ir escalando según tus necesidades Astro para mi es en estos momentos la opción ideal ya que puedes arrancar con algo muy básico y luego ir agregando funcionalidades pudiendo así crear un sitio web muy robusto y complejo
