
pipeline {
    agent {
        label 'mannu'
    }

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Manish-12498/react-app-learning-react-.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build -t textutil-vite:latest .
                '''
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                    docker rm -f textutil-vite || true
                '''
            }
        }

        stage('Deploy React App') {
            steps {
                sh '''
                    docker run -d \
                      --name textutil-vite \
                      --restart unless-stopped \
                      -p 80:80 \
                      textutil-vite:latest
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                    for i in $(seq 1 15); do
                        if curl -fsS http://localhost/ -o /dev/null; then
                            echo "Vite React app is running on port 80"
                            exit 0
                        fi
                        sleep 2
                    done

                    docker logs textutil-vite
                    exit 1
                '''
            }
        }
    }

    post {
        success {
            echo 'Vite React deployment successful!'
        }

        failure {
            echo 'Pipeline failed. Check Console Output.'
        }
    }
}
