# Imagen base ligera con Node.js
FROM node:18-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json para instalar dependencias
COPY ../app/package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código fuente
COPY ../app .

# Exponer el puerto 3000
EXPOSE 3000

# Comando para iniciar la app
CMD ["node", "index.js"]
