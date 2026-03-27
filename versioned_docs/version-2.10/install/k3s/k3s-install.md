---
title: K3s Install
description: Installation steps for Kubefirst with K3s and the CLI
keywords: [install, installation, setup, provisioning, k3s, kubernetes, containers, clusters, kubefirst, konstruct]
sidebar_position: 2
---

## Summary

After reviewing and confirming you have all of the prerequisites required for this installation process review the docs here to walk through all of the steps for installation with K3s and the Kubefirst CLI

## Installing Kubefirst

To get started with this installation you will need to have your git token (for GitHub or GitLab) along with the details associated with your K3s account.

### Using Cloudflare

To use Cloudflare for DNS the install below includes the `dnsProvider` flag with the value `cloudflare` to your create command `--dns-provider cloudflare`.

You also need to set the `CF_API_TOKEN` environment variable with a Cloudflare token (`export CF_API_TOKEN=xxxxxxxxx`) with the Zone.Zone, and Zone.DNS edit permission.

Refer to the [Cloudflare token creation details in their documentation](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/).

### Install with GitLab

Run the following command for GitLab (updated with your values).  

```bash

export GITLAB_TOKEN=glpat-xxxxxxxxxxxxxxxx

kubefirst k3s create \
    --servers-args "--disable traefik,--write-kubeconfig-mode 0644" \
    --alerts-email yourdistro@your-company.io \
    --dns-provider cloudflare \
    --domain-name your-domain.io \
    --gitlab-group your-gitlab-group \
    --git-provider gitlab \
    --servers-private-ips <private-ip-1>,<private-ip-2>,<private-ip-3> \
    --servers-public-ips <public-ip-1>,<public-ip-2>,<public-ip-3> \
    --ssh-privatekey "$(cat ~/.ssh/your-ssh-key)" \
    --ssh-user root \
    --cluster-name kubefirst

```

_Note: If you don't provide the `--servers-public-ips` flag, Kubefirst will use the `--servers-private-ips` flag value for it._

### Install with GitHub

Run the following command For GitHub (updated with your values).

```bash

export GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxx

kubefirst k3s create \
    --servers-args "--disable traefik,--write-kubeconfig-mode 0644" \
    --alerts-email yourdistro@your-company.io \
    --dns-provider cloudflare \
    --domain-name your-domain.io \
    --gitlab-group your-gitlab-group \
    --git-provider gitlab \
    --servers-private-ips <private-ip-1>,<private-ip-2>,<private-ip-3> \
    --servers-public-ips <public-ip-1>,<public-ip-2>,<public-ip-3> \
    --ssh-privatekey "$(cat ~/.ssh/your-ssh-key)" \
    --ssh-user root \
    --cluster-name kubefirst

```  

_Note: If you don't provide the `--servers-public-ips` flag, Kubefirst will use the `--servers-private-ips` flag value for it._

### Verify install

1. This command (for either GitLab or GitHub) produces a directory of utilities, a state file, and some staged platform content located in the ~/.kubefirst and ~/.k1 folders on your local machine.

2. After about 10 minutes, your browser will launch a new tab for the Kubefirst UI, which will help you navigate your new suite of tools running in your new cluster.

Congratulations you have a brand new management cluster. 🎉

## What's Next?

After your initial setup you can connect to your new cluster, begin creating new workload clusters, [managing your users](/docs/admin/users.md), or explore the functionality available in Kubefirst (or Kubefirst Pro in the UI).

### Get your root credentials

To obtain your three initial passwords, run the following command.

```shell
kubefirst k3s root-credentials
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

- Explore more details on [Kubefirst Features](../../features/)
- Read details on how to upgrade or manage users and passwords in [Kubefirst Administration](../../admin/)
- Reach out to [us on Slack](https://konstructio.slack.com) to chat or ask questions
