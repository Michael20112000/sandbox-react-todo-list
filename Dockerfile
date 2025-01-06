# docker build -t sandbox-react-todo-list:dev .
# -----------------------------------------------------------
# Stage 1: Development Mode
# -----------------------------------------------------------
FROM node:22.9.0

# Set the working directory in the container
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Copy the rest of the repo into the container
COPY . .

# Install dependencies
RUN npm install

# Expose the port Vite usually runs on
EXPOSE 5173
EXPOSE 6006

# Start the development server
CMD ["npm", "start"]
