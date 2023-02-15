import { ComponentProps, PropsWithChildren } from 'react';
import { default as NextLink } from 'next/link';

type Props = ComponentProps<typeof NextLink> &
  PropsWithChildren<{ href: string }>;

/** `<a>` 拡張。外部リンクの場合はそのまま `<a>` を利用し、内部リンクの場合は `next/link` の `Link` を利用する。 */
export default function Anchor(props: Props) {
  const isExternal = props.href.startsWith('http');
  return isExternal ? (
    <ExternalAnchor {...props} />
  ) : (
    <InternalAnchor {...props} />
  );
}

const ExternalAnchor = (props: Props) => <a {...props}>{props.children}</a>;

const InternalAnchor = (props: Props) => (
  <NextLink {...props}>{props.children}</NextLink>
);
