import type { Metadata } from 'next';
import Header from '../components/Header';
import '../style/global.scss'

// TODO: Todas as importações da página.


export const metadata: Metadata = {
  title: 'Spider-verse',
  description: 'Apresentação do multiverso do Spider-man',
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
