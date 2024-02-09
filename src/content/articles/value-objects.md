---
title: "Qué son los Value Objects"
pubDate: 2024-02-08
description: "Introducción a los Value Objects implementado con Laravel y PHP 8.1"
author: "Jerson Moreno"
image:
    url: "https://docs.astro.build/assets/full-logo-light.png"
    alt: "The full Astro logo."
tags: ["PHP", "Laravel", "Value Object"]
---

# Que son los Value Objects

Hace un tiempo trabajando en un sistema se me presentó un caso en el que debía manipular montos en diferentes formatos: decimal, en formato moneda y en letras

Una manera limpia que se me ocurrió para manejar esta tarea fue utilizar un Value Object el cual me iba a permitir recibir el monto en un formato y poder retornarlo en el formato que se requería

Los Value Objects son uno de los bloques de construcción fundamentales en el diseño orientado a objetos y en la arquitectura DDD (Domain-Driven Design). Son objetos inmutables que no tienen identidad y se utilizan para representar conceptos simples del dominio del problema, como una dirección de correo electrónico, una cantidad de dinero o una fecha.

## Implementando Value Object

Para manejar los montos se puede desarrollar algo así:

```php
class Amount
{
  public readonly int $cent;
  public readonly float $decimal;
  public readonly string $formatted;

  public function __construct(int $cent)
  {
    $this->cent = $cent;

    $this->decimal = $cent / 100;

    $this->formatted = '$' . number_format($this->decimal, 2);
  }

  public static function from(int $cent): self
  {
    return new self($cent);
  }
}
```

Del código anterior podemos destacar varias cosas:

1. Cada propiedad de la clase `Amount` tiene agregado los atributos **public readonly.** El atributo **public** asegura que puede ser fácilmente accedido mientras que **readonly** (el cual puede ser usado en PHP desde su versión 8.1) garantiza que sea inmutable, lo que significa que no puede ser modificado
2. En Laravel se estila crear una función factory `from` que será la encargada de recibir el valor a ser formateado

Para usar el Value Object se haría de la siguiente forma:

```php
$price = 15000;

Amount::from($price);

//- OUTPUT
{
  cent: 15000,
  decimal: 150.0,
  formatted: "$150.00",
}
```

> En SQL es recomendable guardar los montos en formato entero (int) en vez de decimal (float) para evitar errores de redondeo, es por eso que el valor de entrada que recibe la clase `Amount` es en céntimos

## Implementar en Laravel

En Laravel pueden ser implementados por ejemplo en los modelos a traves de un getter

```php
namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;

class Money extends Model
{
  public function priceFormatted(): Attribute
  {
    return Attribute::make(
      get: fn (int $value) => Amount::from($value)
    );
  }
}
```

Ahora podemos usarlo de la siguiente forma:

```php
$money = Money::first();

// Ejecutando el getter
$priceFormatted = $money->price_formatted;

// $150.25
echo $priceFormatted->formatted;

// 150.25
echo $priceFormatted->decimal;

// 15025
echo $priceFormatted->cent;
```

## Conclusión

Los Value objects en mi opinión son asombrosos. Pueden adaptarse prácticamente a cualquier proyecto. Son muy fáciles de implementar y te permiten tener un código bien declarado.

¿Qué más puede ser expresado como un Value Object?

-   Direcciones
-   Números
-   Porcentajes
-   Fechas
-   Coordenadas
-   etc…
