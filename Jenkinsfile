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
          sh 'docker build -t portfolio .'
          sh 'docker run -v ${WORKSPACE}:/app -w /app portfolio npm install'
          sh 'docker run -v ${WORKSPACE}:/app -w /app portfolio npm test'
        } else {
          bat 'docker build -t portfolio .'
          bat 'docker run -v %WORKSPACE%:/app -w /app portfolio npm install'
          bat 'docker run -v %WORKSPACE%:/app -w /app portfolio npm test'
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
