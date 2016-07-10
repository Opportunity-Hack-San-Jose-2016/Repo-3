#!/bin/bash
# Bash Script to auto install everything to get GLADMap working!
#
# How to use:
#
# 	sudo -i
#	bash RunToAutoInstallEverything.sh
#	...
#	profit!
#

# Update Server
apt-get update -y && apt-get upgrade -y
# Install Git
apt-get install git -y
git clone https://github.com/Opportunity-Hack-San-Jose-2016/Repo-3.git
# Installs Docker
curl -sSL https://get.docker.com/ | sh
# Download Docker Repo
docker pull gladmapbeta/gladmap
# Run GLADMap on port 80 and proxy it through host
docker run -p 80:80 -d gladmapbeta/gladmap
# Now visit the Local Server by browsing to: http://127.0.0.1
