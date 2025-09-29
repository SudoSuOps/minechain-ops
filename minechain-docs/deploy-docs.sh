#!/bin/bash

# Clean up old structure
rm -rf docs/for-renters docs/for-providers docs/for-tenants docs/for-brokers

# Create directory structure
mkdir -p docs/getting-started
mkdir -p docs/for-tenants
mkdir -p docs/for-providers
mkdir -p docs/platform

# Create all doc files
# (Files will be created below)
