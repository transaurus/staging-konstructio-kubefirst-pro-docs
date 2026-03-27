---
title: Custom Cluster Templates Prerequisites
description: Prerequisites for using custom cluster templates in Kubefirst Pro
keywords: [prerequisites, custom templates, terraform, git, kubefirst]
sidebar_position: 2
---

## Summary

Before creating custom cluster templates, ensure you have the required tools and access.

## Requirements

### Kubefirst Pro Version

- Kubefirst Pro 2.9 or later
- Business or Enterprise tier license for cluster provisioning functionality

### Git Repository

You need a Git repository to store your Terraform modules:

- GitHub or GitLab repository
- Repository accessible from your management cluster

### Terraform Knowledge

- Familiarity with Terraform module structure
- Understanding of provider requirements
- Knowledge of your cloud provider's Terraform resources

## Repository Access Setup

### Public Repositories

Public repositories work without additional configuration.

### Private Repositories

For private repositories, you'll need to provide access credentials when creating the custom template:

1. **GitHub**: Create a personal access token with repository read permissions.
2. **GitLab**: Create a project access token with read_repository scope.

You'll provide these credentials in the Kubefirst UI when configuring your custom template.

## Validation Checklist

Before proceeding:

- [ ] Kubefirst Pro 2.9+ installed
- [ ] Git repository created
- [ ] Repository access configured

## What's Next?

Ready to create custom templates? Continue to [Custom Cluster Templates](./custom-templates.md).