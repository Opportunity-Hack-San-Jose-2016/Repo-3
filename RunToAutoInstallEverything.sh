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
cd Repo-3
# Build Docker Image from Dockerfile
docker build
