FROM node:lts

ARG USERNAME=node

ENV CHROME_BIN="/usr/bin/chromium-browser"



RUN apt-get update && \
    apt-get -y install --no-install-recommends apt-utils dialog 2>&1 && \
    apt-get -y upgrade 2>&1 && \
    apt-get -y install sudo git 2>&1 && \
    echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME && \
    chmod 0440 /etc/sudoers.d/$USERNAME && \
    npm install -g npm && \
    apt-get autoremove -y && \
    apt-get clean -y && \
    rm -fr /var/lib/apt/lists/*

RUN npm install -g @angular/cli 

RUN mkdir -p /workspace/client/node_modules && \
    chown -R $USERNAME:$USERNAME /workspace/client/node_modules

WORKDIR /workspace/

USER $USERNAME