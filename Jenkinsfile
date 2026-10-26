
pipeline {
    agent {
        label 'mannu'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Manish-12498/react-app-learning-react-.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t react-app-learning:latest .'
            }
        }
    }

    post {
        success {
            echo 'React app built successfully!'
        }

        failure {
            echo 'Pipeline failed. Check Console Output.'
        }
    }
}
