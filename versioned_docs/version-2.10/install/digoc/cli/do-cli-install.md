---
title: DigitalOcean CLI Install
description: Installation details for Kubefirst Pro with DigitalOcean and the CLI
keywords: [digitalocean, install, provisioning, setup, kubernetes, containers, clusters, kubefirst, konstruct]
sidebar_position: 2
---

## Summary

After reviewing and confirming you have all of the prerequisites required for this installation process this page walks through all of the steps for **Kubefirst installation with DigitalOcean and the CLI**.

## Installing Kubefirst

To get started with this installation you will need to have your git token (for GitHub or GitLab) and your DigitalOcean API Key. By default, Kubefirst assumes you will use DigitalOcean to manage DNS, to use Cloudflare use the tip below.

### Update to use Cloudflare

:::tip

To use Cloudflare for DNS add the `dnsProvider` flag with the value `cloudflare` to your create command `--dns-provider cloudflare`.

You also need to set the `CF_API_TOKEN` environment variable with a Cloudflare token (`export CF_API_TOKEN=xxxxxxxxx`) with the Zone.Zone, and Zone.DNS edit permission.

Refer to the [Cloudflare token creation details in their documentation](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/).

:::

### Install with GitLab

Run the following command for GitLab (updated with your values). Note that Kubefirst uses your Cloud Provider (DigitalOcean) to manage DNS but you can also use Cloudflare.  

```bash

export GITLAB_TOKEN=glpat-xxxxxxxxxxxxxxxx
export DO_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export DO_SPACES_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export DO_SPACES_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

kubefirst digitalocean create \
  --alerts-email yourdistro@your-company.io \
  --git-provider gitlab \
  --gitlab-group your-fully-qualified-gitlab-group/or-sub-group  \
  --domain-name your-domain.io \
  --cluster-name kubefirst

```

### Install with GitHub

Run the following command For GitHub (updated with your values). Note that Kubefirst uses your Cloud Provider (DigitalOcean) to manage DNS but you can also use Cloudflare.  

```bash

export GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxx
export DO_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export DO_SPACES_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export DO_SPACES_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

kubefirst digitalocean create \
  --alerts-email yourdistro@your-company.io \
  --github-org your-github-org \
  --domain-name your-domain.io \
  --cluster-name kubefirst

```

### Verify install

1. This command (for either GitLab or GitHub) produces a directory of utilities, a state file, and some staged platform content located in the `~/.kubefirst` and `~/.k1` folders on your local machine.

2. After about 20 minutes, your browser will launch a new tab for the Kubefirst UI, which will help you navigate your new suite of tools running in your new DigitalOcean cluster.

Congratulations you have a brand new management cluster. 🎉

## What's Next?

After your initial setup you can connect to your new cluster, begin creating new workload clusters, [managing your users](/docs/admin/users.md), or exploring the functionality available in Kubefirst (or Kubefirst Pro in the UI).

### Get your root credentials

To obtain your three initial passwords, run the following command.

```bash

kubefirst digitalocean root-credentials

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
