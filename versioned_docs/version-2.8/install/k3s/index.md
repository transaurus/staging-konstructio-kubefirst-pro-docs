---
title: K3s
description: Review options for installation for Kubefirst using the CLI and K3s
keywords: [k3s, open source, kubernetes, containers, clusters, kubefirst, konstruct] 
sidebar_position: 8
---

## Summary

Kubefirst supports local provisioning [using K3s](https://k3s.io/) through the CLI with with MacOS, Linux, or Windows (using WSL and Ubuntu) to host you native cloud environment locally.

## K3s Install

- [Verify the prerequisites](../k3s/k3s-prereq.md)
- Complete [the install steps](../k3s/k3s-install.md)

### Installation Components

The K3s install and provisioning process creates the following:

- a Kubernetes management cluster with K3s
- a Git repository (`gitops`) from our [`gitops-template`](https://github.com/konstructio/gitops-template) in your selected Git provider
- an Argo CD installation bootstrapped to the `gitops` repository to power the Kubefirst platform
- all the platform applications using GitOps (from the `/registry` folder in the `gitops` repository)
- a Terraform configuration for Vault (from the `/terraform/vault` folder in the `gitops` repository)
- a Terraform configuration for the `gitops` repository to automatically run Terraform executions through Atlantis
- an Argo Workflows integration with your selected Git provider
- an Argo Workflows cluster workflow templates to build containers, publish Helm charts, and provide a GitOps delivery pipeline
  - Learn more about [cluster workflow templates in Argo's docs here.](https://argo-workflows.readthedocs.io/en/latest/cluster-workflow-templates/)
- a [metaphor installation](https://github.com/konstructio/gitops-template/tree/main/metaphor) for our sample application that has built-in automation to demonstrate app delivery
