## Dependências
```bash
# inicializar o arquivo package.json
yarn init -y

# instalar o typescript
yarn add typescript -D

# instalar os types do express
yarn add @types/express -D

# instalar o sucrase para utilizar o typescript localmente
yarn add sucrase

# instalar o git-commit-msg-linter
yarn add git-commit-msg-linter -D

# configurar eslint e prettier

# instalar o husky
yarn add husky@4.0.6 -D

# setar essa config para o kusky
git config --unset core.hookspath

# instalar o lint-staged
yarn add lint-staged -D

# instalar o jest / @types/jest / ts-jest
yarn add jest @types/jest ts-jest -D

# inicializar configurações do jest
jest --init

# instalar o express
yarn add express

# instalar o mongodb
yarn add mongodb 

# instalar os @types/mongodb
yarn add @types/mongodb -D 

# instalar o @shelf/jest-mongodb
yarn add @shelf/jest-mongodb -D

# instalar o supertest
yarn add supertest -D

# instalar os types do supertest
yarn add @types/supertest -D

# instalar o fast-glob
yarn add fast-glob
```

## Mongo localmente (opcao 1) 
```bash
# Esse passo funciona no linux e mac
# -------------------------------------

# Crie a pasta `mongoData` na raiz da sua maquina
mkdir mongoData 

# rode esse comando para levantar o banco e liberar o terminal
mongod --dbpath ./mongoData --fork --logpath ./mongo.log

# utilizar terminal para acessar o client mongo
mongo

# criar/selecionar o banco de api-boilerplate
Obs: api-boilerplate é o nome da base de dados (substitua pela que você criou) 
use api-boilerplate
```

## Mongo localmente (opcao 2)
```bash
# esse passo é somente para mac
# -------------------------------------

# instalar mongodb-community
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

# iniciar serviço
brew services start mongodb-community@4.4

# parar serviço
brew services stop mongodb-community@4.4

# utilizar terminal para acessar o client mongo
mongo

# criar/selecionar o banco de reviews
Obs: api-boilerplate é o nome da base de dados (substitua pela que você criou) 
use api-boilerplate
```