import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image'
import fsPromises from 'fs/promises';
import path from 'path'
import { useState } from 'react';


export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/json/data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}

export default function Home(props) {

    const [isShown, setIsShown] = useState(false);

    const posts = props.posts;
    const images = props.images;
    return(
        <>
        <div className={utilStyles.mainText}>
            <h1>I design 🖌 and build 👨‍💻 software to create engaging user experiences. I am a senior studying Computer Science in Engineering at the University of Michigan 〽️. Currently working at <a href='http://adrlabs.vercel.app'>ADR Lab</a></h1>
        </div>
        <div className={utilStyles.lowerSection}>
            <h3 style={{fontSize:16}}>Exploring film</h3>

            <div style={{flexDirection:'row-reverse'}} className={utilStyles.homePictures}>
            {images.map(image =>
                <Image className={utilStyles.filmStyle}
                                    src={"/images/"+image.filename}
                                    alt="film from Ross"
                                    width={400}
                                    height={300}
                />
            ) }
            </div>
        </div>
        <div className={utilStyles.lowerSection}>
            <h3 style={{fontSize:16}}>Experience</h3>

            <div style={{gap:80}} className={utilStyles.homePictures}>
                <div>
                    <h3 style={{fontSize:32}}>Founded Usersmagic</h3>
                    <p style={{}}>2020-2022</p>
                </div>
                <div>
                    <h3 style={{fontSize:32}}>Growth Fellow at Coda</h3>
                    <p style={{}}>2021-2022</p>
                </div>
                <div>
                    <h3 style={{fontSize:32}}>Web developer at ADR</h3>
                    <p style={{}}>2022-Active</p>
                </div>
                

            </div>
        </div>
        
         {/* <div className={utilStyles.header}>
            <h3 style={{color: '#C6C6C6'}}>Works</h3>
            <h3>About me</h3>
            <h3>Contact</h3>
        </div> */}
        {/* <div className={utilStyles.blockContainer}>
            {posts.map(post => <div className={utilStyles.oneBlock}>
                    <Image  onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
                        src={post.src}
                        alt={post.alt}
                        width={300}
                        height={170}
                    />

                <div className={utilStyles.rectangle}>
                 {isShown && (
                    <>
                    <div style={{background: post.color}} className={utilStyles.circle1}></div>
                    <div style={{background: post.color}} className={utilStyles.circle2}></div>
                    <div style={{background: post.color}} className={utilStyles.circle3}></div>
                    <div style={{background: post.color}} className={utilStyles.circle4}></div>
                    <div style={{background: post.color}} className={utilStyles.circle1}></div>
                    <div style={{background: post.color}} className={utilStyles.circle2}></div>
                    <div style={{background: post.color}} className={utilStyles.circle3}></div>
                    <div style={{background: post.color}} className={utilStyles.circle4}></div>
                    </>
                 )}
                </div>
                <div className={utilStyles.companyDate}>
                    <h2>{post.company}</h2>
                    <h2 style={{color: post.color}}>{post.date}</h2>
                </div>
                <h2>{post.role}</h2>
                
            </div>)}
        </div> */}
        </>
    )
}
