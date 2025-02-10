# Use official Nginx image
FROM nginx:latest

# Copy website files only
COPY html/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
