---
title: Cluster Management
description: Explore details on creating, deleting, and managing clusters in Kubefirst
keywords: [clusters, gpu, virtual clusters, gitops, kubernetes, containers, kubefirst, konstruct]
sidebar_position: 1
---

## Summary

After creating a new account with Kubefirst it’s easy to use the UI to add a new workload cluster. Kubefirst enables you to create, view, and delete clusters along with adding and managing services (applications) through our GitOps catalog.

## Cluster Details

### Management vs Workload Clusters

In Kubefirst, your setup includes one **management cluster** that is responsible for managing cluster operations, policy enforcement, and centralized governance of your platform and infrastructure.

Our **workload clusters** (physical, virtual, or GPU clusters) manage your workloads for services and applications in any of your desired environments (production, development, testing). For Business users on a single cloud, you can launch up to 10 clusters.

### Cluster Types

Kubefirst supports three cluster types: physical, virtual, and GPU clusters.

|Cluster Type | Details |
|-------------|---------|
|Physical     | A **Physical cluster** uses the managed Kubernetes service that your cloud provides. So in AWS this is an EKS cluster, in Azure this is an AKS cluster. They offer a reliable Kubernetes experience that offloads the burden of managing the Kubernetes control plane to the cloud provider.|
|Virtual      | A **Virtual cluster** uses vCluster to put a fully isolated Kubernetes cluster inside one of your other clusters. Virtual clusters provide multitenancy isolation without the cloud overhead of running another cluster in the cloud. |
|GPU          | A **GPU cluster** is a specialized type of physical cluster that uses GPU (Graphics Processing Unit) nodes or machines with specialized hardware for increased processing capacity. They offer parallel processing, enhanced memory, and fast data transfer to meet large compute needs. |

### Cluster Costs

The costs associated with clusters vary based on things like: the cloud provider you use, the services you deploy, and the cluster type.

In Kubefirst Pro (the Kubefirst UI) pricing for clusters is as follows:

- Management Cluster - _Free as part of your Kubefirst Pro installation_
- Virtual Clusters - _Running these in Kubefirst Pro is $0.33/cluster per hour for workload clusters._
- Physical Clusters - _Running these in Kubefirst Pro is $0.33/cluster per hour for workload clusters._
- GPU Clusters - _Running a GPU Cluster in Kubefirst Pro is the same price per cluster $0.33/cluster per hour but also incurs hardware costs determined by the cloud where the GPU cluster is provisioned._

For costs related to your provider, you can refer to the cloud for their pricing information.

- For example [you can use the service calculator in AWS](https://calculator.aws/#/addService)
- Azure offers a [general pricing calculator](https://azure.microsoft.com/en-us/pricing/calculator/)
- Check out details on [Civo pricing](https://www.civo.com/pricing)

#### General Pricing

Access to the UI (Kubefirst Pro) is free for all Kubefirst users and includes your management cluster. Add additional workload clusters by upgrading to Business for just $0.33 per cluster/per hour.

Kubefirst Pro at the Business tier offers one management cluster, and up to 10 workload clusters for a single cloud. For support of more than one cloud or for more than 10 clusters reach out to us for details on our Enterprise tier.

### How do I know what clusters I’m being billed for?

Kubefirst, including the Kubefirst UI, is free for all Kubefirst users and includes your management cluster. Review your billing details for Kubefirst under **Admin Settings → Plans → Billing in the UI.**

### Getting Support

Questions about your setup or these instructions? We’re here to help - [Join our Slack Community](https://konstructio.slack.com/) for support and get the answers you need!

## Managing Clusters

### Add a Cluster

These steps walk through the process of adding a new (physical) workload cluster to your Kubefirst Pro setup.

_Note: The Cluster creation process can take up to 20 minutes._

1. Select **Create Cluster** to launch the configuration.
2. Choose a cluster template:
   - **Kubefirst Template** - Default Kubefirst cluster configuration
   - **Custom Template** - Use your own Terraform modules (requires Kubefirst Pro 2.9+)
3. Complete the options as desired:
   - Environment cluster will host (optional) - Selecting an existing environment to include all of the services and applications configured for that environment on your workload cluster.
   - Cluster name
   - Cloud account that will host this cluster
   - Cloud region
   - Instance size
   - Number of nodes - defaults to 2 (recommended minimum)
4. If using a custom template, define the location and provide a Personal Access Token if private
5. Once you have selected your preferred options select **Create Cluster**.

For custom templates, see [Custom Cluster Templates](./custom-templates.md).

### Delete a Cluster

1. Navigate to the Cluster management view in the Kubefirst UI.
2. Select the cluster you want to delete and click on the individual cluster to display the full details.
3. From the context menu on the top right (three little dots), select **Delete Cluster**.

#### Deletion Process

Once you select Delete Cluster the process is as follows:

- Selecting **Delete Cluster** removes the corresponding content in your `gitops` repository. You can check that process in your `gitops` repository to verify that cluster details were deleted.
- The removal of the cluster in `gitops` triggers Argo CD and removes any associated applications. You can check that process in Argo CD.
- The final step, removing the `infrastructure` app removes the cluster from the cloud.
- Once Argo CD shows a `clusters` app that is healthy and fully synced you can consider the deletion complete.

Check out [our documentation on GitOps](../gitops.md) and our documentation on [Terraform and Argo CD](../terraform.md) to learn more about what you can see and do "behind the scenes".
