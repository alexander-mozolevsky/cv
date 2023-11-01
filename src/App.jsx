import { Button } from './components/Button'
import { Gradient } from './components/Gradient'
import { Divider } from './components/Divider';
import { Chip } from './components/Chip';

import photo from './assets/photo.webp';
import data from './data.json';

import './App.scss'

function App() {
  const handleClickDownload = () => {
    window.open(data.cv)
  }

  const handleClickContactMe = () => {
    window.open(data.email);
  }

  return (
    <div className='core'>
      <header className='header'>
        <Button variant='bordered' onClick={handleClickDownload}>Download CV</Button>
        <Button variant='filled' onClick={handleClickContactMe}>Contact me</Button>
      </header>
      <div className='core gradients'>
        <div className='left-container'>
          <div className='name'>
            {data.name.split(' ').map((part) => <span key={part}>{part}</span>)}
          </div>
          <div className='title'>

          <span >{data.title}</span>
          </div>
        </div>
        <Gradient variant='primary' styles={{ width: 300, height: 300, right: 0, top: -32 }}/>
        <Gradient variant='secondary' styles={{ width: 400, height: 400, right: 64, top: 32}}/>
        <div className="image">
          <img src={photo} />
        </div>
        <div className='right-container'>
          <span>{data.contacts.location}</span>
          <span>{data.contacts.email}</span>
          <span>{data.contacts.phone}</span>
        </div>
      </div>
      <div className='core summary'>
        <span>{data.summary}</span>
      </div>
      <Divider />
      <span className='heading'>Skilled in</span>
      <div className='skills'>
        {data.skilled_in.map(skill => <Chip key={skill}>{skill}</Chip>)}
      </div>
      <Divider />
      <span className='heading'>Technologies</span>
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
          <Button variant='bordered' onClick={handleClickDownload}>Download CV</Button>
          <span>OR</span>
          <Button variant='filled' onClick={handleClickContactMe}>Contact me</Button>
        </div>
        <span className='updated'>This information was last updated on November 1, 2023</span>
      </footer>
    </div>
  )
}

export default App
