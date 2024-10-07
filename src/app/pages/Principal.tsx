import { List } from '../components/List';
import { Button } from '../components/Button';
import { SelectBox } from '../components/Select';
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

const selectItems = [
  'option',
  'option',
  'option',
  'option',
  'option',
  'option',
  'option',
  'option',
  'option',
  'option',
];

export function Principal() {
  return (
    <div className="flex flex-col justify-center gap-7 w-full h-fit ">
      <Header />
      {/* inputs */}
      <div className="flex flex-row px-24 justify-between">
        <Button>Enviar</Button>
        <SelectBox label="Label" item={selectItems}></SelectBox>
      </div>
      <div className="flex px-24">
        <List cards={cardsData}></List>
      </div>
    </div>
  );
}
