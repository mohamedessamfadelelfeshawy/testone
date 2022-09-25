import React from 'react'
import './Member.css'

export default function Member(props) {
  return (
    <div className='member'>
        <div>
            <b>name : </b> {props.mName}
        </div>
        <div>
            <b>age : </b> {props.mAge}
        </div>
        <div>
            <b>title : </b> {props.mTitle}
        </div>
    </div>
  )
}
