import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './album.css'
export default function Album() {
  return (
    <>
        <div className='container-album'>

            <div className='header'>
                <span>
                <h2>MUSIC</h2>
                </span>
                
            </div>
            
            <div className='album-pic'>
                <Link href='https://open.spotify.com/album/430Af0wtsNi3smXvzdvqgV'>

                    <Image
                    src='/club.jpg'
                    alt='Club Sandwich'
                    width={500}
                    height={500}
                    className='album-pic'
                    />
                </Link>
            </div>

            <div className='album-btn'>
                <button>
                    Listen Now
                </button>
            </div>

        </div>
      
    </>
  )
}
