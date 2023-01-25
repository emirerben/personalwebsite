import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';



export default function Home() {
    return(
        <>
        <div className={utilStyles.mainText}>
            <h1>I design and build software to create an engaging user experience</h1>
        </div>
         <div className={utilStyles.header}>
            <h3 style={{color: '#C6C6C6'}}>Works</h3>
            <h3>About me</h3>
            <h3>Contact</h3>
        </div>
        <div className={utilStyles.blockContainer}>
            <div className={utilStyles.oneBlock}>
                <div className={utilStyles.rectangle}>
                    <div className={utilStyles.circle1}></div>
                    <div className={utilStyles.circle2}></div>
                    <div className={utilStyles.circle3}></div>
                    <div className={utilStyles.circle4}></div>

                </div>
                <div className={utilStyles.companyDate}>
                    <h2>Company</h2>
                    <h2>Date</h2>
                </div>
                <h2>Role</h2>
                
            </div>
        </div>
        </>
    )
}
