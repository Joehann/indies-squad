import { ReactElement } from 'react'
import style from './home-page-signed-out.module.scss'
import { LoginButton, useAuth } from '@kobbleio/next/client'
import Image from 'next/image'

const HomePageOut = (): ReactElement => {
  return (
    <div className={style['home-page-out']}>
      <div className={style.overlay} />
      <div className={style.logo}>
        <Image
          src="/assets/images/logo/logo-with-background.svg"
          alt=" brand logo"
          width={120}
          height={120}
        />
      </div>
      <div className={style.content}>
        <h1>Une idée seule ne vaut rien !</h1>
        <p>
          Beaucoup de développeurs ont des idées de{' '}
          <span className="bold">side projects</span> qu&apos;ils ne
          concrétisent jamais. <br />
          <br />
          Réaliser un <span className="bold">projet en solo</span> est souvent
          difficile : pas de deadlines, insatisfaction du code produit,
          tentation d&apos;utiliser la dernière technologie... Autant de raisons
          qui font stagner nos projets, les condamnant souvent à ne jamais voir
          le jour.
          <br />
          <br />
          <span className="bold">Indies Squad</span>, propose d&apos;avancer
          ensemble et c&apos;est simple :
        </p>
        <ul>
          <li>Tu rejoins un groupe de 3 ou 4 développeurs</li>
          <li>Chaque groupe organise régulièrement une visio</li>
          <li>
            Chacun fait un point sur ses avancés et fixe ses objectifs pour la
            session suivante
          </li>
          <p>Si tu veux participer à l&apos;aventure, clique sur le bouton :</p>
        </ul>
        <LoginButton>
          <button className="orange">Rejoins la Waitlist</button>
        </LoginButton>
      </div>
    </div>
  )
}

export default HomePageOut
