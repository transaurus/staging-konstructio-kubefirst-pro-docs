---
title: Azure
description: Review information for installation of Kubefirst using Azure
keywords: [azure, microsoft, kubernetes, containers, clusters, kubefirst, konstruct] 
sidebar_position: 3
---

## Summary

Kubefirst and Kubefirst Pro support provisioning in Azure through the Kubefirst CLI.

In this section of our documentation you can find content specific to our Azure support including the prerequisites and installation guides, specific to using Kubefirst and Azure.

## Installation Components

The Azure install and provisioning process creates the following:

- a Kubernetes management cluster in Azure
- a Git repository (`gitops`) from our [`gitops-template`](https://github.com/konstructio/gitops-template) in your selected Git provider
- an Argo CD installation bootstrapped to the `gitops` repository to power the Kubefirst platform
- all the platform applications using GitOps (from the `/registry` folder in the `gitops` repository)
- a Terraform configuration for Vault (from the `/terraform/vault` folder in the `gitops` repository)
- a Terraform configuration for the `gitops` repository to automatically run Terraform executions through Atlantis
- an Argo Workflows integration with your selected Git provider
- an Argo Workflows cluster workflow templates to build containers, publish Helm charts, and provide a GitOps delivery pipeline
  - Learn more about [cluster workflow templates in Argo's docs here.](https://argo-workflows.readthedocs.io/en/latest/cluster-workflow-templates/)
- a [metaphor installation](https://github.com/konstructio/gitops-template/tree/main/metaphor) for our sample application that has built-in automation to demonstrate app delivery
- Access to the Kubefirst UI if desired, while you can opt-out of this functionality access to the Kubefirst UI and Kubefirst Pro.
