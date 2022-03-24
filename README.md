# CRUD - Agenda telefonica

## Backend de la agenda telefónica, paso 1

Se implemento una aplicación Node que devuelve una lista de entradas de la agenda telefónica desde la dirección http://localhost:3001/api/persons

## Backend de la agenda telefónica, paso 2

Se implemento una página en la dirección http://localhost:3001/info que muestra la hora en que se recibió la solicitud y cuántas entradas hay en la agenda telefónica en el momento de procesar la solicitud.

## Backend de la agenda telefónica, paso 3

Se implemento la funcionalidad para mostrar la información de una sola entrada de la agenda. La URL para obtener los datos de una persona con la identificación 5 es http://localhost:3001/api/persons/5. Si no se encuentra una entrada para la identificación dada, el servidor responde con el código de estado apropiado.

## Backend de la agenda telefónica, paso 4

Se implemeto la funcionalidad que hace posible eliminar una sola entrada de la agenda telefónica mediante una solicitud HTTP DELETE a la URL única de esa entrada de la agenda.

## Backend de la agenda telefónica, paso 5

Se expandio el backend para que se puedan agregar nuevas entradas a la agenda telefónica realizando solicitudes HTTP POST a la dirección http://localhost:3001/api/persons

## Backend de la agenda telefónica, paso 6

Se implemento el manejo de errores para crear nuevas entradas. No se permite que la solicitud se realice correctamente si:
* Falta el nombre o número
* El nombre ya existe en la agenda

## Backend de la agenda telefónica, paso 7

Se agrego el middleware morgan a la aplicación para iniciar sesión. Se configúro para registrar mensajes en la consola según la pequeña configuración.
