import React, { useState } from 'react'
import Editor from '../components/Editor'
const EditorPage = () => {
  return (
    <div className='mainWrap'> 
        <div className='aside'>
            <div className='asideInner'>
                <div className='logo'>
                    <img className='logoImage' src="/logo-black.png" alt="logo-black"/>
                </div>
                <h3>Pro Code Editor</h3>
            </div>
        </div>
        <div className='editorWrap'>
          <Editor/>
        </div>
    </div>
  )
}

export default EditorPage