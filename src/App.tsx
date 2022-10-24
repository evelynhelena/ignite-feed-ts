import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/evelynhelena.png",
      name: "Evelyn Helena",
      role: "Front-End Developer",
    },
    content: [
      {id: 1, type: "paragraph", content: "Fala galeraa 👋 " },
      {
        id: 2,
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { id: 3,type: "link", content: "jane.design/doctorcare " },
    ],
    publishedAt: new Date("2022-10-15 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/wueliton.png",
      name: "Paulo Wuéliton",
      role: "Front-End Developer",
    },
    content: [
      {id: 1, type: "paragraph", content: "Fala galeraa 👋 " },
      {
        id: 2,
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {id: 3, type: "link", content: "jane.design/doctorcare " },
    ],
    publishedAt: new Date("2022-10-17 20:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}
