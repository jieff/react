import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post"

import styles from './App.module.css';

import './global.css';

// author: { avatar_url: "", name:"", role:"" }
// publishedAt: Date
// content: string


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jieff.png',
      name: 'Jieff Cavalcanti',
      role: 'Developer @ksys and TnpBank'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-11-04 10:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/bezalelmiranda.png',
      name: 'Bezalel Miranda',
      role: 'FullStack Developer @ksys Sistemas'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-11-05 10:00:00')
  }
];

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {posts.map(post => {
          return (
            <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}              
            />)
         })}
        </main>
      </div>

    </div>
    
  )
}

export default App
