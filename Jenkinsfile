pipeline {
    agent any

    tools {
        nodejs "NodeJS_20"   // the NodeJS you configured in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/ShibaniPraiseline/employee-leave-tracker.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing dependencies..."
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo "Building React App..."
                bat 'npm run build'
            }
        }

        stage('Deploy') {
            when {
                expression { return env.BRANCH_NAME == 'main' }
            }
            steps {
                echo "Deploying to GitHub Pages..."
                bat 'npm run deploy'
            }
        }
    }

    post {
        success {
            echo "✅ Build and Deploy Successful!"
        }
        failure {
            echo "❌ Build Failed!"
        }
    }
}
