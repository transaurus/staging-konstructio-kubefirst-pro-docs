---
title: Support and Upgrade
description: Review details on support, subscriptions, and upgrade for Kubefirst and Kubefirst Pro
keywords: [civo, kubernetes, containers, clusters, kubefirst, konstruct, clouds, support, upgrade]
sidebar_position: 2
---

## Summary

Review details about what is supported for Kubefirst for both open source and Kubefirst Pro. After installing Kubefirst all users have access to the User Interface (UI), with the option to prevent the installation of the UI if desired.

The Kubefirst UI is available with limited support at the Free tier which includes your management cluster.

For additional capacity and expanded features upgrade to Kubefirst Pro Business, which offers support for up to 10 clusters on one cloud. For Enterprise support, beyond 10 clusters or cluster support across multiple clouds, reach out to us so we can help understand your requirements!

## Supported Clouds

Kubefirst supports installation with the following clouds:

- Akamai
- AWS
- Azure
- Civo
- Digital Ocean
- Google Cloud
- Kubefirst k3d - local installation
- K3s
- Vultr

### OS Limitations

Windows is not supported. We do offer support for Windows users [through Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/about) that we’ve tested for Ubuntu.

- For Windows users, be sure to enable Docker support in WSL2 distributions. You can learn more about it [in the Docker documentation.](https://docs.docker.com/desktop/features/wsl/#enabling-docker-support-in-wsl-2-distros)

## Kubefirst Pro - What is supported?

For users interested in using the Kubefirst UI/ Kubefirst Pro we currently support installation for the following clouds and cluster types.

- Akamai (virtual, physical)
- AWS (virtual, physical, +multi-account)
- Azure (virtual, physical)
- Civo (virtual, physical, +multi-account)
- Digital Ocean (virtual, physical)
- Google (virtual, physical)
- Vultr (virtual, physical)

Azure support is in development but if you’re interested get in touch.

Cluster management on K3s and k3d are not supported for Kubefirst Pro.

## Upgrading to Kubefirst Pro

To upgrade, from the Kubefirst UI you can select the tier at the bottom left or navigate from the main landing page to **Subscription --> Admin Settings.**

Complete the steps below to upgrade your Kubefirst Pro account. All Kubefirst Pro/UI users start at the Free tier with a management cluster.

1. From the Kubefirst UI and the main landing page select Subscription under Admin Settings.
2. Select a login path (GitHub, GitLab, or Google). This redirects you to the subscription page.
3. Select the Business plan to upgrade
   - Business is billed at a rate of $0.33/hour per cluster for up to 10 clusters.
   - For users who want clusters across multiple clouds or for support beyond 10 clusters, get in touch with us about an upgrade to Enterprise.
4. Review the subscription details, provide your payment details and select **Subscribe**.
5. To review an existing subscription navigate to the Kubefirst UI and view details under **Admin --> Subscription --> Billing**.

## Account Information

To review information about your Kubefirst Pro setup including what Cloud accounts are connected, and subscription information like billing details, licensing information, and available plans navigate to the Admin Settings section of the Kubefirst UI.

### Billing

Information about your billing is managed by Stripe and can be viewed in the Kubefirst UI under the Admin Settings category under Subscription from the main navigation.

Navigate to the Billing section to view the current usage and charges, and to access the billing details linked to your account.

### License key

Information about your license key is in the Kubefirst UI under the Admin Settings category under **Subscription --> License key**.

### Plans

Details about your existing plan, including the plan you are currently on, are available in the Kubefirst UI under **Admin --> Subscription --> Plans**
