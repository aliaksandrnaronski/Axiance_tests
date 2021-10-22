pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                bat 'npm install'
            }
        }
        stage('parallel') {
            parallel {
                // start several test jobs in parallel, and they all
                // will use Cypress Dashboard to load balance any found spec files
                stage('Run tests in parallel A') {
                    steps {
                        bat 'npx cypress run --record --key 4b950be2-8bf0-4a54-8ce7-0f18b5d246a7 --parallel'
                    }
                }
                stage('Run tests in parallel B') {
                    steps {
                        bat 'npx cypress run --record --key 4b950be2-8bf0-4a54-8ce7-0f18b5d246a7 --parallel'
                    }
                }
                stage('Run tests in parallel C') {
                    steps {
                        bat 'npx cypress run --record --key 4b950be2-8bf0-4a54-8ce7-0f18b5d246a7 --parallel'
                    }
                }
            }
        }
    }
}