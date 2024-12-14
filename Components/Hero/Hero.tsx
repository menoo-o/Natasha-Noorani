import Image from "next/image";
import Link from "next/link";
import './hero.css'

export default function Hero() {
    return (
      <>
        <div className="hero">
          <Image 
            src="/hero1.jpg" 
            alt="hero-img" 
            className="hero-img"  
            width={1550}
            height={740}
            priority 
          />
        </div>


        <nav>
          <div className="logo">
            <Image 
              src='/6.png'
              width={140}
              height={150}
              alt="logo"
            />    
          </div>    
  
          <div className="links">
            <Link href='/'>Home</Link>
            <Link href='/'>Shows</Link>
            <Link href='/merch'>Merch</Link>
            <Link href='/'>Blogs</Link>
            <Link href='/'>Contact</Link>
            <Link href='/'>About</Link>
          </div>
        </nav>

    
  
      </>
    );
  }
  