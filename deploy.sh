docker build -t Overrated-image .

docker tag Overrated-image registry.heroku.com/Overrated/web


docker push registry.heroku.com/Overrated/web

heroku container:release web -a Overrated