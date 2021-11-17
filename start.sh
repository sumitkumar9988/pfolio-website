sudo kill -9 $(sudo lsof -t -i:80) &
sudo node server.js
