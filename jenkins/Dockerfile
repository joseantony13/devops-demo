FROM jenkins/jenkins:lts

USER root
# install docker client + git
RUN apt-get update && \
    apt-get install -y docker.io git && \
    rm -rf /var/lib/apt/lists/*

USER jenkins
# install essential plugins (jenkins-plugin-cli included in image)
RUN jenkins-plugin-cli --plugins prometheus workflow-aggregator git docker-workflow
