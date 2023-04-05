import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from "../comps/Slider";
import Sliderr from "../comps/Sliderr";

export default function Home() {
  const textVariants = {
    visible: {
      transition: {
        staggerChildren: 0.01
      }
    },
    hidden: {
      transition: {
        staggerChildren: 0.01
      }
    }
  };

  const letterVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 }
  };

  const text1= "Farid Aluminium ";
  const text2 = "Bienvenue sur le site de notre Atelier de Fabrication de Vaisselle en Aluminium";

  return (
    <>
      <Head>
        <title>Farid | Home</title>
      </Head>
      
      <div className={styles.homeContainer}>
        <div className={styles.homeSousContainer1}>
        <motion.div 
      className={styles.homeAccueil} 
      initial="hidden"
      animate="visible"
      variants={textVariants}
    >
      {text1.split("").map((char, index) => {
        return (
          <motion.span key={char + "-" + index} variants={letterVariants}   className={styles.homeTitle } >
            {char}
          </motion.span>
        );
      })}
      <br/>
       {text2.split("").map((char, index) => {
        return (
          <motion.span key={char + "-" + index} variants={letterVariants}  className={styles.homeSousTitre } >
            {char}
          </motion.span>
        );
      })}
    </motion.div>
          <div className={styles.homeImage1}>
            <Image src={"/static/images/img1.png"} alt="img_0" width={450} height={450} />
          </div>
         
          
        </div>
        <div className={styles.homeSousContainer2}>
          <div className={styles.homeApropos}>
        
            <h1>A propos</h1>
            <p>Nous sommes une entreprise spécialisée dans la fabrication de vaisselle en aluminium de haute qualité depuis plus de 25 ans. Notre équipe de professionnels expérimentés travaille avec passion pour créer des produits durables, élégants et fonctionnels pour votre cuisine.</p>
            <Link href="/aprops"  legacyBehavior>
              <a className={styles.homeBtnMoreApropos}>Lire plus</a>
            </Link>
          </div>
        </div>
        <div className={`${styles.homeSousContainer3} ${styles.homeSousContainer3Mobile}`}>
          <div className={styles.homeProduit}>
            <h1 className={styles.homeProduitTitle}>Nos produits</h1>
            <div className={styles.homeSlider}>
           
            <Sliderr />
                
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
