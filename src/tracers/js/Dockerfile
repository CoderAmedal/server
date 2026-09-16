FROM node:12-alpine

ARG tag_name

WORKDIR /app

RUN npm init -y \
 && npm install algorithm-visualizer@$(echo ${tag_name} | sed 's/^v//') \
 && npm cache clean --force

COPY runner.js /app/runner.js

CMD ["node", "/app/runner.js"]
