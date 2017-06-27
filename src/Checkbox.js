import React, {Component} from 'react'

export default function Checkbox({
  checked,
}) {
  return(
    <label>
      <input type="checkbox" checked={ checked }/>
      { ' ' + label }
    </label>
  )
}
