import { GalleryProps } from "@/types/gallery";
import { ListItemProps } from "@/types/listItem";

function ListItem(props: ListItemProps) {
  const {label, content} = props;
  return (
    <li>
      <b>{label}</b>
      {content}
    </li>
  )
}

function GalleryItem(props: GalleryProps) {
  const {scientist, size=70} = props;
  return (
    <section className="profile">
      <h2>{scientist.name}</h2>
      <img className="avatar"
        src={scientist.imageId}
        alt={scientist.name}
        width={size}
        height={size}/>
        <ul>
          <ListItem label="Profession: " content={scientist.profession}/>
          <ListItem label="Awards: " content={scientist.awards}/>
          <ListItem label="Discovery: " content={scientist.discovery}/>
        </ul>
    </section>

  )
}

export default function Gallery() {
  return (
    <div>
      <GalleryItem scientist={{
        name: "Maria Skłodowska-Curie",
        imageId: 'https://i.imgur.com/szV5sdGs.jpg',
        profession: 'Physicist & Chemist',
        awards: 'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal',
        discovery: "Polonium (element)"
      }} size={70}/>
      <GalleryItem scientist={{
        name:"Katsuko Saruhashi",
        imageId: 'https://i.imgur.com/YfeOqp2s.jpg',
        profession:"Geochemist",
        awards: "Miyake Prize for geochemistry, Tanaka Prize",
        discovery: "a method for measuring carbon dioxide in seawater"
      }} size={70}/>
    </div>
  );
}
