---
title: Civo
description: Explore details for using Kubefirst and Kubefirst Pro with Civo including install, administration, and deprovisioning
keywords: [civo, kubernetes, containers, clusters, kubefirst, konstruct, support, install, admin, provisioning] 
sidebar_position: 4
---

## Summary

Kubefirst has extensive support for Civo with several installation methods.

In this section of our documentation you can find content specific to our Civo support including detailed installation guides and deprovisioning docs specific to Civo.

## Civo Supported Installs

Kubefirst can be installed with Civo as follows:

- With [Civo and the Kubefirst CLI](../civo/cli/)
- With [Civo Marketplace](../civo/marketplace/)
- With [Civo and Helm](../civo/helm/) - _Recommended for users with an existing cluster_
- With [Civo and the UI](../civo/ui/) - _Recommended for users who do not have an existing cluster_

Regardless of the installation method, the functionality remains the same for Kubefirst, and any features including cluster creation and management are consistent across clouds.

## Installation Components

The Civo install and provisioning process creates the following:

- a Kubernetes management cluster in Civo Cloud
- a Git repository (`gitops`) from our [`gitops-template`](https://github.com/konstructio/gitops-template) in your selected Git provider
- an Argo CD installation bootstrapped to the `gitops` repository to power the
  Kubefirst platform
- all the platform applications using GitOps (from the `/registry` folder in the `gitops` repository)
- a Terraform configuration for Vault (from the `/terraform/vault` folder in the `gitops` repository)
- a Terraform configuration for the `gitops` repository to automatically run Terraform executions through Atlantis
- an Argo Workflows integration with your selected Git provider
- an Argo Workflows cluster workflow templates to build containers, publish Helm charts, and provide a GitOps delivery pipeline
  - Learn more about [cluster workflow templates in Argo's docs here.](https://argo-workflows.readthedocs.io/en/latest/cluster-workflow-templates/)
- a [metaphor installation](https://github.com/konstructio/gitops-template/tree/main/metaphor) for our sample application that the built-in automation to demonstrate app delivery
- Access to the Kubefirst UI if desired, while you can opt-out of this functionality access to the Kubefirst UI and Kubefirst Pro are free for your management cluster.

## Civo Limitations

### DNS

Using subdomains with Civo DNS won't create a virtual cluster successfully. You can do it using Cloudflare as a DNS provider or use root domain names.
