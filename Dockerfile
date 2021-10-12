# Specify a base image
FROM node:lts-alpine
ENV NODE_ENV=production
ENV PORT=80

WORKDIR '/usr/src/app'

# Install some depenendencies
COPY . .

RUN yarn install
RUN yarn build

# Uses port which is used by the actual application
EXPOSE 80

# Default command
CMD ["yarn", "run", "run-release"]