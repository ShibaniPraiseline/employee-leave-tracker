pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/ShibaniPraiseline/employee-leave-tracker.git'
            }
            }
        }
        stage('Build') {
            steps {
                sh 'javac HelloWorld.java'
            }
        }
        stage('Test') {
            steps {
                sh 'java HelloWorld'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying Application...'
            }
        }
    }
}
