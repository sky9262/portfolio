pipeline {
  agent any

  stages {
    stage('Checkout') {
      script  {
        checkout scm
      }
    }

    stage('Install dependencies') {
      script  {
        if (isUnix()) {
          sh 'npm install'
        } else {
          bat 'npm install'
        }
      }
    }
    
    stage('Code quality checks') {
      script  {
        if (isUnix()) {
          sh 'npm run lint'
        } else {
          bat 'npm run lint'
        }
      }
    }

    stage('Build the Docker image') {
      script  {
        script {
          def image = docker.build("portfolio:${env.BUILD_ID}")
          sh 'docker tag portfolio:${env.BUILD_ID} portfolio:latest'
        }
      }
    }

    stage('Test') {
      script  {
        script {
          if (isUnix()) {
            sh 'npm run dev'
          } else {
            bat 'npm run dev'
          }
        }
      }
    }

    stage('Start the Docker container') {
      script  {
        if (isUnix()) {
          sh 'docker run -p 3000:3000 portfolio:${env.BUILD_ID}'
        } else {
          bat 'docker run -p 3000:3000 portfolio:${env.BUILD_ID}'
        }
      }
    }
  }
}
