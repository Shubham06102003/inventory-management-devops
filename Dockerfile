# 1. Use the official Node.js base image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# 4. Copy the rest of the project files
COPY . .

# 5. Build the Next.js app
RUN npm run build

# 6. Expose the default Next.js port
EXPOSE 3000

# 7. Start the app
CMD ["npm", "start"]
