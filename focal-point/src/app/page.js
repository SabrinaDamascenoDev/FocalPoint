import '../styles/globals.scss'
import Image from 'next/image';
import logo from '../public/images/logo.svg'


export default function Home() {
  return (
    <div>
        <header>
            <Image src={logo} 
            alt='Logo'  
            width={150} 
            height={150}
            />
            
        </header>
    </div>
  );
}
