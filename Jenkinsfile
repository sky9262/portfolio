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
        sh 'npm install'
      }
    }
    
    stage('Code quality checks') {
      steps {
        sh 'npm run lint'
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
    
    stage('Start the Docker container') {
      steps {
        sh 'docker run -p 3000:3000 portfolio:${env.BUILD_ID}'
      }
    }
  }
}
