---
title: FAQ - Install & Config
description: Review frequently asked questions about installation, configuration, and general troubleshooting
keywords: [faq, config, install, troubleshooting, kubernetes, containers, clusters, kubefirst, konstruct, clouds, support]
sidebar_position: 4
---

## Summary

Review details in this FAQ about common questions around Kubefirst installation, configuration, and some general troubleshooting.

For a high-level product FAQ [check out this page.](../overview/faq.mdx).

If you have an issue or question that you don't see covered here or elsewhere in the documentation we'd love to hear from you, [reach out to us on Slack](https://konstructio.slack.com).

## Install

### I'm having installation issues

- **Try running the command again**
  
  If an error occurs (for CLI-users) try to run the command again.
  
  We don’t recommend running commands again with different flags. This can create different issues and will complicate troubleshooting if you still run into issues.

- **Start over by deprovisioning**
  
  Start over. For the CLI, run the deprovisioning commands to remove what was created, and start over. For the UI, use the "Retry" option.
  
  In both cases, the execution state is kept, and the process starts over where it ended.
  
  If neither of these works, you can check the logs provided in the `~/.k1/logs` folder for the CLI, and in the UI interface, in the "Verbose" tab.

- **I still need help?**

  If you are not sure how to resolve the issue, [join our Slack community](https://konstructio.slack.com), and reach out in in the #helping-hands channel.

### I'm experiencing timeouts

Specifically, I'm experiencing timeouts when Kubefirst deploys Argo CD or HashiCorp Vault through the Helm installations​.

You may need a more stable connection / higher download speed. Check with your internet provider or use an online speed test to confirm you have at least 100 mbps for your download speed, anything lower may contribute to timeouts.

### I don't want to install Kubefirst Pro (the Kubefirst UI)

If you would prefer not to install Kubefirst Pro (the Kubefirst UI), for a CLI installation you can use include the `--install-kubefirst-pro false` flag with your initial setup and provisioning.

### I'm stuck with artifacts after a failed local installation and can't continue​

If you still cannot complete the installation due to remaining artifacts after completing a `kubefirst k3d destroy`, you may have to do a manual teardown.

1. Delete the k3d cluster with the following command:

    ```shell
    ~/.k1/<your-cluster-name>/tools/k3d cluster delete kubefirst
    kubefirst reset
    ```

2. Delete the git assets created by logging into your account and removing the gitops, and metaphor repositories. You  also use the [GitHub CLI](https://cli.github.com/) or [GitLab CLI](https://gitlab.com/gitlab-org/cli):

    GitHub example below.

    ```shell
    gh repo delete <GITHUB_USERNAME>/metaphor --confirm
    gh repo delete <GITHUB_USERNAME>/gitops --confirm
    ```

### How do I get my kbot password?

If you created your cluster using the UI, or reset your Kubefirst environment, you can retrieve the root credentials with `kubefirst <cloud> > root-credentials` (substituting your cloud for the field, for example `kubefirst k3d root-credentials`)

The one exception to this is the `kbot` user password. To retrieve this password, you have to locate it manually in Vault) using kubectl:

For the Argo CD admin password run:

  ```bash
  kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
  ```
  
For the Vault root token run:

  ```bash
  kubectl -n vault get secret vault-unseal-secret -o jsonpath="{.data.root-token}" | base64 -d
  ```

## Configuration

### What is the wait.yaml file in each application components folder?​

The `wait.yaml` file is secondary measure we’ve added to help with the reliability of the platform provisioning.
This was implemented to address issues with Argo CD and its sync waves not orchestrating correctly (it's a known bug, [here's one example](https://github.com/argoproj/argo-cd/issues/12376)).

### Can I install Kubefirst on an existing cluster?​

Yes and no. The Kubefirst installer (cluster) can be installed on an existing cluster from your preferred cloud.

You cannot install a Kubefirst management cluster on an existing cluster. Kubefirst includes a number of applications so it cannot be installed on an existing cluster to prevent issues of overlap or destruction of any existing configuration.

## Azure

### What authentication methods do you support?

Currently, the only supported authentication method is a service principal with a client secret. Support for service principals with certificates is likely to be supported in the future. Refer to [konstructio/kubefirst#2319](https://github.com/konstructio/kubefirst/issues/2319) for details and up-vote if you depend on this feature to use Kubefirst.

There are no plans to support authentication without a service principal.

## Civo

### Dummy website served at your domain root

With Civo, Google Search Crawlers are flagging domains as deceptive when they have no apex records. To fix the issue, we added an apex record, and created a pod with a NGINX server at the domain root, delivering a dummy website.

If you want to replace the dummy website with yours or serve an application instead, it should still prevent the problem from happening. If removed, you may see the following error when accessing your domain (or any of its subdomains) in the browser.

## DigitalOcean

### I got an AWS error, but I'm creating a cluster on DigitalOcean. What is this?

The error can be misleading, but it makes sense as smaller cloud providers, including DigitalOcean, built their storage offering to be S3 compatible, which means that the Terraform provider used for them is also the AWS one.

As for the error itself, there's a chance it's because your DO_SPACES_KEY and/or DO_SPACES_SECRET environment variable were not set, or you key isn't valid anymore.

## k3d

For FAQ details specific to k3d check out the [k3d FAQ page](../install/k3d/k3d-faq.md)
