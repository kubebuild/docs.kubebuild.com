---
path: "/default-params"
date: "2018-19-11"
title: "Default Params"
---

## KubeBuild params for all builds

```
Spec:
  Arguments:
    Parameters:
      Name:              buildID
      Value:             xxx-xxx-xxx
      Name:              repo
      Value:             git@gitlab.com:kubebuild/kube-api.git
      Name:              revision
      Value:             74a20cc1cad6655288e3dc511c2a1bb3157b02d6
      Name:              buildNumber
      Value:             129
      Name:              branch
      Value:             master
      Name:              clusterToken
      Value:             xxx-xxx
      Name:              gitSecretName
      Value:             git-secret
```

This paramenters can be used in any of your build steps or dags.