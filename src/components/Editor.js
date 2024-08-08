import React, { useState, useEffect, useRef } from "react";
import { Highlight, themes } from "prism-react-renderer";

const Editor = () => {
  const [codes, setCodes] = useState(`//Write code`);
  const TextArea = useRef(null);
  const CodeArea = useRef(null);

  useEffect(() => {
    if (TextArea.current && CodeArea.current) {
      TextArea.current.style.height = "auto";
      TextArea.current.style.height = `${TextArea.current.scrollHeight+20}px`;
      CodeArea.current.style.height = `${TextArea.current.scrollHeight}px`;
    }
  }, [codes]);

  const handleChange = (e) => {
    setCodes(e.target.value);
  };

  return (

      <div className="editor">
        <Highlight theme={themes.shadesOfPurple} code={codes} language="jsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className='editorHighlight' ref={CodeArea} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
        <textarea className="codeTextarea" ref={TextArea} value={codes} onChange={handleChange}/>
      </div>
  );
};

export default Editor;