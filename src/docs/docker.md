---
path: "/docker"
date: "2017-11-07"
title: "Using Docker"
---

## Add secrets

Using kubectl create your docker secret, if you are running on our cloud clusters:

```
kubectl --kubeconfig=kubeconf.yaml create secret docker-registry dockerhub \
--docker-server=https://index.docker.io/v1/ \
--docker-username=$USER \
--docker-password=$PASSWORD
```

`CLUSTER_NAMESPACE` is the name of the namespace where your KubeBuild cluster is running.

`kubectl get ns` to see all namespaces

```bash
kubectl --namespace=$CLUSTER_NAMESPACE create secret docker-registry dockerhub \
--docker-server=https://index.docker.io/v1/ \
--docker-username=$USER \
--docker-password=$PASSWORD
```

## Workflow that pushes to docker hub using your secret 

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Workflow
metadata:
  generateName: api-

spec:
  entrypoint: api
  # pull secrets for the images
  imagePullSecrets:
  - name: dockerhub
  arguments:
    parameters:
    - name: repo
      value: git@github.com:org/repo.git
    - name: revision
      value: develop
    - name: gitSecretName
      value: git-secret
    - name: dockerSecretName
      value: dockerhub

  templates:
  - name: api
    steps:
    - - name: build
        template: ci-dind
        arguments:
          parameters:
          - name: cmd
            value: "{{item}}"
        withItems:
        - docker build -t registry/app:1 . && docker push registry:app:1
        withItems:

  - name: ci-dind
    inputs:
      parameters:
      - name: cmd
      artifacts:
      - name: code
        path: /src
        git:
          repo: "{{workflow.parameters.repo}}"
          revision: "{{workflow.parameters.revision}}"
          sshPrivateKeySecret:
            name: "{{workflow.parameters.gitSecretName}}"
            key: sshPrivateKey
    container:
      image: docker:stable
      command: [sh, -c]
      args: ["until docker ps; do sleep 3; done && {{inputs.parameters.cmd}}"]
      workingDir: /src
      volumeMounts:
        - name: docker-volume
          mountPath: "/root/.docker"
          readOnly: true
      env:
      - name: DOCKER_HOST
        value: 127.0.0.1
    sidecars:
    - name: dind
      image: docker:stable-dind
      securityContext:
        privileged: true
      mirrorVolumeMounts: true

  volumes:
  - name: docker-volume
    secret:
      secretName: "{{workflow.parameters.dockerSecretName}}"
      defaultMode: 0600
      items:
      - key: .dockerconfigjson
        path: config.json

```