# MERN Stack Dockerized and Orchestrated with Kubernetes 🐳🚀

This repository demonstrates how to Dockerize and orchestrate a MERN (MongoDB, Express.js, React.js, Node.js) stack using Kubernetes. The setup includes configurations for deployment, service, and secrets. 🛠️

## Prerequisites 📋

Make sure you have the following installed on your machine:

- Docker 🐳
- Kubernetes (kubectl) ☸️
- Helm 🎩

## Usage 🚀

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/mern-stack-docker-k8s.git
    cd mern-stack-docker-k8s
    ```

2. Build Docker images for each service:

    ```bash
    docker-compose build
    ```

3. Push the built images to a container registry (replace `your-registry` with your actual registry):

    ```bash
    docker-compose push
    ```

4. Install Helm charts for MongoDB and the MERN stack:

    ```bash
    helm install mongodb ./charts/mongodb
    helm install mern-stack ./charts/mern-stack
    ```

5. Monitor the status of the deployed services:

    ```bash
    kubectl get pods
    kubectl get services
    ```

6. Access the MERN stack application:

    Find the external IP address of the Node.js service:

    ```bash
    kubectl get services
    ```

    Open your web browser and navigate to `http://<external-ip>:<node-port>`.

## Configuration ⚙️

- **MongoDB**: Configuration for MongoDB can be found in `./charts/mongodb/values.yaml`.
- **MERN Stack**: Configuration for the MERN stack services (Express.js and React.js) can be found in `./charts/mern-stack/values.yaml`.

## Secrets 🔐

Store sensitive information such as database credentials in Kubernetes secrets. To create a secret, use the following command:

```bash
kubectl create secret generic mern-stack-secret \
  --from-literal=MONGO_DB_USERNAME=<your-username> \
  --from-literal=MONGO_DB_PASSWORD=<your-password> \
  --from-literal=JWT_SECRET=<your-jwt-secret>
```

Refer to the secrets in the Helm charts (`./charts/mern-stack/values.yaml`) to use them in the application.

## Cleanup 🧹

To uninstall the deployed services and remove associated resources, use the following commands:

```bash
helm uninstall mongodb
helm uninstall mern-stack
```

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.