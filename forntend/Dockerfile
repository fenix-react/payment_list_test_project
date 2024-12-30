FROM node:22.10.0

WORKDIR /app

ARG REACT_APP_BASE_API_URL=''


ENV REACT_APP_BASE_API_URL=$REACT_APP_BASE_API_URL

COPY package.json yarn.lock ./

RUN npm cache clean --force

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

# Start the application
CMD ["yarn", "dev"]
