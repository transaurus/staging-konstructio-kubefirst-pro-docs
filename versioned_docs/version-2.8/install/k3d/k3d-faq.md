---
title: k3d FAQ
description: Review frequently asked questions about installation, configuration, and general troubleshooting for k3d
keywords: [faq, config, install, k3d, local, troubleshooting, kubernetes, containers, clusters, kubefirst, konstruct, clouds, support]
sidebar_position: 3
---

## Summary

Explore common questions and answers specific to installing Kubefirst locally with k3d.

## Unable to connect to the Docker daemon

If you receive this error:

```shell
Error: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
```

If Docker is running and working properly (run `docker run hello-world` in your terminal to verify), but you get the error above while trying to create a cluster with k3d, it may be related to [this Docker issue](https://github.com/docker/for-mac/issues/6529).

To correct it, the Unix sockets default path should be `/var/run/docker.sock`, specify the path using the `DOCKER_HOST` variable:

```shell
export DOCKER_HOST="unix://$HOME/.docker/run/docker.sock"
```

## Using Rancher Desktop Instead of Docker Desktop

To use Rancher Desktop you need to disable Traefik in your Rancher Desktop. This is required because the Kubefirst k3d installation uses Traefik and port forwarding, disabling Traefik in Rancher Desktop prevents double routing and other conflicts.

### macOS (Apple Silicon) in Rancher Desktop

> This is experimental. While this works, all of the features it uses are considered beta or experimental by Rancher Desktop.

For Apple Silicon macOS, you need to enable a few features in Rancher Desktop before this works. Run the following command in your terminal:

```shell
rdctl set --container-engine.name docker \
    --kubernetes.options.traefik=false \
    --experimental.virtual-machine.type vz \
    --experimental.virtual-machine.use-rosetta=true \
    --experimental.virtual-machine.mount.type virtiofs \
    --experimental.virtual-machine.socket-vmnet=true
```

### macOS (Intel)

Not yet tested for Rancher Desktop.

## Windows Subsystem for Linux (WSL) on Windows

Rancher Desktop is not yet supported for WSL on Windows due to limitations on the management of volumes. We do support Docker Desktop with [WSL on Windows](https://learn.microsoft.com/en-us/windows/wsl/install).

## Using nerdctl Instead of Docker

Creation via [nerdctl](https://github.com/containerd/nerdctl) is not yet supported.

k3d doesn't fully support this option because there is no public API. We need k3d to support nerdctl and containerd on WSL before we can add support in Kubefirst.

## Using Lima Instead of Docker Desktop

We have no experimented with using Kubefirst k3d cluster creation with [Lima](https://github.com/lima-vm/lima) yet. If you are using it, let us know how it's working, and if you think it's something we can support with the existing codebase.

For any of the items outlined here or if you have questions about Kubefirst we'd love to help, [reach out to us on Slack](https://konstructio.slack.com).
