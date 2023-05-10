instalar babel
yarn add -D @babel/core @babel/cli

@babel/core = libreria
@babel/cli= comandos

para usar comandos de babel
usar "npx babel "aqui va el comando" "

"scripts".{
"build": "babel"  no hace falta usar el npx

}


npx babel --help ver comandos

create babel.config.json(poner {} dentro del archivo)
"los presets son una lista de plugins"
yarn add @babel/preset-env --dev

compilar con los presets

npx babel --presets @babel/preset-env src -d dist

configurar babel.config


babel presets react

yarn add -D @babel/preset-react

instalar react y react-dom


{
    "compilerOptions": {
        "target": "ESNext",
    },
    "include": ["src/**/*.ts"]compilar todas las carpetas y archivos que sean .ts
}

instalar typescript en react(tipos)

yarn add @types/react


instalar webpack

yarn add -D webpack

yarn add -D webpack-cli

correr con 
npx webpack

loaders
loader de typescript


yarn add -D typescript ts-loader

modo 
watch:true

para que detecte los cambios en el tsx