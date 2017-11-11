import React from 'react';
import requireAuth from './require_authentication';

function Resources() {
  return (
    <div>
      Super special secret recipe
      <ul>
        <li>1 Cup Sugar</li>
        <li>1 Cup Pepper</li>
        <li>1 Cup Salt</li>
      </ul>
    </div>
  )
}

export default requireAuth(Resources);