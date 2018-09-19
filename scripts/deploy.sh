#!/bin/sh -ex

cd infrastructure
terraform init -backend=true

terraform plan -var-file main.tfvars
terraform apply -var-file main.tfvars -auto-approve 
cd ..
