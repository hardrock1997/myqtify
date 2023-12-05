import Navbar from './components/NavBar/Navbar';
import Hero from '../src/components/Hero/Hero';
import styles from './App.module.css';
import Section from './components/Section/Section';
import useGetAlbumsData from '../src/hooks/useGetAlbumsData';
import {TOPALBUMS_URL} from '../src/utils/constants';
import { NEWALBUMS_URL } from '../src/utils/constants';
import { ALLSONGS_URL } from '../src/utils/constants';
import useGetAllSongs from './hooks/useGetAllSongs';
import  BasicAccordion  from '../src/components/Accordion/Accordion';

function App() {

  const [topAlbums] = useGetAlbumsData(TOPALBUMS_URL);
  const [newAlbums] = useGetAlbumsData(NEWALBUMS_URL);
  const [songs] = useGetAllSongs(ALLSONGS_URL);

  return (
    <div>
      <Navbar/>
      <Hero heroText='100 Thousand Songs,ad-free Over thousands podcast episodes'/>
      <div className={styles.sectionWrapper}>
        <Section title="Top Albums" data={topAlbums} type="album"/>
        <Section title="New Albums" data={newAlbums} type="album"/>
       {songs.length>0 ?  <Section title="Songs" data={songs} type="song"/> : null}
      </div>
      <div>
       <BasicAccordion text="FAQ"/>
      </div>
    </div>
  );
}

export default App;
