'use client';
import { List } from '../components/List';
import { Filter } from '../components/Filter';
import { Header } from '../components/Header';
import { useJobs } from '@/context/jobsData';

// const cardsData = [
//   {
//     company: 'Company1',
//     title: 'Title 1',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab non odit eveniet corporis ducimus, voluptates porro ipsa veritatis eos dolorut cupiditate eaque asperiores provident soluta, voluptatibus',
//   },
//   {
//     company: 'Company1',
//     title: 'Title 1',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab non odit eveniet corporis ducimus, voluptates porro ipsa veritatis eos dolorut cupiditate eaque asperiores provident soluta, voluptatibus',
//   },
//   {
//     company: 'Company1',
//     title: 'Title 1',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab non odit eveniet corporis ducimus, voluptates porro ipsa veritatis eos dolorut cupiditate eaque asperiores provident soluta, voluptatibus',
//   },
//   {
//     company: 'Company1',
//     title: 'Title 1',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab non odit eveniet corporis ducimus, voluptates porro ipsa veritatis eos dolorut cupiditate eaque asperiores provident soluta, voluptatibus',
//   },
//   {
//     company: 'Company1',
//     title: 'Title 1',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab non odit eveniet corporis ducimus, voluptates porro ipsa veritatis eos dolorut cupiditate eaque asperiores provident soluta, voluptatibus',
//   },
//   {
//     company: 'Company1',
//     title: 'Title 1',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab non odit eveniet corporis ducimus, voluptates porro ipsa veritatis eos dolorut cupiditate eaque asperiores provident soluta, voluptatibus',
//   },
//   {
//     company: 'Company1',
//     title: 'Title 1',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab non odit eveniet corporis ducimus, voluptates porro ipsa veritatis eos dolorut cupiditate eaque asperiores provident soluta, voluptatibus',
//   },
//   {
//     company: 'Company1',
//     title: 'Title 1',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab non odit eveniet corporis ducimus, voluptates porro ipsa veritatis eos dolorut cupiditate eaque asperiores provident soluta, voluptatibus',
//   },
//   {
//     company: 'Company1',
//     title: 'Title 1',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab non odit eveniet corporis ducimus, voluptates porro ipsa veritatis eos dolorut cupiditate eaque asperiores provident soluta, voluptatibus',
//   },
//   {
//     company: 'Company1',
//     title: 'Title 1',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab non odit eveniet corporis ducimus, voluptates porro ipsa veritatis eos dolorut cupiditate eaque asperiores provident soluta, voluptatibus',
//   },
// ];

export function Principal() {
  const { jobs } = useJobs();

  return (
    <div className="flex flex-col justify-center gap-7 w-full h-fit ">
      <Header />
      {/* inputs */}
      <div className="flex px-24">
        <Filter></Filter>
      </div>
      <div className="flex px-24">
        <List cards={jobs}></List>
      </div>
    </div>
  );
}
