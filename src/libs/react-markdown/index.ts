type CodeClassNameElements = {
  /** プログラミング言語名。指定がない場合はundefined。 */
  language?: string;
  /** ファイル名。指定がない場合はundefined。 */
  fileName?: string;
};

/** react-markdownが生成したcode要素のクラス名を解析する。 */
export function parseCodeClassName(className?: string): CodeClassNameElements {
  // https://github.com/remarkjs/react-markdown#appendix-b-components
  const prefix = 'language-';
  const afterPrefix = className?.split(prefix)?.[1];

  // 'langName' -> [ 'langName' ]
  // 'langName:fileName' -> [ 'langName', 'fileName' ]
  // ':fileName' -> [ '', 'fileName' ]
  const afterPrefixElements = afterPrefix?.split(':');
  return {
    language:
      afterPrefixElements?.[0] === '' ? undefined : afterPrefixElements?.[0],
    fileName: afterPrefixElements?.[1],
  };
}
