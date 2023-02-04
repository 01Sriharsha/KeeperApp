import React from 'react'

export default function DetailInfo(props) {
  return (
    <p>{typeof (props.detailinfo) === 'number' ? 'Age' : 'Place'} : {props.detailinfo}</p>
  )
}
