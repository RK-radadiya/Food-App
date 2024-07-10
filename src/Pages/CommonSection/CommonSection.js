import React from 'react'

export default function CommonSection(props) {
  return (
    <section className='common_section'>
      <div className='container'>
        <h2>{props.title}</h2>
      </div>
    </section>
  )
}
