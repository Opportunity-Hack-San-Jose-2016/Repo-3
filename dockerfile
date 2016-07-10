FROM ubuntu:14.04
RUN apt-get update && apt-get install -y \
        npm \
        mongodb \
        mongodb-clients \
        git \
        nodejs-legacy

RUN git clone https://github.com/Opportunity-Hack-San-Jose-2016/Repo-3.git

WORKDIR Repo-3

RUN npm install

EXPOSE 80

CMD [ "npm", "start" ]
