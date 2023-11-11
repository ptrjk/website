import './App.css';
import Navigation from './components/Navigation';
import CustomSection from './components/CustomSection';
import Card from './components/Card';

import homeLogo from './resources/homeImage.svg'
import { useInView } from 'react-intersection-observer';

import deadliftLogo from './resources/deadlift.png'

import sudokuLogo from './resources/sudoku.png'
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


import dataStructure from './resources/diagram.png'
import analytics from './resources/analytics.png'
import database from './resources/database-table.png'
import ui from './resources/ui-design.png'

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
  const { ref: refCard3, inView: inViewCard3 } = useInView(config2);
  const { ref: refCard4, inView: inViewCard4 } = useInView(config);
  const { ref: refCard5, inView: inViewCard5 } = useInView(config);
  const { ref: refCard6, inView: inViewCard6 } = useInView(config);
  const { ref: refCard7, inView: inViewCard7 } = useInView(config);

  return (
    <>
      <Navigation />
      <div className='content'>
        <section className='home'>
          <div className='header'>
            <div className='left'>
              <p><span>Hey, I am</span></p>
              <h1>Peter Rujak 👋</h1>
              <p>I am a student who wants to find a part-time job and who is passionate about programming.</p>
              <button>Download CV</button>
            </div>
            <div className='right'>
              <img src={homeLogo} alt="React Logo" />
            </div>
          </div>
        </section>
        <CustomSection className={`aboutMe ${inViewFirst ? ' animate' : ' invisible'}`} ref={refFirst} title={'About me'}>
          <p>
            Hello, I'm Peter, a 22-year-old currently in my final year of the Bachelor's program in informatics at the Technical University of Kosice. I currently have a lot of time because I only have school on Mondays and Tuesdays.
            I thrive on learning and constantly seek new challenges.
            One of my most significant achievements is the creation of 'Deadlift,'
            a fitness calorie tracker that I developed during my summer holidays.
          </p>
        </CustomSection >
        <CustomSection className={`projects ${inViewAboutMe ? ' animate' : ' invisible'}`} ref={refAboutMe} title={'My projects'}>
          <Card
            ref={refCard1}
            inView={inViewCard1}
            title={'Deadlift'}
            imgSrc={deadliftLogo}
            showBadge={true}
            description={'My biggest project so far is a fitness and calorie tracker app. It is used to record the drinking regime, food to facilitate the process of counting calories and to record the exercises performed. App is still under development. I created the app all my summer holidays, I put a lot of effort into it.'}
          ></Card>
          <Card
            ref={refCard2}
            inView={inViewCard2}
            title={'Jigsaw Sudoku'}
            imgSrc={sudokuLogo}
            showExample={true}
            description={'My most interesting school project. from the subject of component programming, I was given an assignment to make a jigsaw sudoku game. it is a special Sudoku with irregular edges. The game is programmed in java, I use REST services there and Java spring, the data is stored in a SQL database.'}
          ></Card>
        </CustomSection >
        <CustomSection title='My skills' className={`skills ${inViewCard3 ? ' animate' : ' invisible'}`} ref={refCard3}>
          <div className={`row ${inViewCard4 ? ' animate' : ' invisible'}`} ref={refCard4}>
            <SkillCard title={'Data Structures and algorithms'} description={'Advanced problem-solving with data structures and algorithms, ensuring efficient, optimized, and scalable software solutions.'} img={dataStructure} />
            <SkillCard title={'Data Analysis and Machine Learning'} description={'Beginner in data analysis and machine learning, leveraging Pandas library in Python for data manipulation and exploration.'} img={analytics} />
          </div>
          <div className={`row ${inViewCard5 ? ' animate' : ' invisible'}`} ref={refCard5}>
            <SkillCard title={'Database Management'} description={'Advanced with data manipulation in the database, I know basic and advanced operations and queries'} img={database} />
            <SkillCard title={'UI/UX Design'} description={'Experienced in designing various websites and applications mainly in figma'} img={ui} />
          </div>
        </CustomSection >
        <CustomSection title='Languages and Frameworks' className={`languages ${inViewCard6 ? ' animate' : ' invisible'}`} ref={refCard6}>
          <div className={`grid ${inViewCard7 ? ' animate' : ' invisible'}`} ref={refCard7}>
            <div className="grid-item">
              <img src={C} alt=''></img>
            </div>
            <div className="grid-item">
              <img src={java} alt=''></img>
            </div>
            <div className="grid-item">
              <img src={javascript} alt=''></img>
            </div>
            <div className="grid-item">
              <img src={html} alt=''></img>
            </div>
            <div className="grid-item">
              <img src={css} alt=''></img>
            </div>
            <div className="grid-item">
              <img src={react} alt=''></img>
            </div>
            <div className="grid-item">
              <img src={dart} alt=''></img>
            </div>
            <div className="grid-item">
              <img src={flutter} alt=''></img>
            </div>
            <div className="grid-item">
              <img src={python} alt=''></img>
            </div>
            <div className="grid-item">
              <img src={sql} alt=''></img>
            </div>
          </div>


        </CustomSection>
      </div >
    </>
  )

}

export default App;
