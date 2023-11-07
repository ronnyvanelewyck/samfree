echo "\033[1m --> Complete docker rebuild of SAM...\033[0m"
uname -a
echo "\033[1;31m --> STOP and DELETE all containers... \033[0m"
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
echo "\033[1;31m --> DELETE all images... \033[0m"
docker rmi $(docker images -q)
echo "\033[1;31m --> DELETE all volumes... \033[0m"
docker volume prune -a -f
echo "\033[1m --> start compose...\033[0m"
docker compose up -d --force-recreate 
docker ps -aq
