# agameoftheories

#### Local dev setup
```
# Install docker
# https://docs.docker.com/engine/installation/

# Start postgres
sudo docker run --name pg -p 5432:5432 -e POSTGRES_PASSWORD=pass -d postgres

# Install node and npm
# https://nodejs.org/en/download/

# Install npm packages
npm i

# Run migrations and seeds
npm i -g knex
knex migrate:latest
knex seed:run

# Install postgrest
# https://postgrest.com/en/v4.1/install.html

# Run postgrest
postgrest postgrest.conf
```

#### Helpful commands
```
# psql
sudo docker exec -it pg psql -U postgres

# knex
knex migrate:make [options] <name>  # create migration
knex migrate:rollback  # rollback migration
knex seed:make [options] <name>  # create seed
```

#### API Examples
```
# Full Text search on Littlefinger
curl http://localhost:3000/theories?search=@@.Littlefinger
```
