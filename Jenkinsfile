pipeline {
    agent any

    tools {
        nodejs "NodeJS_20"  // Configure this in Jenkins global tools
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ShibaniPraiseline/employee-leave-tracker.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat "npm install"
            }
        }

        stage('Build') {
            steps {
                bat "npm run build"
            }
        }
    }

    post {
        success {
            echo "React project built successfully!"
        }
        failure {
            echo "Build failed!"
        }
    }
}
