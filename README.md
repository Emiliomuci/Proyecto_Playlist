# Proyecto Comparativo de Rendimiento: Máquina Virtual (VM) vs Docker

## Introducción

Este proyecto compara el rendimiento y uso de recursos entre una máquina virtual (VirtualBox) y un contenedor Docker, ejecutando una aplicación Node.js sencilla que simula una playlist musical.

## Estructura del Proyecto

- `app/`  
  Código fuente de la aplicación Node.js, incluyendo servidor y archivos estáticos.

- `docker/`  
  Contiene el Dockerfile para construir la imagen del contenedor.

- `tests/`  
  Pruebas unitarias básicas (opcional).

- `.gitignore`  
  Archivos y carpetas ignoradas por Git.

- `README.md`  
  Documentación del proyecto.

- `package.json`  
  Dependencias y scripts.

- `LICENSE`  
  Licencia del proyecto.

## Cómo ejecutar

### En Máquina Virtual

1. Instalar Node.js  
2. Clonar repositorio  
3. Ejecutar `npm install`  
4. Ejecutar `node app/index.js`  
5. Acceder a `http://<ip-vm>:3000`

### En Docker

1. Construir la imagen:  
   `docker build -t playlist-app -f docker/Dockerfile .`  
2. Ejecutar el contenedor:  
   `docker run -d -p 3000:3000 playlist-app`  
3. Acceder a `http://localhost:3000`

## Métricas evaluadas

- Uso de CPU y memoria  
- Tiempo de arranque  
- Espacio en disco  
- Rendimiento de CPU y disco  
- Latencia y rendimiento HTTP

## Análisis y Conclusión

Docker ofrece menor uso de recursos y tiempos de arranque más rápidos, mientras que las máquinas virtuales brindan mayor aislamiento y seguridad.

---

## Autor

Emilio Muciño Segura

## Licencia

MIT
