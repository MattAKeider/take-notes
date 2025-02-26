import NavigationBar from './components/NavigationBar/NavigationBar';
import MainContent from './components/MainContent/MainContent';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import classes from './App.module.css';

const App = () => {
  return (
    <div className={classes.container}>
      <NavigationBar />
      <Header />
      <SideBar />
      <MainContent />
    </div>
  );
};

export default App;