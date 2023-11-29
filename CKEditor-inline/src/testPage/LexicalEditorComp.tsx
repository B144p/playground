import { $getRoot, $getSelection } from "lexical";
import { useEffect } from "react";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

const theme = {
  ltr: "ltr",
  rtl: "rtl",
  paragraph: "editor-paragraph",
};

const MyCustomAutoFocusPlugin = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.focus();
  }, [editor]);

  return null;
};

const onError = (error: any) => {
  console.error(error);
};

const LexicalEditorComp = () => {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
  };

  return (
    <>
      <h2>Plain text</h2>
      <LexicalComposer initialConfig={initialConfig}>
        <PlainTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={<div>Enter some text...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <MyCustomAutoFocusPlugin />
      </LexicalComposer>
      <h2>Rich text</h2>
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={<div>Enter some text........</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />

        <HistoryPlugin />
        <MyCustomAutoFocusPlugin />
      </LexicalComposer>
    </>
  );
};

export default LexicalEditorComp;
