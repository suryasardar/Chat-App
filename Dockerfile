FROM node:20-alpine

# Set environment variables
ENV MONGO_DB_URL=mongodb://localhost:27017/chat-app-db
ENV JWT_SECRET_KEY=Mahesh@123
ENV NODE_ENV=development

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "server"]
