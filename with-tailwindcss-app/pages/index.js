import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image'




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
                    <Image
                        src="/images/adrss.png"
                        alt="Adel Design Research Website Design"
                        width={300}
                        height={170}
                    />
                <div className={utilStyles.rectangle}>
                    
                    <div className={utilStyles.circle1}></div>
                    <div className={utilStyles.circle2}></div>
                    <div className={utilStyles.circle3}></div>
                    <div className={utilStyles.circle4}></div>

                </div>
                <div className={utilStyles.companyDate}>
                    <h2>ADR Lab</h2>
                    <h2 style={{color: '#9C9C9C'}}>2022-Active</h2>
                </div>
                <h2>Role</h2>
                
            </div>
            <div className={utilStyles.oneBlock}>
                    <Image
                        src="/images/adrss.png"
                        alt="Adel Design Research Website Design"
                        width={300}
                        height={170}
                    />
                <div className={utilStyles.rectangle}>
                    
                    <div className={utilStyles.circle1}></div>
                    <div className={utilStyles.circle2}></div>
                    <div className={utilStyles.circle3}></div>
                    <div className={utilStyles.circle4}></div>

                </div>
                <div className={utilStyles.companyDate}>
                    <h2>ADR Lab</h2>
                    <h2 style={{color: '#9C9C9C'}}>2022-Active</h2>
                </div>
                <h2>Role</h2>
                
            </div>
            <div className={utilStyles.oneBlock}>
                    <Image
                        src="/images/adrss.png"
                        alt="Adel Design Research Website Design"
                        width={300}
                        height={170}
                    />
                <div className={utilStyles.rectangle}>
                    
                    <div className={utilStyles.circle1}></div>
                    <div className={utilStyles.circle2}></div>
                    <div className={utilStyles.circle3}></div>
                    <div className={utilStyles.circle4}></div>

                </div>
                <div className={utilStyles.companyDate}>
                    <h2>ADR Lab</h2>
                    <h2 style={{color: '#9C9C9C'}}>2022-Active</h2>
                </div>
                <h2>Role</h2>
                
            </div>
            <div className={utilStyles.oneBlock}>
                        <Image
                            src="/images/adrss.png"
                            alt="Adel Design Research Website Design"
                            width={300}
                            height={170}
                        />
                    
                <div className={utilStyles.rectangle}>
                    
                    <div className={utilStyles.circle1}></div>
                    <div className={utilStyles.circle2}></div>
                    <div className={utilStyles.circle3}></div>
                    <div className={utilStyles.circle4}></div>

                </div>
                <div className={utilStyles.companyDate}>
                    <h2>ADR Lab</h2>
                    <h2 style={{color: '#9C9C9C'}}>2022-Active</h2>
                </div>
                <h2>Role</h2>
                
            </div>
        </div>
        </>
    )
}
