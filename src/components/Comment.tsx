import styles from "./Comment.module.css";
import { HandsClapping, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps{
  id: number;
  content: string;
  onDeleteComment:(id: number) => void;
}

export function Comment({id,content,onDeleteComment}:CommentProps) {

  const [likeCount,setLikeCount] = useState(0);

  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/evelynhelena.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Evelyn Helena</strong>
              <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar Comentário" onClick={() => onDeleteComment(id)}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <HandsClapping />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
