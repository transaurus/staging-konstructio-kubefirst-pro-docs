---
title: Metaphor Diagrams
description: View Diagrams of Metaphor the Konstruct example application showcasing Kubefirst features
keywords: [ci, cd, metaphor, diagrams, workflow, kubernetes, containers, clusters, kubefirst, konstruct]
sidebar_position: 2
---

## Summary

Check out the diagram below for details on Kubernetes representations in the Metaphor application.

The Metaphor application is a source code git repository to demonstrate how to build and deliver a microservice application on Kubefirst. Metaphor is deployed to the `development`, `staging`, and `production` namespaces in your Kubefirst cluster.

![Metaphor Diagram](../../img/diagrams/metaphor-diagram-light.png#light-mode)![Metaphor Diagram](../../img/diagrams/metaphor-diagram-dark.png#dark-mode)

The Metaphor chart, when published and deployed using our example CI, provides a tangible example of how to set up configurations and secrets for different environments, how to make a service available outside the cluster with automatic DNS hostname resolution and TLS certificate generation and renewal, and automatic versioning for your microservice's released charts.

Check out [the documentation about Metaphor](../metaphor/use-metaphor.md) to learn more.
