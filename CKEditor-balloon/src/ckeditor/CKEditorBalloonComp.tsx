import { CKEditor } from "@ckeditor/ckeditor5-react";
import BalloonEditor from "ckeditor5-custom-build";
import React from "react";

type Props = {};

const CKEditorBalloonComp = (props: Props) => {
  return (
    <>
      <CKEditor
        editor={BalloonEditor}
        config={{
          language: "en", // Replace with your desired language.
        }}
        data="<p>Hello, Balloon CKEditor 5!</p>"
      />
    </>
  );
};

export default CKEditorBalloonComp;
