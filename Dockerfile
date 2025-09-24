# Stage 1: Build the Angular application
FROM node:lts-alpine as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application for production
RUN npm run build --prod

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the built Angular application from the builder stage to Nginx's html directory
COPY --from=builder /app/dist/yans-food /usr/share/nginx/html

EXPOSE 4200

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
