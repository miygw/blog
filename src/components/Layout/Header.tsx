import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export default function Header(props: { className?: string }) {
  return (
    <header
      className={twMerge('flex flex-col items-center gap-y-2', props.className)}
    >
      miygw.vercel.app
      <Portrait />
    </header>
  );
}

const Portrait = () => {
  return <Image src='/miygw.jpg' alt='portrait' height='70' width='70' />;
};
