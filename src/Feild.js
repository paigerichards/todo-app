import React, {Component} from 'react'

export default function Checkbox({
  value,
  label
}) {
  return(
    <label>
      { ' ' + label }
      <input type="checkbox" checked={ checked }/>
    </label>
  )
}
