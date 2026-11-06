---
title: 'Dockfly'
description: 'Panel para publicar aplicaciones detrás de Traefik con SSL automático, al estilo de Nginx Proxy Manager, en una sola imagen de Docker de unos 54 MB.'
tagline: 'Panel de proxy con SSL automático'
createAt: 'October 21 2026'
kind: 'library'
github: 'https://github.com/oswaldohuillca/dockfly'
tags: ["go", "react", "traefik", "docker"]
---

## Introducción

**Dockfly** es un panel para publicar aplicaciones detrás de **Traefik** con SSL
automático, al estilo de Nginx Proxy Manager. Todo va en una sola imagen de unos
54 MB comprimida, con dos binarios: `dockfly` (API en Go y frontend React
incrustado) y `traefik`.

- **Proxy hosts** hacia un contenedor Docker, el propio servidor o una IP o URL externa, con ubicaciones personalizadas por ruta.
- **Sitios estáticos** al estilo de Cloudflare Pages: despliegues inmutables y rollback publicando uno anterior.
- **Despliegue desde GitHub y GitLab** en cada push, con previews por rama.
- **Builds en contenedores efímeros** sin privilegios, a los que nunca entran las credenciales.

## Metodología y herramientas

La base de datos es la única fuente de verdad: en cada cambio se regenera la
configuración dinámica de forma atómica y Traefik la recarga en caliente, sin
reiniciarse. Solo hace falta Docker para instalarlo:

```yaml
services:
  dockfly:
    image: 'ghcr.io/oswaldohuillca/dockfly:latest'
    container_name: dockfly
    restart: unless-stopped
    ports:
      - '80:80'   # HTTP público (Traefik)
      - '443:443' # HTTPS público (Traefik)
      - '81:81'   # Panel de Dockfly
    volumes:
      - ./data:/data
      - /var/run/docker.sock:/var/run/docker.sock
```

Después se levanta con `docker compose up -d` y se abre el panel en el puerto 81.
Montar el socket de Docker da control total del host, así que ese puerto debe
quedar protegido con un firewall, una VPN o un proxy host con SSL.
