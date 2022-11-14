FROM mongo:3

COPY init.json /init.json

CMD mongoimport --host mongodb --db nest --collection routes -u "admin" -p "password" --type json --file /init.json --jsonArray
