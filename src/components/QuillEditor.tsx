import * as React from "react";

type QuillType = import("quill").Quill;

const useQuill = () => {
  const [quill, setQuill] = React.useState<any>(null);
  const editorRef = React.useRef<HTMLDivElement | null>(null);
  const [editor, setEditor] = React.useState<QuillType | null>(null);

  React.useEffect(() => {
    if (document) {
      import("quill").then((q) => setQuill(q.Quill));
    }
  }, [document]);

  React.useEffect(() => {
    if (editorRef.current && quill) {
      console.log("Ref set.");
      setEditor(new quill(editorRef.current));
    }
  }, [quill, editorRef]);

  return { quill, editor, editorRef };
};

const QuillEditor = () => {
  const { editor, editorRef } = useQuill();

  return (
    <div ref={editorRef}>
      <p>Hello World!</p>
      <p>
        Some initial <strong>bold</strong> text
      </p>
      <p>
        <br />
      </p>
    </div>
  );
};

export default QuillEditor;

