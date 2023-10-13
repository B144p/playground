import React, { useCallback, useEffect } from 'react';
import { useHelpers, useRemirrorContext } from '@remirror/react';
import { WysiwygEditor } from '@remirror/react-editors/wysiwyg';

const SAMPLE_DOC = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      attrs: { dir: null, ignoreBidiAutoUpdate: null },
      content: [{ type: 'text', text: 'Loaded content' }],
    },
  ],
};

function LoadButton() {
  const { setContent } = useRemirrorContext();
  const handleClick = useCallback(() => setContent(SAMPLE_DOC), [setContent]);

  return (
    <button onMouseDown={(event) => event.preventDefault()} onClick={handleClick}>
      Load
    </button>
  );
}

function SaveButton() {
  const { getJSON } = useHelpers();
  const handleClick = useCallback(() => alert(JSON.stringify(getJSON())), [getJSON]);

  return (
    <button onMouseDown={(event) => event.preventDefault()} onClick={handleClick}>
      Save
    </button>
  );
}









import { Remirror, ThemeProvider, useActive, useCommands, useRemirror } from '@remirror/react';
import { useSelectedText } from '@remirror/react';
import { TextColorExtension } from 'remirror/extensions';
import { htmlToProsemirrorNode } from 'remirror';

const RandomSpan = () => {
  const text = useSelectedText();

//   console.log('useSelectedText.text', text)

  useEffect(() => {
    const tooltip = document.querySelector('[role="tooltip"]');

    console.log('tooltip', tooltip)
  }, [])

  return text  && <span>{text}</span>;
}

const extensions = () => [new TextColorExtension()];

const RemirrorEditorComp: React.FC = () => {
    // const { manager, state, onChange } = useRemirror({
    //     extensions: extensions,
    //     content: `<p>Text in <span data-text-color-mark="red">red</span></p>`,
    //     stringHandler: htmlToProsemirrorNode,
    //   });


    return (
    <>
  <WysiwygEditor
    placeholder='Start typing...'
    // manager={manager}
    // autoFocus
    // onChange={onChange}
    // initialContent={state}
    // autoRender='end'
  >
    {/* <LoadButton />
    <SaveButton /> */}

    {/* <TextColorButton  /> */}
    {/* <RandomSpan /> */}
  </WysiwygEditor>

  {/* <Remirror
        manager={manager}
        autoFocus
        onChange={() => {}}
        initialContent={state}
        autoRender='end'
      >
        <TextColorButton />
    <RandomSpan />

      </Remirror> */}
  </>
)};

export default RemirrorEditorComp;