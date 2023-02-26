# **GifApp**

## Creacion de proyecto con Vite
```
npm create vite

```

    ✔ Project name: … gif-app
    ✔ Select a framework: › React
    ✔ Select a variant: › JavaScript
        cd gif-app
        npm install
        npm run dev

## Datos para giphy para las imagenes
```
apiKey = "iU2wKq7B5JjXmo7iU3Fok6T2Ix6UgcGi";

http://api.giphy.com/v1/gifs/random?api_key=${apiKey}

```

## FileSystem
React no tiene un patron determinado en las estructura de las carpetas como lo es angular

## Como generar el build de produccion
```
npm run build
```

## Despliegue en netlify
```
npm run build
```
esto va a crear la carpeta dist y es lo que se usa para desplegar

Para hacer las pruebas de despligue, vamos a usar netlify.com (que no tenga backend pero si podemos hacer peticiones http). Al decir que no tiene backend es que no tenemos el servidor de node corriendo ahi

1) vamos a la pestaña Sites
2) arrastramos nuestra carpeta dist ahi
3) para cambiar el url vamos a Site settings
4) luego pulsamos en Change site name y colocamos el nombre (debe ser unico)

## Despliegue en Github
1)inicializa nuestro repositorio

```
git init
```

2) Si no lo hemos configurado

```
git config --global user.email "juliorhode@gmail.com"
```

```git config --global user.name "Julio Rhode"```

3) Vamos a preparar todos los archivos desde el ultimo commit

```git add .```

4) Preparamos los archivos

``` git commit -m "Primera carga" ```

5) si borre algo accidentalmente, reconstruye todo a como estaba desde el ultimo commit

``` git checkout -- . ```

6) Renombra la rama principal

``` git branch -M main ```

7) Añadimos el repositorio remoto

``` git remote add origin https://github.com/juliorhode/react-gifApp.git ```

8) Sube los cambios al repositorio (-u para establecerlo por defecto) (origin hace referencia al url) (main es la rama a donde lo va a subir) 

``` git push -u origin main ```

## Crear token de acceso personal en GitHub
Desde su cuenta de GitHub, vaya a Settings → Developer Settings → Personal Access Token → Generate New Token (indique su contraseña) → Complete el formulario → haga clic en Generar token → Copie el token generado 

### Para sistema operativo Windows
Vaya a Credential Manager  desde el Control Panel → Windows Credentials → busque git:https://github.com→ Editar → En Contraseña, reemplace con su GitHub Personal Access Token.

Si no encuentra git:https://github.com→ Haga clic en Agregar una credencial genérica → La dirección de Internet será git:https://github.comy deberá ingresar su nombre de usuario y contraseña será su GitHub Personal Access Token → Haga clic en Aceptar y listo

### Para un sistema operativo basado en Linux
Para Linux, debe configurar el cliente GIT local con un nombre de usuario y una dirección de correo electrónico,

``` git config --global user.name "your_github_username" ```

``` git config --global user.email "your_github_email" ```

``` git config -l ```

Una vez que GIT está configurado, podemos comenzar a usarlo para acceder a GitHub. 

Ahora almacene en caché el registro dado en su computadora para recordar el token:

``` git config --global credential.helper cache ```

Si es necesario, en cualquier momento puede eliminar el registro de caché:

``` git config --global --unset credential.helper ```

``` git config --system --unset credential.helper ```

Ahora intente tirar -vpara verificar

``` git pull -v ```

Linux/Debian (Clonar de la siguiente manera):

``` git clone https://<tokenhere>@github.com/<user>/<repo>.git ```

## Despliegue en Github pages
1) cambiamos el nombre de la carpeta dist de nuestro proyecto y la renombramos a docs
2) git add docs
3) git commit -m "docs creado"
4) git push
5) nos vamos a settings
6) luego pages
7) en branch seleccionamos main y al lado seleccionamos docs (el root no porque es una aplicacion de node)
8) luego save
9) si indica un error de carga de modulo JS o CSS, en el index.htm de la carpeta docs, a las referencias de los archivos, le anteponemos un punto a la ruta para indicarle que a partir de deonde se encuentr (raiz) busque esa carpeta.

## Configuraciones para testing
### Instalaciones
``` npm install --dev jest babel-jest @babel/preset-env @babel/preset-react  ```

``` npm install --dev @testing-library/react @types/jest jest-environment-jsdom ```

Opcional Si usamos Fetch API (forma nativa para hacer peticiones http) en el proyecto:

``` npm install --dev whatwg-fetch ```

Actualizar los scripts del package.json:
```  
"scripts: {
  ...
  "test": "jest --watchAll"
}
```

Crear la configuración de babel babel.config.cjs:
``` 
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

Opcional, pero eventualmente necesario, crear Jest config y setup:

1) jest.config.cjs
```  
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

2) jest.setup.js
``` 
import 'whatwg-fetch';
```

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