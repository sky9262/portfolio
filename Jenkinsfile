pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build') {
      steps {
        script {
          if (isUnix()) {
            sh 'docker build -t portfolio .'
          } else {
            bat 'docker build -t portfolio .'
          }
        }
      }
    }
    
    stage('Test') {
      steps {
        script {
          if (isUnix()) {
            sh 'docker run -d portfolio npm install'
            sh 'docker run -d portfolio npm run dev'
          } else {
            bat 'docker run -d portfolio npm install'
            bat 'docker run -d portfolio npm run dev'
          }
        }
      }
    }

    stage('Deploy') {
      steps {
        script {
          if (isUnix()) {
            sh 'docker run -d -p 3000:3000 portfolio'
          } else {
            bat 'docker run -d -p 3000:3000 portfolio'
          }
        }
      }
    }
  }
}
