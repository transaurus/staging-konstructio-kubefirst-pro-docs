---
title: DigitalOcean Marketplace Install
description: Installation steps for Kubefirst with the DigitalOcean Marketplace
keywords: [digitalocean, install, kubernetes, containers, clusters, kubefirst, konstruct, kubefirst pro, provision] 
sidebar_position: 2
---

## Summary

After reviewing and confirming you have all of the prerequisites required for this installation process. this page walks through all of the steps  to complete the installation of **Kubefirst with DigitalOcean Marketplace and the Kubefirst UI**.

## Installing Kubefirst

These steps take place in the DigitalOcean Dashboard and in a terminal. To get started with this installation log in to the DigitalOcean Dashboard with your admin credentials. If you’re new to DigitalOcean visit their documentation for information on [signing up for the first time.](https://docs.digitalocean.com/platform/accounts/)

### Create your installer cluster

1. Log into your DigitalOcean account, navigate to [Kubefirst Marketplace page](https://marketplace.digitalocean.com/apps/kubefirst), and select **Install App**.
2. On the new tab that opens select **Install**.
3. Choose the data center region. It doesn't matter much as this cluster will be use to install Kubefirst.
4. Lower the nodes plan to `2 GB RAM / 1 vCPU / 50 GB Disk`.
5. Reduce the nodes count to `2`.
6. Name the cluster `installer`.
7. Click "Create Cluster" and wait until the cluster is ready.

### Connect to your installer cluster

:::info
In some cases you may get a certificate error or warning about an unsafe website for the Kubefirst UI. It’s okay to ignore this warning and open the URL.
:::

1. From the terminal run the following commands. _(Note: These commands assume you named the cluster installer)._

    ```bash
    doctl kubernetes cluster kubeconfig save installer
    kubectl --namespace kubefirst port-forward svc/kubefirst-console 8080:8080
    ```

2. Open the provisioning path `http://localhost:8080/` in your browser.

### Create your Kubefirst management cluster

The steps below provide the details you need to create your Kubefirst management cluster from the provisioning URL `(http://localhost:8080/provision)`

1. From the localhost path you established in the previous step select your preferred Git provider. (_We’re using GitHub for this example._)
2. Provide the required details for your Git provider.
   - Personal Access Token/username
   - Organization name (Group for GitLab)
   - Access details
3. Select **Next** to add your Cluster details.
   - Alerts email - receives notifications for encryption certificate expiration. This email will not be used by Konstruct for anything outside of these notifications.
   - Cloud region
   - Instance size
   - Number of nodes (we recommend 4 nodes of type `s-4vcpu-8gb`)
   - DNS provider - Selecting DigitalOcean will update the details automatically. For Cloudflare provide the Cloudflare token, cluster domain name, subdomain name (optional), and cluster name.

4. **Advanced Options** are all optional and allow you to:
   - Override the gitops-template repository
   - Specify a different GitOps template branch
   - Use HTTPs instead of SSH
   - Prevent the installation of the Kubefirst UI component
5. Select **Create Cluster** once you’re satisfied with the details you’ve provided to start provisioning!
   - _This process is typically about 15-20 minutes._
6. When your cluster has successfully provisioned select **Next**.
7. After successful provisioning the cluster details with the new Vault password are provided in the next screen.

    ![Cluster is ready](../../../img/civo/ready.png)

8. Select **Open kubefirst console** to see your cluster details.
   - The default username for your new cluster is `kbot`
   - **Save this password somewhere safe** to retain access to your management cluster.

   Congratulations you have a brand new management cluster. 🎉

## What's Next?

### Deprovision the installer cluster

After completing the installation we recommend that you deprovision the install cluster. You can delete the `installer` cluster directly in the DigitalOcean UI. It is only used to establish the platform.

### Explore Kubefirst

By default your new management cluster has been created in the Free tier of the Kubefirst Platform. This tier includes access to the Kubefirst Pro UI.

Now that you have a functional install you may want to:

- Explore more details on [Kubefirst Features](../../../features/)
- Read details on how to upgrade or manage users and passwords in [Kubefirst Administration](../../../admin/)
- Reach out to [us on Slack](https://konstructio.slack.com) to chat or ask questions
