# 🚀 Simple Express Application with Docker and Kubernetes 🛠️

This repository contains a simple Express.js application Dockerized and ready for deployment on Kubernetes. The application serves a "Hello, World!" message on a specified port.

## Prerequisites 📋

- [Node.js](https://nodejs.org/) installed
- [Docker](https://www.docker.com/) installed
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) installed
- Access to a Kubernetes cluster (local, Minikube, or cloud-based)

## Getting Started 🏁

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/express-docker-kubernetes.git
   cd express-docker-kubernetes
   ```

2. **Build Docker Image:**

   ```bash
   docker build -t yourusername/express-app .
   ```

3. **Push to Docker Hub:**

   ```bash
   docker push yourusername/express-app
   ```

4. **Deploy to Kubernetes:**

   ```bash
   kubectl apply -f kubernetes/deployment.yaml
   ```

5. **Expose the Service:**

   ```bash
   kubectl expose deployment express-app --type=LoadBalancer --port=80
   ```

6. **Access the Application:**

   Once the service is exposed, you can access the application using the external IP:

   ```bash
   kubectl get service express-app
   ```

   Open a web browser and navigate to the external IP and port 80.

## Clean Up 🧹

To clean up the resources created in Kubernetes:

```bash
kubectl delete service,deployment express-app
```