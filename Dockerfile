FROM node:20-alpine

WORKDIR /peters_seth_ui_garden_build_checks

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

EXPOSE 80

CMD ["npm", "run", "storybook"]