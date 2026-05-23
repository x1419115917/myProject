pipeline {
    agent any

    environment {
        // 根据你的项目修改这些变量
        NODE_VERSION = 'NodeJS-18'          // 与 Jenkins 中配置的 NodeJS 工具名一致
        PROJECT_DIR = '/var/lib/jenkins/workspace/react-deploy'  // 工作空间（一般自动）
        DEPLOY_DIR = '/var/www/my-website'  // Nginx 静态文件目录
        GIT_REPO = 'https://github.com/x1419115917/myProject.git'  // 替换成你的仓库地址
        BRANCH = 'master'
    }

    // triggers {
    //     // 每 5 分钟检查一次 Git 仓库更新，有更新则自动触发（Poll SCM）
    //     pollSCM('H/5 * * * *')
    // }

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM',
                    branches: [[name: "${BRANCH}"]],
                    userRemoteConfigs: [[
                        url: "${GIT_REPO}",
                        // credentialsId: 'gitee-credentials'  // 需要在 Jenkins 中配置 Gitee 凭据，若公开仓库可省略
                    ]]
                ])
            }
        }

        stage('Install Dependencies') {
            steps {
                // 使用 NodeJS 环境执行 npm install
                nodejs("${NODE_VERSION}") {
                    sh 'npm install --registry=https://registry.npmmirror.com'
                }
            }
        }

        stage('Build') {
            steps {
                nodejs("${NODE_VERSION}") {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    echo "Deploying to ${DEPLOY_DIR}..."
                    sudo rm -rf ${DEPLOY_DIR}/*
                    sudo cp -r build/* ${DEPLOY_DIR}/
                    echo "Deploy completed."
                '''
            }
        }

        // stage('Optional: Restart Nginx') {
        //     steps {
        //         // 通常静态文件替换无需重启，仅当需要时取消注释
        //         // sh 'sudo systemctl reload nginx'
        //     }
        // }
    }

    post {
        success {
            echo '✅ 部署成功！'
        }
        failure {
            echo '❌ 部署失败，请检查日志。'
        }
    }
}