pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies') {
      steps {
        if (isUnix()) {
          sh 'npm install'
        } else {
          bat 'npm install'
        }
      }
    }
    
    stage('Code quality checks') {
      steps {
        if (isUnix()) {
          sh 'npm run lint'
        } else {
          bat 'npm run lint'
        }
      }
    }

    stage('Build the Docker image') {
      steps {
        script {
          def image = docker.build("portfolio:${env.BUILD_ID}")
          sh 'docker tag portfolio:${env.BUILD_ID} portfolio:latest'
        }
      }
    }

    stage('Test') {
      steps {
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
      steps {
        if (isUnix()) {
          sh 'docker run -p 3000:3000 portfolio:${env.BUILD_ID}'
        } else {
          bat 'docker run -p 3000:3000 portfolio:${env.BUILD_ID}'
        }
      }
    }
  }
}
