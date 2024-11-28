#!/bin/bash

# 1. Hacer build del proyecto Angular
ng build

# 2. Verificar si la carpeta de despliegue existe
if [ ! -d "dist/zemios/browser" ]; then
  echo "El directorio dist/zemios/browser no existe. Asegúrate de que el build se realizó correctamente."
  exit 1
fi

# 3. Navegar a la carpeta dist/zemios/browser
cd dist/zemios/browser

# 4. Verificar si ya hay un repositorio Git
if [ ! -d ".git" ]; then
  echo "Inicializando el repositorio Git..."
  git init
  git remote add origin ssh://zemios@zemios.com/~/zemios.com.git
else
  echo "Repositorio Git ya inicializado."
fi

# 5. Traer los últimos cambios del servidor remoto para evitar conflictos de fast-forward
git pull origin main
# git fetch origin main
# git reset --soft origin/main

# 6. Hacer commit y push de los cambios
git add .
git commit -m "Actualización del build"
git push origin main

# 7. Conectarse al servidor para actualizar el sitio en el servidor
# ssh zemios@zemios.com << 'EOF'
#   git clone ~/zemios.com.git ~/zemios.com
#   cd ~/zemios.com
#   git pull origin main
# EOF

echo "HA LLEGADO AQUI --------------------------------------------------------------------"
python 