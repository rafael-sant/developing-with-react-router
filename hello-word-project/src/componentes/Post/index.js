import React from "react";

import styles from "./Post.module.css";

export default function Post({ post }) {
  return (
    <div className={styles.post}>
      <img className={styles.capa} alt="Capa" src={post.imagem} />
      <h2 className={styles.titulo}>{post.titulo}</h2>

      <button className={styles.botaoLer}>Ler</button>
    </div>
  );
}
