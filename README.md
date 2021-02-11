## Docker Commands

First for all, similar to git commands , all the docker commands will be starting docker

- docker build --> builds an image (if you say '.' , that means within the current working folder)

  - -t --> specifies the image name

- docker run --> runs the created image into a container

  - --name --> specifies the name of container
  - -p --> specifies the port number that is listening to
    HostPORT:ContainerPORT i.e 4444:3444
  - --link container_name --> mentions which container it is depending on

- docker stop --> stops a running container
- docker rm --> removes a stopped container
- docker rmi --> removes an image
- docker push --> pushes the image into a registry
- docker pull --> pulls the image from a registry
- docker network --> the container networks
  - ls --> lists all the networks
  - inspect network_name --> lists the network details

For the Docker Compose file , it is similar to what we have inserted within the command interface, but just makes life simpler

- docker-compose up --> builds a docker-compose.yml file
  - -d --> detach from the command interface
  - --build --> rebuild the file into a new composed file( important if you changed your files and already have an existing composed project)
- docker-compose down --> removes and stops the containers
