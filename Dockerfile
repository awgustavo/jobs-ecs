FROM --platform=linux/amd64 node:18

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

CMD [ "npm", "run", "light-jobs" ]