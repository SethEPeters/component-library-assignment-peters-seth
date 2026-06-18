# #build environment
# #Base Image as 18 to avoid errors
# FROM node:20-alpine as build
# #WORKDIR to what was it was asked to be
# WORKDIR /peters_seth_ui_garden
# #signify where to put the node modules when installing them
# ENV PATH /peters_seth_ui_garden/node_modules/.bin:$PATH
# #install app dependencies

# COPY package.json ./
# COPY package-lock.json ./
# COPY ./storybook-static /
# RUN npm install react-scripts@3.4.1 -g
# # RUN NODE_ENV=development npm i
# RUN npm i
# #add app. Copy from here to container
# COPY . ./
# #Build the project environment
# RUN npm run build

# #production environment
# #Set Base image for production environment
# FROM node:20-alpine as production
# #Copy from the build environment -- The path to the build -- the path to where nginx docker image looks to grab files from to serve
# #to the browser
# COPY . .
# #Claim the port 80 to be listened to
# EXPOSE 80
# #Use nginx -- use the instructions taken from the command line -- tell nginx to stay in foreground and not background itself
# #basically it will run the container which uses and image built from this dockerfile. When we run the container it makes a build
# #that we grab the website files from then we send it to where it needs to befor nginx to find it so it can be grabbed
# CMD ["npm", "start"]

FROM node:20-alpine

WORKDIR /peters_seth_ui_garden

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

EXPOSE 80

CMD ["npm", "run", "storybook"]