import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <>
      <Seo />

      <main>
        <section className='bg-gray-100'>
          <div className='flex flex-col items-center justify-center min-h-screen text-center layout'>
            <h1>TexAu Open Graph Generator</h1>
            <p className='mt-2 text-sm text-gray-600'>
              Made for TexAu Website to generate OG images for our large scale website.
            </p>

            <footer className='absolute text-gray-800 bottom-2'>
              © {new Date().getFullYear()} By{' '}
              <CustomLink href='https://vikeshtiwari?ref=og'>
                Vikesh Tiwari
              </CustomLink>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
