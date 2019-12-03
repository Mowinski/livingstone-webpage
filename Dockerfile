FROM python:3
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /code
RUN apt update && apt install -y npm nodejs && pip3 install uwsgi
COPY package.json package-lock.json /code/
RUN npm install

# Install dependencies
RUN pip3 install pipenv
COPY Pipfile Pipfile.lock /code/
RUN pipenv install --system

# Copy project
COPY . /code/
# RUN npm run build
EXPOSE 8000

CMD uwsgi --ini /code/uwsgi.ini