pipeline {
    agent any

    tools {
        nodejs "NodeJS_20"   // The NodeJS installation you defined in Jenkins
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
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo "Building React app..."
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying to GitHub Pages..."
                sh 'npm run deploy'
            }
        }
    }

    post {
        success {
            echo "✅ Build & Deployment Successful!"
        }
        failure {
            echo "❌ Build Failed!"
        }
    }
}
