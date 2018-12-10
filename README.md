## Commands
1. kubectl scale deployments/<name> --replicas=4
2. kubectl get pods -o wide


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

## Steps:
1. Install azure cli
2. Install kubectl using azure cli
3. Create AKS
4. Get cerdentials to the kubectl
5. Create a docker image
6. Push the image to a repo
7. Create the config file
8. apply the config file


## Clear the kubectl config  
    kubectl config unset users  
    kubectl config unset contexts  
    kubectl config unset clusters  
    kubectl config unset current-context  

## Login to azure
    az login

## Setup credentials
    az aks get-credentials --resource-group POCs --name rpsaascluster

## Copy the server url and config file - Done


## to start kubernetes dashboard
    az aks browse --resource-group POCs --name rpsaascluster --listen-port 789
    
    
## Useful links
[https://matthewpalmer.net/kubernetes-app-developer/articles/kubernetes-apiversion-definition-guide.html](https://matthewpalmer.net/kubernetes-app-developer/articles/kubernetes-apiversion-definition-guide.html)





