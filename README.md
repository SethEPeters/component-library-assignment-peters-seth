Create a fresh Next.js project
(Next.js was needed as create-react-app would cause version issues with storybook and typescript)
npx create-next-app@latest component-library
cd component-library
npm install

Install Storybook
npx storybook@latest init

ensure clean dependency alignment
npm install react@latest react-dom@latest
npm install -D typescript@latest @types/react @types/react-dom

run Storybook
npm run storybook

Create your components
add components folder and make files of
component.stories.tsx
component.tests.tsx
component.types.tsx
component.tsx
index.ts

Create Stories (stories are saved states used to save stylings for use in production)

Create Tests

to run tests
npx vitest

**DOCKER**

In package.json found in the component library main directory change the line storybook line under scripts to "storybook": "storybook dev -p 80 --ci", to allow the files to be listened to upon port 80

\------DOCKERFILE--------

FROM node:20-alpine

WORKDIR /peters\_seth\_ui\_garden

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

EXPOSE 80

CMD \["npm", "run", "storybook"]

\------DOCKERIGNORE--------

node\_modules
build
.dockerignore
Dockerfile
Dockerfile.prod

docker build -t peters\_seth\_coding\_assignment13 .

docker run -it --rm -p 8018:80 --name peters\_seth\_coding\_assignment13 peters\_seth\_coding\_assignment13
