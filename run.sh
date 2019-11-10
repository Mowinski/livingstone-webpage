#!/usr/bin/env bash

docker-compose run --rm web python manage.py migrate
docker-compose run --rm web python manage.py collectstatic --noinput