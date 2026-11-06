---
title: 'Forja'
description: 'Librería de Composer para declarar campos personalizados de WordPress desde el código del tema, conservando la interfaz de edición de ACF que los editores ya conocen.'
tagline: 'Campos de WordPress declarados en código'
createAt: 'August 19 2026'
kind: 'library'
github: 'https://github.com/oswaldohuillca/forja-fields'
install: 'composer require forja-wp/forja-fields'
registry: 'packagist'
tags: ["php", "wordpress", "composer", "acf"]
---

## Introducción

En WordPress los campos personalizados obligan a elegir entre dos mundos: la
comodidad de definirlos en código, como hace CMB2, o la interfaz de edición
pulida de ACF, que es la que de verdad usa el cliente todos los días.

**Forja** junta las dos: la API de desarrollo de CMB2 con la experiencia de
edición de ACF.

- No es un plugin. Se instala en el tema y no hay nada que activar.
- Sin panel para crear campos: los grupos se declaran en PHP y viven en el repositorio.
- Paridad visual con ACF/SCF — se porta su markup y su CSS, no se reinventa.
- Compatible con los datos de ACF: un sitio existente se lee sin migrar nada.

## Metodología y herramientas

Un grupo de campos es una llamada dentro de un `add_action`:

```php
add_action( 'forja/register_boxes', function () {
	forja_register_box( 'portada', array(
		'title'           => 'Contenido de portada',
		'object_subtypes' => array( 'page' ),
		'fields'          => array(
			array( 'type' => 'text',  'name' => 'titular', 'label' => 'Titular' ),
			array( 'type' => 'image', 'name' => 'fondo',   'label' => 'Imagen de fondo' ),
		),
	) );
} );
```

Y en la plantilla:

```php
forja_the_field( 'titular' );
```

Cubre 35 tipos de campo, con lógica condicional, validación y puntos de
extensión. La documentación se genera con VitePress y se publica en dos idiomas:
inglés por defecto y español — la versión completa y canónica — bajo `/es/`.

Requiere PHP 8.1, WordPress 6.4 y Composer 2. Es obra derivada de
[Secure Custom Fields](https://github.com/WordPress/secure-custom-fields), y por
eso se publica bajo GPL-2.0 o posterior.
