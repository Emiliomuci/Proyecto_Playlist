# Guía de Configuración en Máquina Virtual (VM)

Esta guía te muestra cómo configurar y ejecutar la aplicación Node.js en una máquina virtual Ubuntu Server 22.04.

## 🧱 Requisitos

- VirtualBox instalado
- Imagen de Ubuntu Server 22.04
- 2 CPU, 2 GB de RAM, 20 GB de disco
- Conexión de red NAT o puente

## 📦 Instalación de Node.js

1. Inicia tu VM.
2. Instala Node.js:
```bash
sudo apt update
sudo apt install nodejs npm -y
