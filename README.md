
## GRAPHQL PARCIAL 2-50%

#### INTEGRANTES:
Diego Caceres
Ronaldo Perez



Para correr el API de forma local:
clonar el repositorio:
Instalar librerias: npm install
Iniciar API: npm run start se desplegara en el puerto 3000
http://localhost:3000/

PARA LAS PETICIONES HTTP

#### Get item

```http
  GET /localhost:3000/users
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `int` | **Required**. Your API key |
| `name` | `string` | nombre del usuario |
| `lastname` | `string` | apellido del usuario |
| `email` | `String` | email del usuario |
| `password` | `hass` | contraseña del usuario |
| `phone` | `integer` | telefono usuario |
| `role` | `String` | rol admin o customer |

### Get ID:
```http
  GET /localhost:3000/users/id
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `int` | **Required**. Your API key |

#### Post item

```http
  POST /localhost:3000/users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | nombre del usuario |
| `lastname` | `string` | apellido del usuario |
| `email` | `String` | email del usuario |
| `password` | `hass` | contraseña del usuario |
| `phone` | `integer` | telefono usuario |
| `role` | `String` | rol admin o customer |

### DELETE ID:
```http
  DELETE /localhost:3000/users/id
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `int` | **Required**. Your API key |
