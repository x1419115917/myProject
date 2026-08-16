pipeline {
    agent any

    tools {
        nodejs 'Node16'
    }

    environment {
        CI = 'true'
        NODE_ENV = 'production'
        NODE_OPTIONS = '--openssl-legacy-provider --max-old-space-size=4096'
    }

    options {
        timestamps()
        timeout(time: 25, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '20'))
    }

    stages {
        stage('Checkout') {
            steps {
                echo '>>>> 拉取代码'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '>>>> 安装依赖'
                sh '''
                    node -v
                    npm -v
                    if [ -f package-lock.json ]; then
                        npm ci --no-audit --no-fund
                    else
                        npm install --no-audit --no-fund
                    fi
                '''
            }
        }

        stage('Build') {
            steps {
                echo '>>>> 执行前端构建'
                sh 'npm run build'
            }
        }

        stage('Archive') {
            steps {
                echo '>>>> 归档构建产物'
                archiveArtifacts artifacts: 'build/**/*', fingerprint: true
            }
        }

        stage('Deploy') {
            steps {
                echo '>>>> 发布静态文件'
                sh '''
                    DEPLOY_DIR="/var/www/hello-react"
                    mkdir -p "$DEPLOY_DIR"
                    rm -rf "$DEPLOY_DIR"/*
                    cp -r build/* "$DEPLOY_DIR"/
                    echo "已部署到 $DEPLOY_DIR"
                '''
            }
        }
    }

    post {
        success {
            echo '✅ 构建和部署成功'
        }
        failure {
            echo '❌ 构建失败，请检查日志'
        }
    }
}
