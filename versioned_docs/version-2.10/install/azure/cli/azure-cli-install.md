---
title: Azure CLI Install
description: Installation steps for Kubefirst with Azure and the CLI
keywords: [install, installation, setup, provisioning, azure, microsoft, kubernetes, containers, clusters, kubefirst, konstruct]
sidebar_position: 2
---

## Summary

After reviewing and confirming you have all of the prerequisites required for this installation process review the docs here to walk through all of the steps for installation with Azure and the Kubefirst CLI

## Installing Kubefirst

To get started with this installation you will need to have your git token (for GitHub or GitLab) along with the details associated with your Azure account.

Kubefirst assumes you will also use Azure to manage DNS, to use Cloudflare use the tip below.

### Update to use Cloudflare

:::tip

To use Cloudflare for DNS add the `dnsProvider` flag with the value `cloudflare` to your create command `--dns-provider cloudflare`.

You also need to set the `CF_API_TOKEN` environment variable with a Cloudflare token (`export CF_API_TOKEN=xxxxxxxxx`) with the Zone.Zone, and Zone.DNS edit permission.

Refer to the [Cloudflare token creation details in their documentation](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/).

:::

### Install with GitLab

Run the following command for GitLab (updated with your values). Note that Kubefirst uses your Cloud Provider to manage DNS but you can also use Cloudflare.  

- **DNS flag**: The `dns-azure-resource-group` flag is only used if Azure is your DNS provider. This is the name of the resource group where the [DNS Zone](https://learn.microsoft.com/en-us/azure/dns/dns-zones-records) resource is provisioned. This flag is not required, but may be useful if you have multiple DNS Zones with the same URL configured. If the resource group is not provided, the first DNS Zone that matches the given URL in your subscription will be used.

```bash

export GITLAB_TOKEN=glpat-xxxxxxxxxxxxxxxx
export ARM_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export ARM_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export ARM_SUBSCRIPTION_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export ARM_TENANT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

kubefirst azure create \
  --alerts-email yourdistro@your-company.io \
  --git-provider gitlab \
  --gitlab-group your-fully-qualified-gitlab-group/or-sub-group  \
  --domain-name your-domain.io \
  --cluster-name kubefirst \
  --dns-azure-resource-group <dns-resource-group>

```

### Install with GitHub

Run the following command For GitHub (updated with your values). Note that Kubefirst uses your Cloud Provider to manage DNS but you can also use Cloudflare.  

- **DNS flag**: The `dns-azure-resource-group` flag is only used if Azure is your DNS provider. This is the name of the resource group where the [DNS Zone](https://learn.microsoft.com/en-us/azure/dns/dns-zones-records) resource is provisioned. This flag is not required, but may be useful if you have multiple DNS Zones with the same URL configured. If the resource group is not provided, the first DNS Zone that matches the given URL in your subscription will be used.

```bash

export GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxx
export ARM_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export ARM_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export ARM_SUBSCRIPTION_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export ARM_TENANT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

kubefirst azure create \
  --alerts-email yourdistro@your-company.io \
  --github-org your-github-org \
  --domain-name your-domain.io \
  --cluster-name kubefirst \
  --dns-azure-resource-group <dns-resource-group>

```  

### Verify install

1. This command (for either GitLab or GitHub) produces a directory of utilities, a state file, and some staged platform content located in the ~/.kubefirst and ~/.k1 folders on your local machine.

2. After about 10 minutes, your browser will launch a new tab for the Kubefirst UI, which will help you navigate your new suite of tools running in your new cluster.

Congratulations you have a brand new management cluster. 🎉

## What's Next?

After your initial setup you can connect to your new cluster, begin creating new workload clusters, [managing your users](/docs/admin/users.md), or explore the functionality available in Kubefirst (or Kubefirst Pro in the UI).

### Get your root credentials

To obtain your three initial passwords, run the following command.

```shell
kubefirst azure root-credentials
```

### Connecting to Kubernetes

To connect to your new Kubernetes cluster, run

```shell
export KUBECONFIG=~/.k1/kubeconfig
```

To view all cluster pods, run

```shell
kubectl get pods -A
```

### Explore Kubefirst

By default your new management cluster has been created in the Free tier of the Kubefirst Platform. This tier includes access to the Kubefirst Pro UI.

Now that you have a functional install you may want to:

- Explore more details on [Kubefirst Features](../../../features/)
- Read details on how to upgrade or manage users and passwords in [Kubefirst Administration](../../../admin/)
- Reach out to [us on Slack](https://konstructio.slack.com) to chat or ask questions
