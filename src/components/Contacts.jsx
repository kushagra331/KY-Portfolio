import React, { useRef } from 'react'
import { useState } from 'react' 

function Contacts() {
  const [listContacts] = useState([
    {
      title: 'Phone Number',
      value: '+84123XXX'
    },
    {
      title: 'Email',
      value: 'hohoang.dev@gmail.com'
    },
    {
      title: 'Instagram',
      value: '@lundev.web'
    }
  ]);
  const scrollTab=useRef();
  // customHook();
  return (
    <section className='contacts' ref={scrollTab}>
       <div className="title" >
        This is my Contacts
       </div>
       <div className="des" >
        I live in Bhopal. My ghar ka naam is kannu :/
       </div>
       <div className="list" >
        {
          listContacts.map((value, key) => (
            <div className='item' key={key}>
              <h3>{value.title}</h3>
              <div>{value.value}</div>
            </div>
          ))
        }
       </div>
    </section>
  )
}

export default Contacts
