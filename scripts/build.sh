#!/bin/sh -ex
yarn install
rm -rf public/
rm -rf .cache/
gatsby build