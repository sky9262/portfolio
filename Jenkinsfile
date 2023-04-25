pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'sudo docker build -t portfolio .'
      }
    }

    stage('Deploy') {
      steps {
        sh 'sudo docker run -d -p 3000:3000 portfolio'
      }
    }
  }
}
