echo "\033[1m --> Only rebuild changed containers of SAM...\033[0m"
uname -a
echo "\033[1m --> start compose...\033[0m"
docker compose up -d --force-recreate 
docker ps -aq
