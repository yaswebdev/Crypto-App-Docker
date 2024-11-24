# Step 1: Use Node.js image for the backend server
FROM node:16

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Step 4: Copy server files to the container
COPY . .

# Step 5: Expose port 5000 and start the server
EXPOSE 5000
CMD ["node", "server.js"]
