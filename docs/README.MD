# Guía de Configuración en Máquina Virtual (VM)

Esta guía te muestra cómo configurar y ejecutar la aplicación Node.js en una máquina virtual Ubuntu Server 22.04.

## Requisitos

- VirtualBox instalado
- Imagen de Ubuntu Server 22.04
- 2 CPU, 2 GB de RAM, 20 GB de disco
- Conexión de red NAT o puente

## Instalación de Node.js

1. Inicia tu VM.
2. Instala Node.js:
```bash
sudo apt update
sudo apt install nodejs npm -y
3. Verifica:
  node -v
  npm -v

## Ejecución de la aplicación
1.- Clona el repositorio:
    - git clone https://github.com/tu-usuario/playlist-app.git
    - cd playlist-app
2.- Instala dependencias:
    - npm install

3.- Inicia la app:
    - node app/index.js

4.- Accede desde tu navegador:
    - http://<IP-DE-TU-VM>:3000


---

### 📄 `docs/setup_docker.md`

```markdown
# Guía de Configuración en Docker

Esta guía explica cómo ejecutar la aplicación en un contenedor Docker.

## 🔧 Requisitos

- Docker instalado: https://docs.docker.com/get-docker/

## Construcción de la imagen

1.- Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/playlist-app.git
cd playlist-app

2.- Construye la imagen:
docker build -t playlist-app -f docker/Dockerfile.

3.- Abre en tu navegador:
http://localhost:3000

## Supervisar el contenedor

docker stats

### `docs/metricas_utilizadas.md`

```markdown
# Métricas y Herramientas Utilizadas
Este documento describe las herramientas y comandos usados para medir el rendimiento.

  ## CPU Benchmark — `sysbench`
  Simula operaciones intensivas de CPU:
  
  ```bashsysbench cpu --cpu-max-prime=20000 run
  
  
  ## Velocidad de Disco — fio
  fio --name=prueba --rw=write --bs=1M --size=500M --numjobs=1 --time_based --runtime=60 --group_reporting



  ## Latencia HTTP — ab (Apache Benchmark)
  ab -n 1000 -c 50 http://localhost:3000/

  ## Espacio en disco
  du -sh playlist-app

  ## Tiempo de arranque
  date && node app/index.js
















