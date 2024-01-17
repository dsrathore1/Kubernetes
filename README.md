<h1 align='center'> Kubernetes Learning Journey 🎓</h1>

Welcome to my Kubernetes learning journey! 🌟 In this repository, I've organized my exploration of Kubernetes by creating a folder for each Kubernetes object. Each folder contains YAML files for the respective object. Additionally, I've dockerized the applications and set up continuous integration using CircleCI.

## Objectives 🏹

- Gain a deeper understanding of Kubernetes concepts.
- Practice creating various Kubernetes objects.
- Dockerize applications for containerization.
- Implement continuous integration for seamless development.

## Folder Structure 📂

- **/pods:** YAML files for Kubernetes Pods.
- **/services:** YAML files for Kubernetes Services.
- **/deployments:** YAML files for Kubernetes Deployments.
- **/replica-sets:** YAML files for Kubernetes ReplicaSets.
- **/configmaps:** YAML files for Kubernetes ConfigMaps.
- **/secrets:** YAML files for Kubernetes Secrets.
- **/ingresses:** YAML files for Kubernetes Ingress resources.
- **/persistent-volumes:** YAML files for Kubernetes Persistent Volumes.
- **/persistent-volume-claims:** YAML files for Kubernetes Persistent Volume Claims.

## Dockerization 🐳

I've containerized the applications associated with each Kubernetes object. The Dockerfiles and related configuration can be found in the respective folders.

## Continuous Integration with CircleCI 🔄

To ensure smooth and continuous development, I've integrated CircleCI into the workflow. Each push to this repository triggers a build and test pipeline, ensuring the reliability of the Kubernetes configurations and Docker images.

## Kubernetes Objects Definitions 📝

### Pods 🧑‍🚀

A Pod is the smallest and simplest unit in the Kubernetes object model. It represents a single instance of a running process in a cluster.

### Services ⚙️

A Service defines a logical set of Pods and a policy by which to access them. It enables external traffic to access the applications running in the Pods.

### Deployments 🚀

A Deployment provides declarative updates to applications. It allows you to describe an application's life cycle, such as which images to use for the app, the number of Pods, and how to update them.

### ReplicaSets 🔍

A ReplicaSet ensures a specified number of replicas (instances) of a pod are running at all times. It is part of the Kubernetes "apps" API group and provides advanced features for managing pod replication.

### ConfigMaps ⚙️

A ConfigMap allows you to decouple configuration artifacts from the container image, keeping containerized applications portable across different environments.

### Secrets 🔒

Secrets are similar to ConfigMaps but are intended to store sensitive information, such as passwords or API keys.

### Ingresses 🌐

An Ingress is an API object that manages external access to services within a cluster. It provides HTTP and HTTPS routing to services based on rules.

### Persistent Volumes (PVs) 💾

A Persistent Volume is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned.

### Persistent Volume Claims (PVCs) 💾

A Persistent Volume Claim is a request for storage by a user.

## Getting Started 🚀

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/dsrathore1/kubernetes-learning-journey.git
   cd kubernetes-learning-journey
   ```

2. **Explore Kubernetes Objects:**

   Dive into each folder to explore YAML configurations for different Kubernetes objects.

3. **Dockerize Applications:**

   Explore the Dockerfiles and configurations in each folder to understand how applications are containerized.

4. **Continuous Integration:**

   Check the CircleCI configuration files to understand the build and test pipeline.

## Contributing 🤝

If you have insights, suggestions, or improvements, feel free to contribute! Create a pull request, and let's learn together! 🌐

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
