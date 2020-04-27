docker build -t overrated-image .

docker tag overrated-image registry.heroku.com/overrated-app/web


docker push registry.heroku.com/overrated-app/web

heroku container:release web -a overrated-app