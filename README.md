# GLADMap
GladMAP is an Open-Source Solution to obtaining MAP Data using the assistance of Leaflet, OpenStreetMap, & Twitter APIs

Documentation:
https://da.gd/oh2016

Live Servers:
https://da.gd/oh1

# Requirements
1. Ubuntu 14.04 Server
2. This Github Repo


# How 2 Methods to Install
Method 1: Manually

1. git clone https://github.com/Opportunity-Hack-San-Jose-2016/Repo-3.git
2. cd Repo-3
3. npm install
4. npm start
5. # Service is running on localhost on port 80
6. # User web browser to browse to localhost http://127.0.0.1 or public IP

Method 2: Docker & Script

1. git clone https://github.com/Opportunity-Hack-San-Jose-2016/Repo-3.git
2. cd Repo-3
3. bash RunToAutoInstallEverything.sh
4. # Service is running on localhost on port 80
5. # User web browser to browse to localhost http://127.0.0.1 or public IP

# Summary
This is a NodeJS Web Application that allows Real-Time contribution of user report data and spread it through social media mediums such as Twitter.

Report data consists of user-defined status (SOS, Hazard, Supplies, & Found) for a target location.

A User is able to report Emergency data quickly and have it submitted to a centralized server. 

The Server is able to export that data to GEOJSON format to import into QGis, a Open Source desktop mapping tool to inspect map data.

# Contributions

Milan Pal Singh: Front-End Dev., Lead Engineer

Charles M. Chong: Back-End Eng., Project Manager

Mansi Sogani: Front-End Dev., Support
