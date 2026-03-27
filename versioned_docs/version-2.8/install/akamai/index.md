---
title: Akamai
description: Review options for installation for Kubefirst Pro using Akamai
keywords: [akamai, kubernetes, containers, clusters, kubefirst, konstruct] 
sidebar_position: 1
---

## Summary

Kubefirst and Kubefirst Pro support provisioning in Akamai with two main installation methods, through the Kubefirst CLI, and through our UI.

In this section of our documentation you can find content specific to our Akamai support including prerequisites and installation guides specific to using Kubefirst and Akamai.

:::note

Linode was [acquired by Akamai in 2022](https://www.akamai.com/newsroom/press-release/akamai-completes-acquisition-of-linode), but some branding remains on Akamai. If you see references to Linode these are applicable to Akamai.

:::

## Akamai Supported Installs

Kubefirst can be installed with Akamai in two ways:

- Through the Kubefirst CLI with MacOS, Linux, or Windows (using WSL and Ubuntu)
- With Akamai and the Kubefirst UI.
  - One option uses a Kubefirst command _Recommended for users who do not have an existing cluster_
  - The second option uses Helm and is _Recommended for users with an existing cluster for install_

Regardless of the installation method, the functionality remains the same for Kubefirst and Kubefirst Pro, and any features including cluster creation and management are consistent across clouds.

## Installation Components

The Akamai install and provisioning process creates the following:

- a Kubernetes management cluster in Akamai cloud
- a Git repository (`gitops`) from our [`gitops-template`](https://github.com/konstructio/gitops-template) in your selected Git provider
- an Argo CD installation bootstrapped to the `gitops` repository to power the Kubefirst platform
- all the platform applications using GitOps (from the `/registry` folder in the `gitops` repository)
- a Terraform configuration for Vault (from the `/terraform/vault` folder in the `gitops` repository)
- a Terraform configuration for the `gitops` repository to automatically run Terraform executions through Atlantis
- an Argo Workflows integration with your selected Git provider
- an Argo Workflows cluster workflow templates to build containers, publish Helm charts, and provide a GitOps delivery pipeline
  - Learn more about [cluster workflow templates in Argo's docs here.](https://argo-workflows.readthedocs.io/en/latest/cluster-workflow-templates/)
- a [metaphor installation](https://github.com/konstructio/gitops-template/tree/main/metaphor) for our sample application that has built-in automation to demonstrate app delivery
- Access to the Kubefirst UI if desired, while you can opt-out of this functionality access to the Kubefirst UI and Kubefirst Pro are free for your management cluster
