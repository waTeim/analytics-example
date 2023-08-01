# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies in the Docker container
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle the source code inside the Docker container
COPY . .

# Expose port 3000 for the app to be accessible
EXPOSE 3000

# Define the command to run the app
CMD [ "node", "server.js" ]
