import Script from 'next/script';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';
import WhatsAppButton from '@/components/widgets/WhatsAppButton';
import Preloader from '@/components/effects/Preloader';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Preloader />
      <SmoothScrollProvider>
        <Navigation />
        {children}
        <Footer />
        <Script
          id="lazy-ga"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var initialized = false;
                function initGA() {
                  if (initialized) return;
                  initialized = true;
                  
                  window.removeEventListener('pointermove', initGA);
                  window.removeEventListener('scroll', initGA);
                  window.removeEventListener('touchstart', initGA);
                  window.removeEventListener('keydown', initGA);
                  
                  var gaScript = document.createElement('script');
                  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-W5P7806J2F';
                  gaScript.async = true;
                  document.head.appendChild(gaScript);
                  
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-W5P7806J2F');
                }
                
                window.addEventListener('pointermove', initGA, { passive: true });
                window.addEventListener('scroll', initGA, { passive: true });
                window.addEventListener('touchstart', initGA, { passive: true });
                window.addEventListener('keydown', initGA, { passive: true });
                
                setTimeout(initGA, 4000);
              })();
            `,
          }}
        />
        <WhatsAppButton />
      </SmoothScrollProvider>
    </>
  );
}
