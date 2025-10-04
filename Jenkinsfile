pipeline {
  agent any
  environment {
    APP_NAME = "devops-demo-app"
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Test') {
      steps {
        // run tests in official node docker image (ephemeral)
        sh 'docker run --rm -v $WORKSPACE/app:/workspace -w /workspace node:18-alpine sh -c "npm ci && npm test"'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t $APP_NAME:${BUILD_NUMBER} ./app'
      }
    }

    stage('Deploy') {
      steps {
        sh '''
          docker stop ${APP_NAME} || true
          docker rm ${APP_NAME} || true
          docker run -d --name ${APP_NAME} -p 80:3000 $APP_NAME:${BUILD_NUMBER}
        '''
      }
    }
  }

  post {
    always {
      echo "Build ${env.BUILD_NUMBER} finished with status ${currentBuild.currentResult}"
    }
  }
}
