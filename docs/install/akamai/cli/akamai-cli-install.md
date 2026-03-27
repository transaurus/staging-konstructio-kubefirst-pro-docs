---
title: Akamai CLI Install 
description: Installation steps for Kubefirst with Akamai and the CLI
keywords: [install, installation, setup, provisioning, akamai, kubernetes, containers, clusters, kubefirst, konstruct]
sidebar_position: 3
---

## Summary

After reviewing and confirming you have all of the prerequisites required for this installation process review the docs here to walk through all of the steps for installation with Akamai and the CLI.

## Installing Kubefirst

To get started with this installation you will need to have your git token for GitHub or GitLab and the key associated with your Akamai account

### Using Cloudflare

To use Cloudflare for DNS the install below includes the `dnsProvider` flag with the value `cloudflare` to your create command `--dns-provider cloudflare`.

You also need to set the `CF_API_TOKEN` environment variable with a Cloudflare token (`export CF_API_TOKEN=xxxxxxxxx`) with the Zone.Zone, and Zone.DNS edit permission.

Refer to the [Cloudflare token creation details in their documentation](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/).

### Kubefirst Create

Run the following command For GitHub (updated with your values).  

```bash

export GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxx
export LINODE_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

kubefirst akamai create \
  --alerts-email yourdistro@your-company.io \
  --github-org your-github-org \
  --dns-provider cloudflare \
  --domain-name your-domain.io \
  --cluster-name kubefirst

```

### Verify your install

1. This command produces a directory of utilities, a state file, and some staged platform content located in the ~/.kubefirst and ~/.k1 folders on your local machine.

2. After about 25 minutes, your browser will launch a new tab for the Kubefirst UI, which will help you navigate your new suite of tools running in your new Akamai cluster.

Congratulations you have a brand new management cluster. 🎉

## What's Next?

After your initial setup you can connect to your new cluster, upgrade and begin creating workload clusters, [manage your users](/docs/admin/users.md), or explore the functionality available in Kubefirst (or Kubefirst Pro in the UI).

### Get your root credentials

To obtain your three initial passwords, run the following command.

```bash

kubefirst akamai root-credentials

```

## Connecting to Kubernetes

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
  