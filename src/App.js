import './App.css';
import Navigation from './components/Navigation';
import CustomSection from './components/CustomSection';
import Card from './components/Card';
import Tag from './components/MyTag';
import Contacts from './components/Contacts';
import resume from './resources/zivotopis.pdf';
import homeLogo from './resources/homeImage.svg';
import { useInView } from 'react-intersection-observer';
import deadliftLogo from './resources/deadlift.png';
import sudokuLogo from './resources/sudoku.png';
import queensLogo from './resources/chess.png';
import sudoku from './resources/sudokuExample.png';
import nqueens from './resources/nqueens.png';
import SkillCard from './components/SkillCard';
import C from './resources/C_Logo.png';
import java from './resources/java.png';
import javascript from './resources/javascript-1.svg';
import html from './resources/html.png';
import css from './resources/css.png';
import react from './resources/react.png';
import dart from './resources/dart.png';
import flutter from './resources/flutter.png';
import python from './resources/python.png';
import sql from './resources/sql.png';
import dataStructure from './resources/diagram.png';

import analytics from './resources/analytics.png';
import database from './resources/database-table.png';
import ui from './resources/ui-design.png';

let config = {
  triggerOnce: true,
  threshold: 0.5,
};

let config2 = {
  triggerOnce: true,
  threshold: 0.2,
};


