import classes from './App.module.css';

const App = () => {
  return (
    <main className={classes.container}>
      <div className={`${classes.nav} ${classes.section}`}>Nav Sidebar</div>
      <div className={`${classes.header} ${classes.section}`}>Header</div>
      <div className={`${classes.sidebar} ${classes.section}`}>Item Sidebar</div>
      <div className={`${classes.main} ${classes.section}`}>Main</div>
    </main>
  );
};

export default App;