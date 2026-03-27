---
title: Azure CLI Prerequisites
description: Prerequisites for installation of Kubefirst with Azure and the CLI
keywords: [microsoft, azure, prerequisites, requirements, kubernetes, containers, clusters, kubefirst, konstruct]
sidebar_position: 1
---

## Summary

This document walks through the prerequisites for installing **Kubefirst using Azure with the Kubefirst CLI**.

## Install Assumptions

Before getting started make sure you are aware of the following:

- We assume that you already have an Azure account where you are the account owner (along with a few other Azure prerequisites).
- We assume you have a Git organization (in either GitLab or GitHub) that is free to use for this installation.
- We are assuming you have never installed Kubefirst or Kubefirst Pro before.
  - If you have previously installed Kubefirst or Kubefirst Pro you will need to remove the `~/.k1` folder, the `~/.kubefirst` file, and anything related to k3d in Docker for the install to be successful.
- We’re going to use your personal account for GitHub or GitLab as an admin and associate it with the bot that we use to build automation. This is faster but it also means that if you want to continue beyond just “testing it out” there are additional steps required to establish an independent bot account for the system to use. _The bot is yours to run, configure, or remove and we do not store information on our servers._

## Prerequisites

Before getting started with this installation there are several things you will need to have set up to successfully complete the installation.

### Homebrew

The commands we provide here assume you are [using Homebrew.](https://brew.sh/)

### Kubectl

The instructions below also use `kubectl`. Run the following brew command to install.

    ```bash
    brew install kubernetes-cli
    ```

### Docker

A [Docker Desktop installation](https://docs.docker.com/get-docker/) with the following minimum requirements:
    - CPU: 5 Cores
    - Memory (RAM): 5 GB
    - Swap: 1 GB
    - Virtual Desk limit (for Docker images and containers): 10 GB

Some basic notes about running Docker:

    - The more resources you allocate, the faster the cluster creation will go.
    - If you pull multiple images from Docker Hub it may [trigger the rate limit.](https://docs.docker.com/docker-hub/download-rate-limit/#whats-the-download-rate-limit-on-docker-hub) _To avoid this we suggest logging in to a Docker account. You can [create one here for free](https://hub.docker.com/signup), to double the rate limit.
    - For **Windows users** Docker support [must be enabled for WSL2 distributions.](https://docs.docker.com/desktop/wsl/#enabling-docker-support-in-wsl-2-distros)

### Kubefirst CLI

#### macOS & Linux (Homebrew)

Run the following brew command to install the Kubefirst CLI.

    ```bash
    brew install konstructio/taps/kubefirst
    ```

To update an existing Kubefirst CLI run

    ```shell
    brew update
    brew upgrade kubefirst
    ```

#### Linux (manual)

Download the latest build for your architecture from the [releases page](https://github.com/kubefirst/kubefirst/releases). Once done, extract it, and ensure it's executable. You may need to use `sudo` for the `tar` or `chmod`` command.

    ```shell
    tar --overwrite -xvf kubefirst_<VERSION>_linux_<ARCH>.tar.gz -C /usr/local/bin/ kubefirst && \
    chmod +x /usr/local/bin/kubefirst
    ```

Now you can run `kubefirst`.

    ```shell
    kubefirst version
    ```

#### Windows

We do not directly support Windows, but you can use Kubefirst with [WSL](https://learn.microsoft.com/en-us/windows/wsl/about) (tested with Ubuntu). To install the latest WSL version, follow the [Microsoft documentation on installing Linux on Windows](https://learn.microsoft.com/en-us/windows/wsl/install).

### Git Provider (GitHub or GitLab)

After provisioning your installer cluster you will need to have domain details for your preferred Git provider for your management cluster. We support GitHub and GitLab.

- Organization name/Group name
- Personal Access token
- Username

[Check out our instructions](/docs/admin/git-tokens.md) for details (including scopes/permissions) on creating your git token.

### DNS

Kubefirst assumes that you will use your cloud provider for DNS. We also support Cloudflare, refer to the details below.

Refer to the [Azure documentation for configuring DNS in Azure](https://learn.microsoft.com/en-us/azure/dns/dns-overview) for additional details.

#### Cloudflare (Optional for DNS)

If you prefer to use Cloudflare as your DNS provider:

- Create a dedicated Cloudflare user account
- Create a user token with read and write access to your registered zone. _This token will be required during installation._

Refer to the [Cloudflare documentation for user token creation](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/) for additional details.

### `mkcert` Certificate Authority

:::tip

This is not an optional step: the cluster creation will fail if you don't install the mkcert CA in your trusted store.

:::

We use [mkcert](https://github.com/FiloSottile/mkcert) to generate local certificates and serve `https` with the Traefik Ingress Controller. During the installation, Kubefirst generates these certificates and pushes them to Kubernetes as secrets to attach to Ingress resources.

To allow the applications running in your Kubefirst platform, in addition to your browser, to trust the certificates generated by your Kubefirst install, you need to install the CA (Certificate Authority) of `mkcert` in your trusted store.

Run the following command to install `mkcert`.

    ```shell
    brew install mkcert
    mkcert -install
    ```

For Firefox, you will also need to install [Network Security Services](https://firefox-source-docs.mozilla.org/security/nss/index.html) (NSS):

    ```shell
    brew install nss
    ```

### Azure Components

For Kubefirst to be able to provision your Azure cloud resources you will need:

- An [Azure account](https://portal.azure.com) in which you are an account owner.
- A publicly routable [DNS zone](https://learn.microsoft.com/en-us/azure/dns/dns-zones-records).
  - _Note: This does not apply if you plan to use Cloudflare for DNS._
- A [Microsoft Entra app and service principal](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal) with `Owner` permissions on your subscription.

#### Environment variables

Azure authentication requires the following environment variables to be set:

| Variable | Description |
| --- | --- |
| `ARM_CLIENT_ID` | The unique ID for your [service principal](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#sign-in-to-the-application) |
| `ARM_CLIENT_SECRET` | The secret for your [service principal](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#option-3-create-a-new-client-secret) |
| `ARM_SUBSCRIPTION_ID` | The unique ID for your [Azure subscription](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id#find-your-azure-subscription) |
| `ARM_TENANT_ID` | The unique ID for your [Microsoft Entra tenant](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id#find-your-microsoft-entra-tenant) |

#### Azure CLI

    ```shell
    brew install azure-cli
    ```

More information in the [Azure documentation](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli).

## Known Limitations

### Let's Encrypt Certificate Rate Limit

Kubefirst uses [Let's encrypt](https://letsencrypt.org/) to automatically create certificates for your domains. Let's encrypt limits creation to 50 weekly certificates with an additional limitation of 5 per subdomain. In some scenarios you may reach that limit if you often create and destroy Kubefirst clusters using the same domain during a short period. You can use the [Let's Debug Toolkit](https://tools.letsdebug.net/cert-search) to check those.

Cloudflare DNS with origin certificates is an alternative method that allows unlimited certificate creation if this limit impacts you.

## Getting Support

If you’re not sure this is the best method of installation for you, or you started the install and ran into issues, or if you have a question about the process and don’t see it mentioned here, we've got you covered. [Join our Slack Community](https://konstructio.slack.com/) for support and get the answers you need!
