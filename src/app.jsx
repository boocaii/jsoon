import { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import * as icons from './icons.jsx';

import './app.css';

const defaultValue = `
{
  "glossary": {
      "title": "example glossary",
  "GlossDiv": {
          "title": "S",
    "GlossList": {
              "GlossEntry": {
                  "ID": "SGML",
        "SortAs": "SGML",
        "GlossTerm": "Standard Generalized Markup Language",
        "Acronym": "SGML",
        "Abbrev": "ISO 8879:1986",
        "GlossDef": {
                      "para": "A meta-markup language, used to create markup languages such as DocBook.",
          "GlossSeeAlso": ["GML", "XML"]
                  },
        "GlossSee": "markup"
              }
          }
      }
  }
}

`;

const sideWidth = 200;


function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const [optionFormatOnPaste, setOptionFormatOnPaste] = useState(true);
  const [optionSortKeys, setOptionSortKeys] = useState(true);

  const editorRef = useRef(null);
  const monacoRef = useRef(null);
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    monacoRef.current = monaco;

    editor.onDidPaste((e) => {
      console.log('onDidPaste:', e)
    })
  }

  function handleFormat() {
    const e = editorRef.current;
    console.log(e.getValue());
    e.getAction('editor.action.formatDocument').run();
  }


  useEffect(() => {
    function handleResize() {
      // 处理窗口大小变化的逻辑
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }

    // 添加窗口大小变化事件监听器
    window.addEventListener("resize", handleResize);

    // 组件卸载时移除事件监听器
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // [] 表示只在组件挂载和卸载时执行一次


  return (

    <div>

      <div className='content'>
        <div
          className='side'
          style={{ width: sideWidth, maxWidth: sideWidth }}
        >
          <div className='logo-wrapper'>
            <span className='logo'>JSOON</span>
          </div>

          <div style={{ height: '10px' }}></div>

          {/* <p className='section-title'>OPTIONS</p> */}

          <div className='icons'>
            <icons.IconParkSolidBack className='icon' />
            <icons.IconParkSolidForward className='icon' disabled={true} />
            <icons.IconParkSolidDeleteFive className='icon' />
            <icons.IconParkSolidCuttingOne className='icon' />
            <icons.IconParkSolidCopyOne className='icon' />
          </div>

          <div style={{ height: '20px' }}></div>

          <div className='options'>
            <div className='options-items'>

              <div className="option">
                <label htmlFor="option_format_on_paste">Format on paste</label>
                <input
                  id='option_format_on_paste'
                  type="checkbox"
                  checked={optionFormatOnPaste}
                  onChange={(e) => setOptionFormatOnPaste(e.target.checked)}
                />
              </div>

              <div className="option">
                <label htmlFor="option_sort_keys">Sort keys</label>
                <input
                  id='option_sort_keys'
                  type="checkbox"
                  checked={optionSortKeys}
                  onChange={(e) => setOptionSortKeys(e.target.checked)}
                />
              </div>
            </div>

          </div>

          {/* <p className='section-title'>ACTIONS</p> */}
          <div className='buttons'>
            <button className='btn' onClick={handleFormat}>Format</button>
          </div>

        </div>
        <div className='editor'>
          <Editor
            height={(windowHeight) + "px"}
            width={(windowWidth - sideWidth) + "px"}
            defaultLanguage="json"
            defaultValue={defaultValue}
            options={{
              automaticLayout: true,
              roundedSelection: true,
              scrollBeyondLastLine: false,
              fontSize: 13,
              cursorWidth: 1,
              formatOnPaste: optionFormatOnPaste,
            }}
            onMount={handleEditorDidMount}
          />
        </div>

      </div>

    </div>
  )
}

export default App
