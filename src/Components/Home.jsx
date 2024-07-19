import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import TelegramBot from './TelegramBot'

export default function Home() {
    return (
        <>
        <div className='container'>
            <Header />
            <Main />
            <TelegramBot/>
            <Footer />
        </div>
        </>
    )
}
