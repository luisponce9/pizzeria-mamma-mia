# 🍕 Pizzería Mamma Mia! - Proyecto final

Aplicación web desarrollada con React y Vite para la gestión y visualización del catálogo de una pizzería. Este proyecto se construye de forma iterativa, sumando funcionalidades en cada hito de desarrollo del curso.

## 📌 Progreso del Proyecto

- [x] **Hito 1:** Maquetación y Componentes Estáticos.
- [x] **Hito 2:** Estado de los Componentes y Eventos.

## 🚀 Características Actuales (Hito 2)

### Hito 2: Interactividad y Formularios
* **Gestión de Estado:** Uso del hook `useState` para controlar los datos ingresados en los componentes de `Login` y `Register`.
* **Validación de Datos:** Prevención del comportamiento por defecto (`e.preventDefault()`) e implementación de validaciones lógicas:
  * Bloqueo de envío si existen campos vacíos.
  * Verificación de longitud mínima (6 caracteres) para las contraseñas.
  * Comprobación de coincidencia exacta entre "Contraseña" y "Confirmar contraseña" en el registro.
* **Feedback Dinámico:** Renderizado condicional de mensajes (éxito o error) en la interfaz para informar al usuario el resultado de sus acciones.

### Hito 1: Maquetación y Componentes Estáticos
* **Componentes Dinámicos:** Tarjetas de productos (`CardPizza`) construidas dinámicamente mediante el paso de `props`.
* **Renderizado Condicional:** Barra de navegación (`Navbar`) que alterna sus botones simulando un estado de sesión.
* **Diseño Responsivo:** Implementación del sistema de grillas de Bootstrap para adaptar el catálogo a diferentes pantallas.
* **Sticky Footer:** Uso de utilidades de Flexbox (`min-vh-100`, `flex-grow-1`) para fijar el pie de página al fondo de la pantalla.

## 🛠️ Tecnologías Utilizadas

* [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
* [React-Bootstrap](https://react-bootstrap.github.io/) / Bootstrap 5
* CSS3 (Flexbox & Grid)