function App() {
  const { ref: refFirst, inView: inViewFirst } = useInView(config);
  const { ref: refAboutMe, inView: inViewAboutMe } = useInView(config2);
  const { ref: refCard1, inView: inViewCard1 } = useInView(config);
  const { ref: refCard2, inView: inViewCard2 } = useInView(config);
  const { ref: refCard2_2, inView: inViewCard2_2 } = useInView(config);
  const { ref: refCard3, inView: inViewCard3 } = useInView(config2);
  const { ref: refCard4, inView: inViewCard4 } = useInView(config);
  const { ref: refCard5, inView: inViewCard5 } = useInView(config);
  const { ref: refCard6, inView: inViewCard6 } = useInView(config);
  const { ref: refCard7, inView: inViewCard7 } = useInView(config);

  return (
    <>
      <Navigation />
      <div className='hide'></div>
      <div className='tag2'></div>
      <div className='content'>
        <section className='home'>
          <div className='header'>
            <div className='left'>
              <p><span>Ahoj, ja som</span></p>
              <h1>Peter Rujak 👋</h1>
              <p className='desc'>Študent, ktorý si hľadá prácu na polovičný úväzok a miluje programovanie.</p>
              <a href={resume} download={'zivotopis'} className='btn'>Získať životopis</a>
            </div>
            <div className='right'>
              <img src={homeLogo} alt="React Logo" />
            </div>
          </div>
        </section>
        <CustomSection className={`aboutMe ${inViewFirst ? ' animate' : ' invisible'}`} ref={refFirst} title={'O mne'} >
          <p>
            Moje meno je Peter. Mám 22 rokov a momentálne som v poslednom ročníku bakalárskeho programu Technickej univerzity v Košiach. Som časovo flexibilný nakoľko škola zaberá v mojom rozvrhu len veľmi málo času.
            Rád sa v tejto oblasti rozvíjam a mám rád nové výzvy.
            Jedným z mojich najväčších úspechov je vytvorenie aplikácie "Deadlift",
            ktorú som vyvinul počas letných prázdnin.
          </p>
        </CustomSection >
        <CustomSection className={`projects ${inViewAboutMe ? ' animate' : ' invisible'}`} ref={refAboutMe} title={'Moje projekty'} id='projekty'>
          <Card
            ref={refCard1}
            inView={inViewCard1}
            title={'Deadlift'}
            imgSrc={deadliftLogo}
            showBadge={true}
            year={2023}
            description={'Táto aplikácia je zatiaľ mojím najväčším projektom, je to fitness aplikácia, ktorá slúži na sledovanie tréningov a zapisovanie kalórií. Aplikácia je dostupná na Google Play a je stále vo vývoji.'}
          ></Card>
          <Card
            ref={refCard2}
            inView={inViewCard2}
            title={'Jigsaw Sudoku'}
            imgSrc={sudokuLogo}
            exampleSrc={sudoku}
            year={2023}
            description={'Jedným z mojich najzaujímavejších školských projektov je Jigsaw Sudoku. Vyvíjal som to na predmete "Komponentové programovanie". Táto hra je naprogramovaná hlavne v jazyku Java, grafické rozhranie je zobrazené vo webovom prehliadači. Všetky dáta sa ukládajú do SQL databázy.'}
          ></Card>
          <Card
            ref={refCard2_2}
            inView={inViewCard2_2}
            title={'N Queens Problem'}
            imgSrc={queensLogo}
            exampleSrc={nqueens}
            year={2023}
            description={'V tomto projekte som sa venoval implementácii 5 algoritmov na riešenie klasického problému N-queens (N-dám) v programovacom jazyku Python. Problém spočíva v umiestnení N dám na šachovnicu o veľkosti N×N tak, aby sa žiadne dve dámy nenachádzali na rovnakej horizontálnej, vertikálnej alebo diagonálnej línii.'}
          ></Card>
        </CustomSection >
        <CustomSection title='Moje schopnosti' className={`skills ${inViewCard3 ? ' animate' : ' invisible'}`} ref={refCard3}>
          <div className={`row ${inViewCard4 ? ' animate' : ' invisible'}`} ref={refCard4}>
            <SkillCard title={'Dátové štruktúry a algoritmy'} description={'Efektívne riešenia problémov pomocou dátových štruktúr a algoritmov pre optimálny výkon softvéru.'} img={dataStructure} />
            <SkillCard title={'Dátová Analýza a strojové učenie'} description={'Začiatočník v oblasti analýzy údajov a strojového učenia pomocou knižnice Pandas v jazyku Python na predikciu dát.'} img={analytics} />
          </div>
          <div className={`row ${inViewCard5 ? ' animate' : ' invisible'}`} ref={refCard5}>
            <SkillCard title={'Riadenie SQL Databáz'} description={'Pokročilý s manipuláciou dát v databáze a ovládaní základných aj pokročilejších operácií a dopytmi.'} img={database} />
            <SkillCard title={'UI/UX Dizajn'} description={'Pokročilý v navrhovaní rôznych webových stránok a aplikácií hlavne v programe Figma.'} img={ui} />
          </div>
        </CustomSection >
        <CustomSection title={"Jazyky a Frameworky"} className={`languages ${inViewCard6 ? ' animate' : ' invisible'}`} ref={refCard6}>
          <div className={`grid ${inViewCard7 ? ' animate' : ' invisible'}`} ref={refCard7}>
            <div className="grid-item">
              <img src={C} alt=''></img>
              <Tag level={'Pokročilý'} lang={'C'} />
            </div>
            <div className="grid-item">
              <img src={java} alt=''></img>
              <Tag level={'Pokročilý'} lang={'Java'} />
            </div>
            <div className="grid-item">
              <img src={dart} alt=''></img>
              <Tag level={'Pokročilý'} lang={'Dart'} />
            </div>
            <div className="grid-item">
              <img src={flutter} alt=''></img>
              <Tag level={'Pokročilý'} lang={'Flutter'} />
            </div>
            <div className="grid-item">
              <img src={sql} alt=''></img>
              <Tag level={'Pokročilý'} lang={'SQL'} />
            </div>
            <div className="grid-item">
              <img src={html} alt=''></img>
              <Tag level={'Stredne pokročilý'} lang={'HTML'} />
            </div>
            <div className="grid-item">
              <img src={css} alt=''></img>
              <Tag level={'Stredne pokročilý'} lang={'CSS'} />
            </div>
            <div className="grid-item">
              <img src={react} alt=''></img>
              <Tag level={'Stredne pokročilý'} lang={'ReactJS'} />
            </div>
            <div className="grid-item">
              <img src={python} alt=''></img>
              <Tag level={'Stredne pokročilý'} lang={'Python'} />
            </div>
            <div className="grid-item">
              <img src={javascript} alt=''></img>
              <Tag level={'Začiatočník'} lang={'JavaScript'} />
            </div>
          </div>


        </CustomSection >
      </div >
      <Contacts />
    </>
  )

}

export default App;
