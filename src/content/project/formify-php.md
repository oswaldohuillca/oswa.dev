---
title: 'FormifyPhp'
description: 'Librería de Composer para construir formularios HTML en PHP: campos declarados en código y control total sobre cómo se renderiza cada label, wrapper y error.'
createAt: 'December 21 2025'
kind: 'library'
github: 'https://github.com/oswaldohuillca/formify-php'
install: 'composer require oswa/formify-php'
registry: 'packagist'
tags: ["php", "composer", "formularios"]
---

## Introducción

Los formularios son la parte más repetitiva de cualquier proyecto en PHP: el mismo
`label`, el mismo `input`, el mismo `div` de error, copiados una y otra vez.
**FormifyPhp** los declara como datos y deja el HTML final en tus manos, sin
imponer un framework de estilos ni un markup concreto.

## Metodología y herramientas

La API mínima es una lista de campos y un botón:

```php
use Oswa\FormifyPhp\FormifyPhp;

$form = new FormifyPhp('POST', '/submit');

$form->addField('text', 'name', [
    'label'       => 'Nombre',
    'required'    => true,
    'placeholder' => 'Tu nombre',
    'class'       => 'form-control'
]);

$form->addField('email', 'email', [
    'label'    => 'Email',
    'required' => true
]);

$form->submitButton('Enviar');

echo $form->render();
```

Donde la librería se vuelve útil de verdad es en la personalización. El
renderizado se puede intervenir en tres niveles distintos, de lo global a lo
puntual:

**Labels de todo el formulario**, con `setRenderLabel()`:

```php
$form->setRenderLabel(function ($field) {
    return sprintf(
        '<label for="%s" class="font-bold text-blue-600">%s%s</label>',
        $field['name'],
        $field['label'],
        $field['required'] ? ' *' : ''
    );
});
```

**El wrapper de cada campo**, con `setFieldWrapper()`, que recibe el label, el
input y el error ya resueltos:

```php
$form->setFieldWrapper(function ($field) {
    $html = '<div class="mb-6">' . PHP_EOL;
    $html .= $field['label'];
    $html .= $field['input'];

    if ($field['error']) {
        $html .= sprintf('<p class="text-red-500 text-sm mt-1">%s</p>', $field['error']);
    }

    return $html . '</div>' . PHP_EOL;
});
```

**Un campo suelto**, con `customRenderer` dentro de sus opciones, cuando uno de
ellos necesita una estructura que no comparte con los demás.

Así el mismo formulario se adapta a Bootstrap, a Tailwind o a un CSS propio
cambiando sólo las funciones de renderizado, nunca la declaración de los campos.
