import Contacts from './contacts/contacts.component';
import Header from './header/header.component';
import Projects from './projects/projects.component';
import Resume from './resume/resume.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Resume/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
