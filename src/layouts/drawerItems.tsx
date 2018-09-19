import { List, ListItem, ListItemText } from '@material-ui/core'
import { Link, Match } from '@reach/router'
import React from 'react'

const listItems = [
  {
    path: '/terms-of-service',
    title: 'Terms of Service',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy',
  },
]

export const drawerItems = (
  <Match path="/*">
    {props => (
      <List>
        {listItems.map(item => (
          <ListItem
            key={item.path}
            selected={props.location.pathname.startsWith(item.path)}
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
