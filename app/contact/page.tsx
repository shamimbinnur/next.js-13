import React from 'react'
import ContactMDX from '../../src/contents/contact.mdx'
import EditCallBack from '@/components/utils/EditCallBack'

const Contact = () => {
  return (
    <div className="flex flex-col">
      <main className="prose dark:prose-invert"><ContactMDX/></main>

      <div className="flex justify-end">
        <EditCallBack path="app/contact/page.tsx"/>
      </div>
    </div>
  )
}

export default Contact