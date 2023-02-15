import Footer from './Footer';
import Header from './Header';

type Props = { children: React.ReactNode };

export default function Layout(props: Props) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header className='mt-2' />
      <main>{props.children}</main>
      <Footer className='mb-2 mt-auto' />
    </div>
  );
}
