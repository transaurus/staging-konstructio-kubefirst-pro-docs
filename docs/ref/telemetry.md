---
title: Telemetry
description: Details on data collected by Konstruct for Kubefirst and Kubefirst Pro
keywords: [kubernetes, containers, clusters, kubefirst, konstruct, administration, users, passwords, telemetry, data collection, metrics] 
sidebar_position: 3
---

## Summary

Konstruct collects data through Kubefirst and Kubefirst Pro to learn more about our users and to optimize our product releases. By collecting metrics on provisioning and deployment, the types of clusters that are being deployed and how they are being used, we are able to identify the features that have the most impact for our users.

**We do not share or resell data, and only use it to make improvements to our products.**

Users are always allowed to opt out for any reason. For installs through the CLI, append the `--use-telemetry=false` flag to opt out of this process. If you’re using another installation method and want to opt out reach out to us and we’ll be happy to help.

## What Metrics are collected?

- `cli_version`:          The version of CLI being used (e.g. `2.0.0`)
- `cloud_provider`        The cloud environment (`k3d`|`aws`|`civo`|`azure`)
- `cluster_id`:           The ID of the cluster created (e.g. `123ABC`)
- `cluster_type`:         The type of cluster created (`mgmt`)
- `domain`:               The domain of the cluster being created (e.g. `kubefirst.io`)
- `git_provider`:         Type of git provider leveraged (`github`|`gitlab`)
- `kubefirst_team`:       For internal use only
- `kubefirst_team_info`:  For internal use only
- `machine_id`:           An anonymized ID representing a distinct client host (e.g. `123456-123abc-abc123123abc-123123`)
