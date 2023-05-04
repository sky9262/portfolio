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
  
  // Platform-specific function to check if the system is Unix-based
  // This is needed because the "isUnix()" function doesn't work on Windows
  // Source: https://stackoverflow.com/a/57841322/13944658
  def isUnix() {
    return System.properties['os.name'].toLowerCase().contains('nix') ||
           System.properties['os.name'].toLowerCase().contains('nux') ||
           System.properties['os.name'].toLowerCase().contains('aix');
  }
}
