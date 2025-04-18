import { useState } from 'react';

import NavigationBar from './components/NavigationBar/NavigationBar';
import MainContent from './components/MainContent/MainContent';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import notesData, { type Note } from './data/data';
import getAllTags from './utility/helper';
import classes from './App.module.css';

const App = () => {
  const [notes, setNotes] = useState(notesData);

  function handleAddNote(note: Note) {
    setNotes(prevNotes => [note, ...prevNotes]);
  }

  return (
    <div className={classes.wrapper}>
      <NavigationBar tags={getAllTags(notes)} />
      <Header />
      <SideBar notes={notes} />
      <MainContent />
    </div>
  );
};

export default App;