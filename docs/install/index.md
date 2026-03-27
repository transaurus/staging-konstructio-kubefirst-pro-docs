---
title: Install
description: Support installations for Kubefirst
keywords: [akamai, aws, azure, civo, digital ocean, google cloud, k3s, k3d, vultr, provisioning, install, installation, setup, kubernetes, containers, clusters, kubefirst, konstruct] 
sidebar_position: 4
---

## Summary

Check out the section for your preferred cloud to review installation instructions for that cloud.

Kubefirst supports local provisioning [through k3d](../install/k3d/) and cloud provisioning through several clouds including: Akamai, AWS, Azure, Google, Civo, DigitalOcean, K3s, and Vultr.

- Check out the [Install & Config FAQ page](../admin/tech-faq.md) for details on some common issues with installation and configuration.

## Cluster Details

When you provision Kubefirst your cluster includes the applications outlined below.

| Application                       | Description                                                                 |
|-----------------------------------|---------------------------------------------------------------------------|
| Argo CD                           | GitOps Continuous Delivery                                                  |
| Argo Workflows                    | Application Continuous Integration                                          |
| Atlantis                          | Terraform Workflow Automation                                               |
| cert-manager                      | Certificate Automation Utility                                              |
| ChartMuseum                       | Helm Chart Registry                                                         |
| External Secrets Operators        | Syncs Kubernetes secrets with Vault secrets                                 |
| GitLab Runner *                   | GitLab Self-Hosted CI Executor                                              |
| GitHub Action Runner Controller * | GitHub Self-Hosted CI Executor                                              |
| HashiCorp Vault                   | Secrets Management                                                          |
| Metaphor                          | (development, staging, production) instance of sample Next.js app           |
| MinIO **                          | High-performance, S3 compatible object store                                |  
| Ingress Nginx                     | Ingress Controller                                                          |
| Traefik Ingress Controller **     | Native k3d Ingress Controller                                               |

`*` The inclusion of GitLab Runner or GitHub Action Runner Controller depends on the git provider selected.

`**` The use of MinIO and Traefik Ingress Controller are exclusively for k3d.
