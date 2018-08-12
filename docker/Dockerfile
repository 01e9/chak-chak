FROM ubuntu:18.04

ARG NODEJS_VERSION='10'
ARG NPM_VERSION='6.2.0'
ARG TINI_VERSION='0.18.0'

RUN apt-get update \
    && apt-get install -y \
        wget tar git man nano htop curl bash-completion \
        libgtk2.0-0 libcanberra-gtk-module libxext-dev libxrender-dev libxtst-dev libxslt-dev dmz-cursor-theme \
    && (curl -sL https://deb.nodesource.com/setup_${NODEJS_VERSION}.x | bash -) \
    && apt-get install -y \
        build-essential nodejs \
    && npm install -g npm@${NPM_VERSION} \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

ADD https://github.com/krallin/tini/releases/download/v${TINI_VERSION}/tini /tini
RUN chmod +x /tini

ENTRYPOINT ["/tini", "--"]
CMD ["sleep", "infinity"]

