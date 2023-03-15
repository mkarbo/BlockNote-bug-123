
import dynamic from "next/dynamic";

import type { EditorType } from "@/components/blocknote/Editor";

const getEditorBlock = (): EditorType => {
  const EditorBlock = dynamic(
    () => import("@/components/blocknote/Editor"),
    {
      ssr: false,
    }
  ) as EditorType;

  return EditorBlock;
};

export default getEditorBlock;
