FROM jenkins/jenkins:lts

USER root

# install docker client + git
RUN apt-get update && \
    apt-get install -y docker.io git curl && \
    rm -rf /var/lib/apt/lists/*

# install Node.js 18
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

USER jenkins

# install essential plugins
RUN jenkins-plugin-cli --plugins prometheus workflow-aggregator git docker-workflow
