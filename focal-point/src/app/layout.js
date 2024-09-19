
import Inter from 'next/font/google'

const interTight = Inter({
  subsets: ['latin'],
  weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})


export const metadata = {
  title: "Focal Point",
  description: "Projeto para o teste de um processo seletivo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={interTight.className}>
        {children}
      </body>
    </html>
  );
}
