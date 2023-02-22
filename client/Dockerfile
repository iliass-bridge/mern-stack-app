FROM node:18

# Working directory
WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

# Copy local files to WORKDIR
COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]