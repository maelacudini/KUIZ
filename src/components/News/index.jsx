import Image from "next/image";
import style from "./news.module.scss";

const news = [
  {
    title: "New Exhibit: Rediscovering the Masters",
    description:
      "Dive into the timeless works of art by renowned masters as we unveil a breathtaking collection that redefines art history. Join us on a journey of rediscovery and appreciation.",
    date: "21/12/2023",
    url: "/KUIZ/img6.jpg",
  },
  {
    title: "Artists in Focus: Celebrating Local Talent",
    description:
      "Explore the vibrant and diverse artistry of local talents in our latest exhibition. From contemporary sculptures to thought-provoking installations, witness the creativity thriving in our own community.",
    date: "21/12/2023",
    url: "/KUIZ/img7.jpg",
  },
  {
    title: "Museum Expansion: A Home for Contemporary Art",
    description:
      "Experience the grand unveiling of our newly expanded museum space dedicated to contemporary art. Immerse yourself in the world of cutting-edge creativity and innovation.",
    date: "21/12/2023",
    url: "/KUIZ/img8.jpg",
  },
  {
    title: "Art & Culture Symposium: Bridging Past and Present",
    description:
      "Join us for an enlightening symposium that brings together art enthusiasts, scholars, and creators to discuss the enduring influence of art and culture on our society. Engage in thought-provoking conversations and gain new perspectives.",
    date: "21/12/2023",
    url: "/KUIZ/img9.jpg",
  },
];

export default function index() {
  return (
    <div className={style.main}>
      <h1>news</h1>

      <div className={style.news}>
        <div className={style.container}>
          {news.map((n, index) => (
            <div key={index} className={style.inner}>
              <Image src={n.url} alt={n.title} width={300} height={200} />
              <p className={style.title}>{n.title}</p>
              <p>{n.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
