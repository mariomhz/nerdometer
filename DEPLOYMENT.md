# Guía Rápida de Despliegue

## Opción 1: Netlify (Recomendado - Más Fácil)

### Método de arrastrar y soltar:
1. Ve a [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Arrastra toda la carpeta del proyecto a la página
3. ¡Listo! Tu sitio estará en línea en segundos

### Método con Git:
1. Sube tu código a GitHub
2. Ve a [https://app.netlify.com](https://app.netlify.com)
3. Click en "New site from Git"
4. Conecta tu repositorio
5. Netlify detectará automáticamente la configuración

## Opción 2: Vercel

1. Ve a [https://vercel.com](https://vercel.com)
2. Click en "New Project"
3. Importa tu repositorio de GitHub
4. Vercel desplegará automáticamente

O usando CLI:
```bash
npm i -g vercel
vercel
```

## Opción 3: GitHub Pages (Gratis)

1. Sube tu código a GitHub
2. Ve a tu repositorio
3. Settings > Pages
4. Selecciona la rama "main" y carpeta "/ (root)"
5. Guarda y espera unos minutos
6. Tu sitio estará en: `https://tu-usuario.github.io/nombre-repositorio`

## Opción 4: Servidor Local (Para probar)

### Opción A - Con Python:
```bash
# Python 3
python -m http.server 8000

# Abre http://localhost:8000
```

### Opción B - Con Node.js:
```bash
npx serve .

# Abre http://localhost:3000
```

### Opción C - Solo abriendo el archivo:
Simplemente abre `index.html` en tu navegador (doble click).

## Opción 5: Otras plataformas

### Firebase Hosting:
```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

### Surge:
```bash
npm install -g surge
surge
```

### Render:
1. Ve a [https://render.com](https://render.com)
2. New > Static Site
3. Conecta tu repositorio
4. Despliega

## URLs de ejemplo

Después del despliegue, tendrás una URL como:
- Netlify: `https://nombre-aleatorio.netlify.app`
- Vercel: `https://nerdometer.vercel.app`
- GitHub Pages: `https://usuario.github.io/nerdometer`

## Personalizar dominio

Todas las plataformas mencionadas permiten usar tu propio dominio personalizado (ejemplo: `nerdometer.com`). Revisa la documentación de cada plataforma para configurarlo.

## Problemas comunes

**El sitio no se ve bien:** Asegúrate de que todos los archivos (index.html, styles.css, script.js) estén en la misma carpeta.

**Error 404:** Verifica que el archivo se llame exactamente `index.html` (minúsculas).

**JavaScript no funciona:** Abre la consola del navegador (F12) para ver errores.
