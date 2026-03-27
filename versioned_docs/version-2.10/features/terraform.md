---
title: Terraform and Atlantis
description: Learn more about how Kubefirst uses Terraform and Atlantis in our GitOps approach
keywords: [terraform, atlantis, workflows, iac, gitops, kubernetes, containers, clusters, kubefirst, konstruct]
sidebar_position: 2
---

## Summary

In Kubefirst, we use Terraform as our infrastructure as code (IaC) layer and manage our Terraform workflows with Atlantis automation. This page walks through the implementation of these tools as part of our approach to GitOps.

- Learn more about Terraform [in their documentation](https://developer.hashicorp.com/terraform/docs)

- Learn more about [Atlantis in their documentation](https://www.runatlantis.io/docs.html)

## Making Changes In Terraform

Quite often, when using Terraform it’s common to apply the changes directly using the CLI. We recommend updating your IaC to a more GitOps-oriented approach by applying Terraform changes using Atlantis.

The second main principle in GitOps, “versioned and immutable”, stipulates that the desired state be stored in a way that enforces immutability, versioning, and retains a complete version history. This means keeping track of changes to the Terraform files.

You can easily achieve this by adding your file to Git, and using pull requests or merges for adding modified files directly inside the `gitops` repository. In addition to versioning, it enhances collaboration and visibility. By keeping a complete history of the changes it’s much easier to revert if problems arise. Using Atlantis also provides a locking mechanism which prevents possible conflicts with colleagues working on the same projects.

:::note

A "Change Request" in GitHub is a "Pull Request" and a "Merge Request" in GitLab.
:::

### Automatic Plans With Atlantis

Any change request that includes a `.tf` file prompts Atlantis to wake up and run your Terraform plan. The steps are:

- Atlantis will post the plan's result to your change request as a comment within a minute or so.
- Review and approve the change request.
- Run a new Terraform plan at any time by commenting directly in your pull request with the words `atlantis plan`.

### Apply and Merge

Add the comment `atlantis apply` in the approved change request. This prompts Atlantis to wake up and run your `terraform apply`.

The apply results will be added to your change request comments by Atlantis.

Once apply is successful your code is automatically merged with main, your change request is closed, and the state lock is  removed in Atlantis.

## Managing Terraform State

For Cloud-based provisioning the Terraform state is stored in the cloud provider’s default object storage (for example AWS uses S3, Google uses Cloud Storage, etc.) For non-Cloud based provisioning the state is [stored in Minio](https://min.io/) hosted in your management cluster.

## Tips for working with Atlantis

### What is the general flow using Atlantis for IaC?

- **Create a Commit and Change Request:** The change described by Terraform instructions is created in a PR at a folder which [Atlantis is listening for it](https://github.com/konstructio/gitops/blob/main/atlantis.yaml). Once the Change Request is created on GitHub/GitLab, Atlantis will plan it and show the possible impacts.
- **Approve the change:** Once you are ready, someone with access provides `atlantis apply` on the change request, triggering the process of executing the `plan` created.
- **Change is applied by Atlantis**: Atlantis executes the Terraform plan, and Terraform updates the shared statestore with new current state changes, the change request is merged to main, reflecting the new desired state.

### What can I use Atlantis & Terraform for?

For example, you can use your `gitops` repository to help track the creation of repositories:

- [AWS + GitHub repository template](https://github.com/kubefirst/gitops-template/blob/main/aws-github/terraform/github/repos.tf)
- [local + GitHub repository template](https://github.com/kubefirst/gitops-template/blob/main/k3d-github/terraform/github/repos.tf)

With Terraform using the S3 based state store, you can add any Terraform file to the `gitops` repository on which [Atlantis is listening for](https://github.com/kubefirst/gitops-template/blob/main/aws-github/atlantis.yaml) and Atlantis will try to plan and when approved, will apply the plan for you.

Beyond repositories and users, Atlantis enables your IaC demands to be tracked by your main branch registry. These eases up the usage of Terraform-based workflows to update the infrastructure you are operating.
