import Navbar from './components/NavBar/Navbar';
import Hero from '../src/components/Hero/Hero';
import styles from './App.module.css';
import Section from './components/Section/Section';
import useGetAlbumsData from '../src/hooks/useGetAlbumsData';
import {TOPALBUMS_URL} from '../src/utils/constants';
import { NEWALBUMS_URL } from '../src/utils/constants';

function App() {

  const [topAlbums] = useGetAlbumsData(TOPALBUMS_URL);
  const [newAlbums] = useGetAlbumsData(NEWALBUMS_URL);

  return (
    <div>
      <Navbar/>
      <Hero heroText='100 Thousand Songs,ad-free Over thousands podcast episodes'/>
      <div className={styles.sectionWrapper}>
      <Section title="Top Albums" data={topAlbums} type="album"/>
      <Section title="New Albums" data={newAlbums} type="album"/>
      </div>
    </div>
  );
}

export default App;
