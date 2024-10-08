import { List } from '../components/List';
import { Filter } from '../components/Filter';
import { Header } from '../components/Header';

const cardsData = [
  {
    company: 'Company1',
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab non odit eveniet corporis ducimus, voluptates porro ipsa veritatis eos dolorut cupiditate eaque asperiores provident soluta, voluptatibus',
  },
  {
    company: 'Company1',
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab non odit eveniet corporis ducimus, voluptates porro ipsa veritatis eos dolorut cupiditate eaque asperiores provident soluta, voluptatibus',
  },
  {
    company: 'Company1',
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab non odit eveniet corporis ducimus, voluptates porro ipsa veritatis eos dolorut cupiditate eaque asperiores provident soluta, voluptatibus',
  },
  {
    company: 'Company1',
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab non odit eveniet corporis ducimus, voluptates porro ipsa veritatis eos dolorut cupiditate eaque asperiores provident soluta, voluptatibus',
  },
  {
    company: 'Company1',
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab non odit eveniet corporis ducimus, voluptates porro ipsa veritatis eos dolorut cupiditate eaque asperiores provident soluta, voluptatibus',
  },
  {
    company: 'Company1',
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab non odit eveniet corporis ducimus, voluptates porro ipsa veritatis eos dolorut cupiditate eaque asperiores provident soluta, voluptatibus',
  },
  {
    company: 'Company1',
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab non odit eveniet corporis ducimus, voluptates porro ipsa veritatis eos dolorut cupiditate eaque asperiores provident soluta, voluptatibus',
  },
  {
    company: 'Company1',
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab non odit eveniet corporis ducimus, voluptates porro ipsa veritatis eos dolorut cupiditate eaque asperiores provident soluta, voluptatibus',
  },
  {
    company: 'Company1',
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab non odit eveniet corporis ducimus, voluptates porro ipsa veritatis eos dolorut cupiditate eaque asperiores provident soluta, voluptatibus',
  },
  {
    company: 'Company1',
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab non odit eveniet corporis ducimus, voluptates porro ipsa veritatis eos dolorut cupiditate eaque asperiores provident soluta, voluptatibus',
  },
];

export function Principal() {
  return (
    <div className="flex flex-col justify-center gap-7 w-full h-fit ">
      <Header />
      {/* inputs */}
      <div className="flex px-24">
        <Filter></Filter>
      </div>
      <div className="flex px-24">
        <List cards={cardsData}></List>
      </div>
    </div>
  );
}
