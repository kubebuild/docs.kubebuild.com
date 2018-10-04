import { List, ListItem, ListItemText } from '@material-ui/core'
import { Link, Match } from '@reach/router'
import React from 'react'

const listItems = [
  {
    path: '/',
    title: 'Argo Workflow',
  },
  {
    path: '/artifact-repo',
    title: 'Artifact Repository',
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy',
  },
]

const isSelected = (pathname: string, itemPath: string) => {
  if (pathname === '/' && itemPath === '/' && pathname === itemPath) {
    return true
  } else if (itemPath !== '/') {
    return pathname.startsWith(itemPath)
  }
  return false
}

export const drawerItems = (
  <Match path="/*">
    {props => (
      <List>
        {listItems.map(item => (
          <ListItem
            key={item.path}
            selected={isSelected(props.location.pathname, item.path)}
          >
            <Link to={item.path}>
              <ListItemText primary={item.title} />
            </Link>
          </ListItem>
        ))}
      </List>
    )}
  </Match>
)
