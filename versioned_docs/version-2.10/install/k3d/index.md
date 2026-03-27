---
title: k3d (Local)
description: Review options for installation for Kubefirst using our local install with k3d
keywords: [k3d, local, open source, kubernetes, containers, clusters, kubefirst, konstruct] 
sidebar_position: 7
---

## Summary

Kubefirst supports local provisioning [using k3d](https://k3d.io/stable/) through the CLI with with MacOS, Linux, or Windows (using WSL and Ubuntu) to host your native cloud environment locally.

## k3d Install

- [Verify the prerequisites](../k3d/k3d-prereq.md)
- Complete [the install steps](../k3d/k3d-install.md)

### Installation Components

The k3d install and provisioning process creates the following:

- a Kubernetes multinode k3d Kubernetes cluster on your localhost.
- a Git repository (`gitops`) from our [`gitops-template`](https://github.com/konstructio/gitops-template) in your selected Git provider
- an Argo CD installation bootstrapped to the `gitops` repository to power the Kubefirst platform
- all the platform applications using GitOps (from the `/registry` folder in the `gitops` repository)
- a Terraform configuration for Vault (from the `/terraform/vault` folder in the `gitops` repository)
- a Terraform configuration for the `gitops` repository to automatically run Terraform executions through Atlantis
- an Argo Workflows integration with your selected Git provider
- an Argo Workflows cluster workflow templates to build containers, publish Helm charts, and provide a GitOps delivery pipeline
  - Learn more about [cluster workflow templates in Argo's docs here.](https://argo-workflows.readthedocs.io/en/latest/cluster-workflow-templates/)
- a [metaphor installation](https://github.com/konstructio/gitops-template/tree/main/metaphor) for our sample application that has built-in automation to demonstrate app delivery

## Additional Info

Review common questions related to the k3d install check out the [k3d FAQ page](../k3d/k3d-faq.md)

For details on deprovisioning, refer to the [k3d deprovisioning docs here.](../k3d/k3d-deprovision.md)
