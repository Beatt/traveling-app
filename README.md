# Prueba técnica TrueHome

Crear una aplicación web para el agendado de boletos de una aerolínea. En esta prueba
técnica se evaluará la creatividad y diseño presentado, la organización de código, la lógica
de creación de componentes y funcionalidad. El diseño y la experiencia de usuario deben
ser preferentemente de tu autoría, evita utilizar frameworks de diseño (Bootstrap, Material,
Bulma) lo importante no es que “se vea bonito” si no que demuestres un manejo de CSS y
puedas crear layouts responsivas por tu cuenta.

## Dependencias
1. Docker
2. Node >= 12
3. Yarn

## Tecnologías utilizadas
- React
- React Router
- Redux
- React Modal
- Axios
- Formik
- Express
- Postgresql
- Docker
- Jest
- Enzyme
- Fishery
- Faker
- Eslint
- Prettier
- SASS

## Local
1. git clone git@github.com:Beatt/traveling-app.git
2. cd traveling-app
3. yarn install
4. yarn api-server
5. docker-compose -f docker.yml up
6. yarn start 

## Tests
1. yarn test -- --coverage --watchAll

Casos de prueba cubiertos

1. Página de inicio (flight)
    1. Guardar vuelo
    2. Mostrar mensaje de error si falla el guardado del vuelo
2. Selección de precios
    1. Guardar el precio seleccionado
3. Carrito
   1. Reservar un vuelo
   2. Eliminar un vuelo
   3. Mostrar el total de pago por los vuelos seleccionados
   4. Limpiar carrito

## Extra
[Estructura de carpetas y ejemplos de cómo testear componentes en React](https://github.com/Beatt/testing-react-project)
