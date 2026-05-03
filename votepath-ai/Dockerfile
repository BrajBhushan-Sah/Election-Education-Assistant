# Use official Node.js image
FROM node:18-slim

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy the backend package files first (for better caching)
COPY backend/package*.json ./

# Install production dependencies
RUN npm install --only=production

# Copy the rest of the backend source code
COPY backend/ .

# Expose the port (matches your server.js)
EXPOSE 5000

# Start the server
CMD [ "npm", "start" ]
