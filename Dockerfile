FROM node:15

ARG PROJECT_PATH=/project

COPY . ${PROJECT_PATH}
WORKDIR ${PROJECT_PATH}

RUN npm i

CMD ["node", "app.js"]