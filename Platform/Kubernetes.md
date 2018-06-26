# Kuberentes

A Huge pool of resources.

## Concepts

### Nodes
The basis unit or instance that performs a task. There are 2 types of nodes.

#### Master node

Is the control plane, have control over anythign that happens in the cluster.

#### Worker node

Performs the work.

### Pod

* A set of one or more containers that act as a unit and are scheduled onto a VM together
* Share a local network and can share file system volumes

### Deployment

* Responsible for creating and updating Pods
* Kubernetes will manage state based on the definitions provide
* Can scale up and down to meet demand
* Can roll back to an older version or roll forward

### Service

* Defines a way to access Pods in a consistent way
* Services find the Pod to route traffic to based on the Labels/Selectors in the manifest
  * Inside the cluster, they perform load balancing
  * They can also interact with GKE to create external load balancers