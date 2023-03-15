import {
  useBlockNote,
} from "@blocknote/react";
import { EditorContent } from "@tiptap/react";
import { memo, useRef } from "react";

import type { Block, BlockNoteEditor } from "@blocknote/core";

import "@blocknote/core/style.css";

const EditorBlock = (props: {
  className?: string;
  onUpdate?: (blocks: Block[]) => void;
}): JSX.Element => {
  const { className, onUpdate } = props;
  const editorRef = useRef<BlockNoteEditor>();

  useBlockNote({
    editorDOMAttributes: { class: "h-full" },
    enableBlockNoteExtensions: true,
    onEditorReady: (e) => {
      editorRef.current = e;
    },
    onEditorContentChange: (e) => {
      if (onUpdate != null) {
        onUpdate(e.topLevelBlocks);
      }
    },
  });
  return (
    <EditorContent
      editor={editorRef.current?._tiptapEditor || null}
      className={className ? className : "h-full"}
    />
  );
};

export type EditorType = typeof EditorBlock;

export default memo(EditorBlock);
