import github from '@/assets/icons/git.png';

export default function Footer() {
  return (
    <footer className='text-neutral-40 fixed bottom-4 flex  items-center gap-1 text-xs font-medium'>
      by{' '}
      <a
        className=' flex items-center gap-1 text-purple-400/80'
        href='https://github.com/Aejkatappaja/Screenshot_Maker/Aejkatappaja'
        target='_blank'
      >
        Frank <img src={github} alt='github-icon' className='h-6 w-6' />
      </a>{' '}
    </footer>
  );
}
