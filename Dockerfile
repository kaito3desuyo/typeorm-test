FROM node:lts

RUN apt update -y && apt install postgresql-common -y && yes | sh /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh && apt install postgresql-client-12 -y

RUN npm install -g @nestjs/cli

RUN mkdir /home/typeorm-test

WORKDIR /home/typeorm-test

COPY . .

RUN npm install