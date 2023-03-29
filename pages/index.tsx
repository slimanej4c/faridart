import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import React, { useState } from 'react';

import Slider from "../comps/Slider";

export default function Home() {

  return (
    <>
      <Head>
        <title>Farid | Home</title>
      </Head>
      
      <div className={styles.homeContainer}>
        <div className={styles.homeSousContainer1}>
          <div className={styles.homeAccueil}>
            <h1 className={styles.homeTitle}>FARID Aluminium</h1>
            <p className={styles.homeSousTitre}>Bienvenue sur le site de notre Atelier de Fabrication de Vaisselle en Aluminium !</p>
          </div>
          <div className={styles.homeImage1}>
            <Image src={"/static/images/img1.png"} alt="img1" width={450} height={450} />
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
           
            <Slider />
                
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
