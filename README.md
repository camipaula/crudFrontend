# Frontend del Sistema de Autenticación y Productos (Vue.js)

Este es el repositorio para el frontend del sistema de autenticación y productos, desarrollado con **Vue.js**. Aquí se encuentran las vistas y componentes que interactúan con el backend para el manejo de usuarios y productos.

## Descripción del Proyecto

El frontend de esta aplicación permite a los usuarios:
- Registrarse.
- Iniciar sesión.
- Acceder a una lista de productos (solo si están autenticados).
- Crear, editar y eliminar productos (CRUD).
- Cerrar sesión.

La interfaz está diseñada con **Bootstrap** para una mejor presentación.

## Instalación

### Requisitos

- **Node.js y npm** instalados en tu máquina.

### Paso a Paso

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/camipaula/crudFrontend.git

2. **Clona el repositorio**:
   ```bash
   cd crudFrontend

4. **Instala las dependencias**:
   ```bash
   npm install
   
6. **Inicia la aplicación**:
   ```bash
   npm run dev

La aplicación estará disponible en http://localhost:5173.

### Uso
- Página de Login: Permite a los usuarios autenticarse.
- Registro: Permite a los usuarios crear una nueva cuenta.
- Página de Productos: Los usuarios autenticados pueden ver, agregar, editar y eliminar productos.
- Cerrar sesión: Los usuarios pueden cerrar sesión en la página de productos.
   
