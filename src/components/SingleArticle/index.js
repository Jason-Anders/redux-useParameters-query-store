import "./SingleArticle.css";
import { useParams } from "react-router-dom";

const SingleArticle = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find((art) => art.id === id);

  return (
    <div className="singleArticle">
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt="home" />
      <p>{article.body}</p>
    </div>
  );
};

export default SingleArticle;
