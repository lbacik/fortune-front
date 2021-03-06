FROM node:15

ARG PROJECT_PATH=/project

COPY . ${PROJECT_PATH}
WORKDIR ${PROJECT_PATH}

RUN npm i

EXPOSE 3000

CMD ["node", "app.js"]