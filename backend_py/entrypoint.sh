#!/bin/sh

# Espera o banco de dados ficar pronto (opcional, mas recomendado)
# Este comando depende do healthcheck no docker-compose.yml
echo "Waiting for postgres..."
# (Não precisa adicionar nada aqui se você já tem o healthcheck)
# sh wait-for-it.sh db:5432 -- python manage.py runserver 0.0.0.0:8000

# Aplica as migrações do banco de dados
echo "Applying database migrations..."
python manage.py makemigrations
python manage.py migrate

# Inicia o processo principal (o comando definido no CMD do Dockerfile)
exec "$@"