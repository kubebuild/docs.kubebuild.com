import { List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

export const drawerItems = (
  <div>
    <List>
      <ListItem>
        <Link to="/">
          <ListItemText primary="Getting Started" />
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/docs/pipelines/">
          <ListItemText primary="Pipelines" />
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/404/">
          <ListItemText primary="Builds" />
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/page-2/">
          <ListItemText primary="Tutorials" />
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/page-2/">
          <ListItemText primary="Webhooks" />
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/page-2/">
          <ListItemText primary="REST API" />
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/page-2/">
          <ListItemText primary="GraphQL API" />
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/page-2/">
          <ListItemText primary="Dashboard" />
        </Link>
      </ListItem>
    </List>
  </div>
)
