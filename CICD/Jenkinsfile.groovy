pipeline {
    agent any

    tools {
        nodejs 'NodeJS-18'
    }

    environment {
        CI = 'true'
        // 不能设置成 production，否则 devDependencies 不会安装，cross-env 会缺失
        NODE_ENV = 'development'
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
                nodejs('NodeJS-18') {
                    sh '''
                        node -v
                        npm -v
                        npm install --include=dev --no-audit --no-fund --registry=https://registry.npmmirror.com
                    '''
                }
            }
        }

        stage('Build') {
            steps {
                echo '>>>> 执行前端构建'
                nodejs('NodeJS-18') {
                    sh 'npm run build'
                }
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
