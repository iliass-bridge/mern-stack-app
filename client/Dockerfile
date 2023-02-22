FROM node:18

# Working directory
WORKDIR /usr/src/app

COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy local files to WORKDIR
COPY . .

EXPOSE 5173
