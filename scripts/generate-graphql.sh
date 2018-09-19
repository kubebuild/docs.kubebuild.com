#!/usr/bin/env bash

ME=`basename "$0"`

usage()
{
  echo "Usage: $ME" >&2
  exit 1

}

if ! [ -x "$(command -v graphql)" ]; then
  echo 'Error: graphql is not installed.' >&2
  npm i -g graphql-cli graphql-cli-generate-fragments
fi

PROJECT=app

echo 'Getting schema'

graphql get-schema -p $PROJECT

echo 'Getting fragments'
graphql generate-fragments -p $PROJECT -o src/graphql -g graphql

echo 'Generating typescript types'

yarn run gql-gen --schema http://localhost:4000/graphql --template typescript --out ./src/types/graphql.types.ts