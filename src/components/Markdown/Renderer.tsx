import ReactMarkdown from 'react-markdown';
import { CodeProps } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as codeStyle } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { CSSProperties } from 'react';
import { parseCodeClassName } from '@/libs/react-markdown';
import styles from './markdown.module.css';

export default function Renderer(props: { md: string }) {
  return (
    <ReactMarkdown
      className={styles.markdown}
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{ code: (props: CodeProps) => <Code {...props} /> }}
    >
      {props.md}
    </ReactMarkdown>
  );
}

function Code(props: CodeProps) {
  const codeClassNameElements = parseCodeClassName(props.className);
  const shouldRenderAsBlock =
    codeClassNameElements.language || codeClassNameElements.fileName;

  return shouldRenderAsBlock ? (
    <CodeBlock classNameInfo={codeClassNameElements} codeProps={props} />
  ) : (
    <code className={props.className}>{props.children}</code>
  );
}

type CodeBlockProps = {
  classNameInfo: ReturnType<typeof parseCodeClassName>;
  codeProps: CodeProps;
};
function CodeBlock(props: CodeBlockProps) {
  const fileName = props.classNameInfo.fileName;
  const borderStyles: CSSProperties = {
    border: 'solid',
    borderWidth: '1px',
    borderColor: 'gray',
  };
  const customStyle = fileName
    ? { marginTop: 0, ...borderStyles }
    : borderStyles;
  return (
    <>
      {fileName && <FileName fileName={fileName} />}
      <SyntaxHighlighter
        {...props.codeProps}
        customStyle={customStyle}
        language={props.classNameInfo.language}
        style={codeStyle}
      >
        {String(props.codeProps.children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </>
  );
}

function FileName(props: { fileName: string }) {
  return (
    <div className='mb-0'>
      <span className='bg-black px-2 py-1 text-gray-400 text-xs'>
        {props.fileName}
      </span>
    </div>
  );
}
