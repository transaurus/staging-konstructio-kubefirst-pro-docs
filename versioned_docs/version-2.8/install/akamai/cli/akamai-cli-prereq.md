---
title: Akamai CLI Prerequisites
description: Prerequisites for installation of Kubefirst with Google Cloud and the CLI
keywords: [akamai, prerequisites, requirements, kubernetes, containers, clusters, kubefirst, konstruct]
sidebar_position: 2
---

## Summary

This document walks through the prerequisites for installing **Kubefirst using Akamai with the Kubefirst CLI**.

## Install Assumptions

Before getting started make sure you are aware of the following:

- We assume that you already have an Akamai account and credentials.
- We assume you have a GitHub organization that is free to use for this installation.
- We are assuming you have never installed Kubefirst or Kubefirst Pro before.
  - If you have previously installed Kubefirst or Kubefirst Pro you will need to remove the ~/.k1 folder, the ~/.kubefirst file, and anything related to k3d in Docker for the install to be successful.
- We’re going to use your personal account for GitHub as an admin and associate it with the bot that we use to build automation. This is faster but it also means that if you want to continue beyond just “testing it out” there are additional steps required to establish an independent bot account for the system to use. _The bot is yours to run, configure, or remove and we do not store information on our servers._

## Prerequisites

Before getting started with this installation there are several things you will need to have set up to successfully complete the installation.

### Homebrew

The commands we provide here assume you are [using Homebrew.](https://brew.sh/)

### Kubectl

The instructions below also use `kubeclt`. Run the following brew command to install.

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

### Git Provider (GitHub)

_Note: Only GitHub is supported for provisioning with Akamai._

After provisioning your installer cluster you will need to have domain details for GitHub for your management cluster.

- Organization name
- Personal Access token
- Username

[Check out our instructions](/docs/admin/git-tokens.md) for details (including scopes/permissions) on creating your git token.

### DNS

For Akamai we are unable to use Akamai as the DNS provider because of requirements that the domain needs to be attached to a VM. To use Kubefirst with Akamai we support Cloudflare.

#### Cloudflare Details

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

### Akamai Cloud Components

For Kubefirst to be able to provision your Akamai cloud resources:

- A [Akamai account](https://www.akamai.com/create-account) in which you are an account owner.
- A [Linode API token](https://cloud.linode.com/profile/tokens).

## Known Limitations

### Let's Encrypt Certificate Rate Limit

Kubefirst uses [Let's encrypt](https://letsencrypt.org/) to automatically create certificates for your domains. Let's encrypt limits creation to 50 weekly certificates with an additional limitation of 5 per subdomain. In some scenarios you may reach that limit if you often create and destroy Kubefirst clusters using the same domain during a short period. You can use the [Let's Debug Toolkit](https://tools.letsdebug.net/cert-search) to check those.

Cloudflare DNS with origin certificates is an alternative method that allows unlimited certificate creation if this limit impacts you.

### Akamai Specific

- Akamai is [only available on GitHub](https://github.com/kubefirst/kubefirst/issues/2143).
- You [cannot use Akamai as the DNS provider](https://github.com/kubefirst/kubefirst/issues/2144).

## Getting Support

If you’re not sure this is the best method of installation for you, or you started the install and ran into issues, or if you have a question about the process and don’t see it mentioned here, we've got you covered. [Join our Slack Community](https://konstructio.slack.com/) for support and get the answers you need!
