# -----------------------------------------------------------
# Stage 1: Development Mode
# -----------------------------------------------------------
FROM node:22.9.0

# Set the working directory in the container
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the repo into the container
COPY . .

# Expose the port Vite usually runs on
EXPOSE 5173

# Start the development server
CMD ["npm", "start"]
