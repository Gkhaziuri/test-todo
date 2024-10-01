import Head from 'next/head';
import SortableTodoList from './components/SortableTodoList';

const Home = () => {
  return (
    <>
      <Head>
        <title>To-Do List</title>
      </Head>
      <main>
        <SortableTodoList />
      </main>
    </>
  );
};

export default Home;