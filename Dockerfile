# Use official Nginx image
FROM nginx:latest

# Copy website HTML files
COPY html/ /usr/share/nginx/html/

# Copy assets (images, videos, etc.)
COPY assets/ /usr/share/nginx/html/assets/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
