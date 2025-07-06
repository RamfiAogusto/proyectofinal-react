# 🌱 Verdor - E-commerce de Plantas de Interior

Una aplicación web moderna de e-commerce especializada en plantas de interior, desarrollada con React, Redux Toolkit, TypeScript y Tailwind CSS.

## 🚀 Características

### Página de Destino (5 puntos)
- ✅ Imagen de fondo llamativa
- ✅ Párrafo descriptivo sobre la empresa
- ✅ Nombre de la empresa "Verdor"
- ✅ Botón "Comenzar" que enlaza a la página de productos

### Página de Listado de Productos (9 puntos)
- ✅ Seis plantas únicas con miniatura, nombre y precio
- ✅ Plantas agrupadas en 3 categorías: Interior, Exterior, Suculentas
- ✅ Botón "Añadir al carrito" para cada planta con funcionalidad completa:
  - Incrementa el contador del carrito
  - Se desactiva después de añadir
  - Añade la planta al carrito de compras

### Cabecera (7 puntos)
- ✅ Presente en todas las páginas
- ✅ Icono del carrito con contador de artículos
- ✅ Navegación completa entre páginas

### Página del Carrito (23 puntos)
- ✅ Número total de plantas en el carrito
- ✅ Coste total de todos los artículos
- ✅ Cada planta muestra miniatura, nombre y precio unitario
- ✅ Botón de incremento con actualización automática
- ✅ Botón de decremento con actualización automática
- ✅ Botón de eliminación
- ✅ Botón de pago (muestra "Próximamente")
- ✅ Botón de continuar comprando

### Redux (4 puntos)
- ✅ Configuración completa de Redux Toolkit
- ✅ Slice del carrito con todas las acciones
- ✅ Estado global para gestión del carrito

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework frontend
- **TypeScript** - Tipado estático
- **Redux Toolkit** - Gestión del estado
- **React Router** - Navegación entre páginas
- **Tailwind CSS** - Estilos y diseño responsivo
- **Unsplash** - Imágenes de las plantas

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/RamfiAogusto/proyectofinal-react.git
cd proyectofinal-react
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta la aplicación:
```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── Header.tsx          # Cabecera con navegación
│   └── ProductCard.tsx     # Tarjeta de producto
├── pages/
│   ├── Home.tsx           # Página de inicio
│   ├── Products.tsx       # Listado de productos
│   └── Cart.tsx           # Carrito de compras
├── store/
│   ├── slices/
│   │   └── cartSlice.ts   # Slice de Redux para el carrito
│   └── index.ts           # Configuración del store
├── data/
│   └── plants.ts          # Datos de las plantas
├── types/
│   └── index.ts           # Definiciones de tipos
└── App.tsx                # Componente principal
```

## 📱 Funcionalidades

### Gestión del Carrito
- Añadir productos al carrito
- Incrementar/decrementar cantidades
- Eliminar productos del carrito
- Cálculo automático de totales
- Persistencia del estado durante la sesión

### Navegación
- Páginas: Inicio, Productos, Carrito
- Navegación fluida entre páginas
- Contador visual del carrito en la cabecera

### Filtrado de Productos
- Filtros por categoría
- Interfaz intuitiva para explorar productos

## 🎨 Diseño

- Diseño responsivo para móviles y escritorio
- Interfaz moderna con Tailwind CSS
- Colores temáticos verdes para plantas
- Experiencia de usuario optimizada

## 🚀 Despliegue

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `build/`.

## 📋 Requisitos Cumplidos

✅ **GitHub (6 puntos)**
- Repositorio público configurado
- Código Redux implementado

✅ **Página de destino (5 puntos)**
- Todos los elementos requeridos implementados

✅ **Página de productos (9 puntos)**
- Seis plantas únicas
- Categorización completa
- Funcionalidad del carrito

✅ **Cabecera (7 puntos)**
- Presente en todas las páginas
- Contador del carrito funcional
- Navegación completa

✅ **Página del carrito (23 puntos)**
- Todas las funcionalidades implementadas
- Controles de cantidad
- Botones de acción

**Total: 50/50 puntos**

## 👨‍💻 Desarrollo

Este proyecto fue desarrollado siguiendo las mejores prácticas de React y TypeScript:

- Componentes funcionales con hooks
- Tipado estricto con TypeScript
- Arquitectura modular y escalable
- Código limpio y bien documentado
- Principios DRY (Don't Repeat Yourself)

---

Desarrollado con ❤️ para el curso de Desarrollo Frontend con React 