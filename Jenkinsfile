#!groovy

node('EJ2PublishDocs') {
    try {
        deleteDir()

        stage('Import') {
            git url: 'http://github.com/essential-studio/ej2-groovy-scripts.git', branch: 'master', credentialsId: env.GithubCredentialID
            shared = load 'src/shared.groovy'
        }

        stage('Checkout') {
            checkout scm
            shared.getProjectDetails()
            shared.gitlabCommitStatus('running')
        }

        stage('Install') {
            shared.runShell('npm install')
        }
        
        stage('Test') {
            shared.test()
        }

        stage('Publish') {
            shared.publish()
        }

        shared.gitlabCommitStatus('success')
        deleteDir()
    }
    catch(Exception e) {
        shared.throwError(e)
    }
}
