import Anchor from '@/components/Anchor';
import { twMerge } from 'tailwind-merge';

export default function Footer(props: { className?: string }) {
  return (
    <footer
      className={twMerge(
        'w-screen flex justify-center gap-x-5',
        props.className
      )}
    >
      <Item text='Twitter' href='https://twitter.com/6emcSYackedM6ar' />
      <Item text='GitHub' href='https://github.com/miygw' />
    </footer>
  );
}

const Item = (props: { text: string; href: string }) => {
  return <Anchor {...props}>{props.text}</Anchor>;
};
