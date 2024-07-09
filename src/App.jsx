import { Button } from './components/Button'
import { Gradient } from './components/Gradient'
import { Divider } from './components/Divider';
import { Chip } from './components/Chip';

import photo from './assets/photo.webp';
import data from './data.json';

import './App.scss'
import { useEffect } from 'react';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { ANALYTICS_KEYS } from './utils/firebase';

function App() {
  const handleClickDownload = (event) => () => {
    logEvent(getAnalytics(), event);

    window.open(data.cv)
  }

  const handleClickContactMe = (event) => () => {
    logEvent(getAnalytics(), event);

    window.open(data.email);
  }

  useEffect(() => {
    logEvent(getAnalytics(), ANALYTICS_KEYS.VISIT_MAIN_PAGE, {
      theme: window?.matchMedia?.('(prefers-color-scheme:dark)').media
    });
  }, []);

  const openHref = (url, event) => (e) => {
    e.preventDefault();

    logEvent(getAnalytics(), event);

    window.open(url, '_newtab');
  }

  return (
    <div className='core'>
      <header>
        <Button variant='bordered' onClick={handleClickDownload(ANALYTICS_KEYS.DOWNLOAD_TOP_BUTTON)}>Download CV</Button>
        <Button variant='filled' onClick={handleClickContactMe(ANALYTICS_KEYS.CONTACT_ME_TOP_BUTTON)}>Contact me</Button>
      </header>
      <div className='core gradients'>
        <div className='left-container'>
          <div className='name'>
            {data.name.split(' ').map((part) => <span key={part}>{part}</span>)}
          </div>
          <div className='title'>
          <span>{data.title}</span>
          </div>
        </div>
        <Gradient variant='primary' styles={{ width: 300, height: 300, right: 0, top: -32 }}/>
        <Gradient variant='secondary' styles={{ width: 400, height: 400, right: 64, top: 32}}/>
        <div className="image">
          <img src={photo} alt='My photo'/>
        </div>
        <div className='right-container'>
          <span>{data.contacts.location}</span>
          <span><a href={`mailto:${data.contacts.email}`} onClick={openHref(`mailto:${data.contacts.email}`, ANALYTICS_KEYS.PRESS_EMAIL)}>{data.contacts.email}</a></span>
          <span><a href={`tel:${data.contacts.phone}`} onClick={openHref(`tel:${data.contacts.phone}`, ANALYTICS_KEYS.PRESS_PHONE)}>{data.contacts.phone}</a></span>
          <span><a href={data.contacts.linkedin} onClick={openHref(data.contacts.linkedin, ANALYTICS_KEYS.PRESS_LINKEDIN)}>LinkedIn</a></span>
        </div>
      </div>
      <div className='core summary'>
        <span>&nbsp;&nbsp;&nbsp;{data.summary}</span>
      </div>
      <Divider />
      <span className='heading'>Speaking languages</span>
      <div className='skills'>
        {data.languages.map(language => <Chip key={language.language} gray>{`${language.language} (${language.level})`}</Chip>)}
      </div>
      <Divider />
      <span className='heading'>Skilled in</span>
      <div className='skills'>
        {data.skilled_in.map(skill => <Chip key={skill}>{skill}</Chip>)}
      </div>
      <Divider />
      <span className='heading technologies'>Technologies</span>
      <div className='technology-list'>
        {data.technologies.map(({ category, technologies }) => 
          <div className='technology' key={category}>
            <span className='category'>{category}</span>
            <span className='technologies'>{technologies.join(' | ')}</span>
          </div>
        )}
      </div>
      <Divider />
      <footer>
        <span className='last-words'>
          If you require additional information regarding my professional background and experience, you can
        </span>
        <div className='actions'>
          <Button variant='bordered' onClick={handleClickDownload(ANALYTICS_KEYS.DOWNLOAD_BOTTOM_BUTTON)}>Download CV</Button>
          <span>OR</span>
          <Button variant='filled' onClick={handleClickContactMe(ANALYTICS_KEYS.CONTACT_ME_BOTTOM_BUTTON)}>Contact me</Button>
        </div>
        <span className='updated'>CV details were updated on June 29, 2024</span>
      </footer>
    </div>
  )
}

export default App
