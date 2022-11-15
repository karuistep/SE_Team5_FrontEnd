import { React, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = (props) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current !== null) {
      props.setCode(editorRef.current.getValue());
    }
  }, [editorRef.current]);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  const handleEditorChange = (editor) => {
    props.setCode(editorRef.current.getValue());
  };

  return (
    <Editor
      height="100%"
      defaultLanguage="python"
      defaultValue={props.code}
      onMount={handleEditorDidMount}
      onChange={handleEditorChange}
    />
  );
};

export default CodeEditor;
