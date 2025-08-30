FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./

RUN npm ci
COPY . .

ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN npm run build


FROM node:18-alpine AS production

WORKDIR /app
COPY --from=build /app/build ./build
RUN npm install -g serve
EXPOSE 3000

CMD ["serve", "-s", "build"]
