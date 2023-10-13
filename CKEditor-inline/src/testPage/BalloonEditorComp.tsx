import { CKEditor } from "@ckeditor/ckeditor5-react";
// import { BalloonEditor } from "@ckeditor/ckeditor5-editor-balloon";
import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";

const BalloonEditorComp = () => {
  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
    console.log(data);
  };

  return (
    <div className="my-balloon-editor">
      <h2>Balloon CKEditor 5 Example</h2>
      <CKEditor
        editor={BalloonEditor}
        config={{
          language: "en",
          // plugins: [Font],
            // toolbar: ['fontColor', 'bold', 'italic', 'underline'],
        }}
        data="<p>Hello, Balloon CKEditor 5!</p>"
        onChange={handleEditorChange}
      />

    </div>
  );
};

export default BalloonEditorComp;
