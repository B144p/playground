import { useCommands } from "@remirror/react";
import CKEditorBalloonComp from "./ckeditor/CKEditorBalloonComp";

const Menu = () => {
  const { toggleBold, focus } = useCommands();

  return (
    <button
      onClick={() => {
        toggleBold();
        focus();
      }}
    >
      B
    </button>
  );
};

const App = () => {
  return (
    <>
      {/* <Menu /> */}
      <CKEditorBalloonComp />
    </>
  );
}

export default App;
