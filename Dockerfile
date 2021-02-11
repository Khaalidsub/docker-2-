
FROM node:alpine
# The Container Specifications

COPY . .

RUN npm install
# How the Container Should Start
CMD [ "npm","start" ]