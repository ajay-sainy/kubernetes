## Configuration
- All-in-One Single-Node Installation (Minikube)
- Single-Node etcd, Single-Master, and Multi-Worker Installation (?)
- Single-Node etcd, Multi-Master, and Multi-Worker Installation (?)
- Multi-Node etcd, Multi-Master, and Multi-Worker Installation (AKS)

## Setup
[https://kubernetes.io/docs/setup/](https://kubernetes.io/docs/setup/)

## Setup from scratch
[https://kubernetes.io/docs/setup/scratch/](https://kubernetes.io/docs/setup/scratch/)
[https://github.com/kelseyhightower/kubernetes-the-hard-way](https://github.com/kelseyhightower/kubernetes-the-hard-way)

## Chapter 7
[https://courses.edx.org/courses/course-v1:LinuxFoundationX+LFS158x+1T2018/course/#block-v1:LinuxFoundationX+LFS158x+1T2018+type@chapter+block@d2adb4426b70467b9c27d54a50704aef](https://courses.edx.org/courses/course-v1:LinuxFoundationX+LFS158x+1T2018/course/#block-v1:LinuxFoundationX+LFS158x+1T2018+type@chapter+block@d2adb4426b70467b9c27d54a50704aef)

# Demo
## Steps:
1. Install azure cli
2. Install kubectl using azure cli
3. Create a docker image [NodeJs](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
4. Create ACR
5. Authenticate with ACR (az acr login --name \<acrName>)
4. Push the image to a repo (docker push \<imagetag>)
5. Create AKS
6. Get cerdentials to the kubectl (az aks get-credentials --resource-group k8s --name k8s)
7. Create the deployment yaml
8. Apply the deployement yaml


## Commands
    1. kubectl scale deployments/<name> --replicas=4
    2. kubectl get pods -o wide
    3. kubectl proxy --port=8080
    4. kubectl get --raw /apis | python -mjson.tool    
    5. kubectl config unset users  
       kubectl config unset contexts  
       kubectl config unset clusters  
       kubectl config unset current-context  
    6. kubectl config set-context k8s --namespace=working-namespace

## Login to azure
    az login

## Setup credentials
    az aks get-credentials --resource-group k8s --name k8s

## to start kubernetes dashboard
    az aks browse --resource-group k8s --name k8s --listen-port 789
    
    
## Useful links
[https://matthewpalmer.net/kubernetes-app-developer/articles/kubernetes-apiversion-definition-guide.html](https://matthewpalmer.net/kubernetes-app-developer/articles/kubernetes-apiversion-definition-guide.html)
