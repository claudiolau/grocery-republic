# pull latest image 
FROM node:18-alpine

# create parent directory 
RUN mkdir -p /usr/src/app

# set working directory 
WORKDIR /usr/src/app

# copy to docker image 
COPY . .

# install node packages
RUN npm install

# maps a port into the container. 
EXPOSE 3000

# start container 
CMD ["npm", "run", "dev"]