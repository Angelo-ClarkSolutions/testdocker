# Imports a NodeJS image from the docker repository and implies this stage is for building and compiling the Typescript code
FROM node:16-alpine 

# Specifies the working directory in the container from which the app will be served
WORKDIR /login

# Copy the package files to the container
COPY package*.json .

# Copies the source code into the container’s work directory.
COPY . .

# Install the dependencies
RUN npm install

# Builds the Typescript code
RUN npm run build

EXPOSE 4000

CMD ["node", "dist/index.js"]