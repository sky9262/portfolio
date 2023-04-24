# Use the official Node.js base image
FROM node:latest

# Set the working directory in the container
WORKDIR /portfolio

# Copy the application code to the container
COPY . .

# Install dependencies
RUN npm install

# Build the React application
RUN npm run build

# Expose a port for the application to run on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
