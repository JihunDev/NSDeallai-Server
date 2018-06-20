# NSDeallai-Server [![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/JihunDev/nsdeallai-server)

Node.js와 Socket.io를 이용한 P2P 거래를 위한 서버



## About the Project

- App에서 평점 DB 저장
- 유저 회원가입 DB 저장
- 채팅기능



## Project status

팀 해체로 개발 중지



## Getting Started

### Requirements
* Node.js
* Npm
* Socket.io
* MariaDb

### Installation

#### Node.js

의존성 설치

```shell
# yum install gcc gcc-c++
# yum install openssl-devel
# yum install makeㅡ# yum install wget
```



Node.js 다운로드

```shell
# wget http://nodejs.org/dist/v0.10.1/node-v0.10.1.tar.gz
```



Node.js 설치

```shell
# tar xvzf node-v0.10.1.tar.gz
# cd node-v0.10.1
# ./configure --prefix=/opt/node-v0.10.1
# make && make install
```



Node.js 환경설정

```shell
# vi /etc/profile
-- 추가
export PATH=$PATH:/opt/node-v0.10.1/bin
```



변경사항 적용

```shell
# source /etc/profile
```



Node.js 설치확인

```shell
# node -v
```



forever 설치

```Shell
# cd /opt/node-v0.10.1/bin# ./npm install forever -g**
```



#### NPM

Mariasql 설치

```shell
# npm install npm -g
# npm install mariasql 
```



#### MariaDb

Repository 등록(x86)

```shell
$ vi /etc/yum.repos.d/MariaDB.repo
```



MariaDB 설치(x86)

```shell
vi
# MariaDB 5.5 CentOS repository list - created 2013-08-11 14:21 UTC
# http://mariadb.org/mariadb/repositories/
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/5.5/centos6-x86
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
```



MariaDB 설치(x64)  

```shell
# MariaDB 10.0 CentOS repository list - created 2014-03-12 12:46 UTC  
# http://mariadb.org/mariadb/repositories/  
[mariadb] 
name = MariaDB  
baseurl = http://yum.mariadb.org/5.5/centos6-amd64  gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB  
gpgcheck=1** 
```



YUM을 이용한 MariaDB 5.5 install

```shell
# yum install MariaDB-server MariaDB-client -y
```



### Usage

MariaDB 시작

```shell
$ service mysql start
$ chkconfig mysql on
```



MariaDB 암호 설정

```shell
$ mysqladmin -u root password
```



MariaDB 실행

```shell
$ mysql -u root -p mysql
```



## Authors and acknowledgment

개인사정으로 끝까지 개발하지 못했으나 개발 기간 동안 열심히 해준 팀원들 고마워요!



## License

[MIT](https://github.com/JihunDev/NSDeallai-Server/blob/master/LICENSE)