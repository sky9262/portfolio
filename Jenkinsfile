def isUnix() {
    return System.getProperty("os.name").toLowerCase().contains("linux")
}

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
                    if (isUnix()) {
                        sh 'docker tag portfolio:${env.BUILD_ID} portfolio:latest'
                    } else {
                        bat 'docker tag portfolio:${env.BUILD_ID} portfolio:latest'
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
