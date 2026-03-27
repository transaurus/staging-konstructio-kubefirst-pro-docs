---
title: k3d Installation Guide
description: Installation steps for Kubefirst local with k3d
keywords: [install, installation, setup, provisioning, k3d, local installation, kubernetes, containers, clusters, kubefirst, konstruct]
sidebar_position: 2
---

## Summary

After reviewing and confirming you have all of the prerequisites required for this installation process review the docs here to walk through all of the steps for installation of Kubefirst local with k3d.

## Installing Kubefirst

To get started with this installation you will need to have your git provider details (for GitHub or GitLab).

### GitHub Installation Steps

To create a new Kubefirst cluster locally with GitHub, run

```shell
kubefirst k3d create
```

Details about your execution are logged to your `~/.k1/logs` directory. More information on `kubefirst k3d`, including optional flags, can be discovered by running `kubefirst k3d help`.

We are able to create an ephemeral GitHub token that expires after 8 hours using a process that will prompt your browser to request access to your account. If you need a quick environment, this is a frictionless approach.

However, if you need this environment for longer than 8 hours, follow our [Git Token Guide](../../admin/git-tokens.md) and export a more permanent token to your terminal by using the following command:

```shell
export GITHUB_TOKEN=ghp_xxxxxxxx
```

### GitLab Installation Steps

To create a new Kubefirst cluster locally with GitLab, run

```shell
kubefirst k3d create \
  --git-provider gitlab \
  --gitlab-group your-group \
  --cluster-name kubefirst
```

Details about your execution are logged to your `~/.k1/logs` directory. More information on `kubefirst k3d`, including optional flags, can be discovered by running `kubefirst k3d help`.

We are able to create an ephemeral GitLab token that expires after 8 hours using a process that will prompt your browser to request access to your account. If you need a quick environment, this is a frictionless approach.

However, if you need this environment for longer than 8 hours follow our [Git Token Guide](../../admin/git-tokens.md) and export a more permanent token to your terminal by using the following command:

```shell
export GITLAB_TOKEN=gl_xxxxxxxx
```

## What's Next?

After your initial setup you can connect to your new cluster or explore the functionality available in Kubefirst (or Kubefirst Pro in the UI).

### Get your root credentials

To obtain your three initial passwords, run the following command.

```bash

kubefirst k3d root-credentials

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

- Explore more details on [Kubefirst Features](../../features/)
- Read details on how to upgrade or manage users and passwords in [Kubefirst Administration](../../admin/)
- Reach out to [us on Slack](https://konstructio.slack.com) to chat or ask questions
  