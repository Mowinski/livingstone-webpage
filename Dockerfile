FROM python:3
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /code
RUN apt update && apt install -y npm
COPY package.json package-lock.json /code/
RUN npm install

# Install dependencies
RUN pip install pipenv
COPY Pipfile Pipfile.lock /code/
RUN pipenv install --system

# Copy project
COPY . /code/
RUN npm run build

CMD python /code/manage.py runserver 0.0.0.0:8000