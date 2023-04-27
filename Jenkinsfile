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
          docker.image('node:18.14.0').run('--rm -v ${pwd}:/app -w /app npm install')
          docker.image('node:18.14.0').run('--rm -v ${pwd}:/app -w /app npm test')
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
