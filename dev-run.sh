docker build -t bdudgety_dckr_dev:dev .
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3002:3002 \
    -e CHOKIDAR_USEPOLLING=true \
    bdudgety_dckr_dev:dev