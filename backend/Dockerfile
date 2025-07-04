# Use official Node.js 20 image as base
FROM node:20

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend source code
COPY . .

# Expose port your backend listens on
EXPOSE 4000

# Command to run your backend server
CMD ["node", "index.js"]