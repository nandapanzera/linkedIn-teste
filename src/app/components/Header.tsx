import { Button } from './Button';
import { IoHeartOutline } from 'react-icons/io5';
import { GiHummingbird } from 'react-icons/gi';

export function Header() {
  return (
    <div className="flex flex-row justify-between w-full py-9 px-10 h-fit bg-[#373ACC] top-0 items-center">
      <div className="flex w-fit h-fit text-2xl text-light-gray font-bold items-center gap-2">
        <GiHummingbird size={34} />
        Beak
      </div>
      <div>
        <Button>
          <div className="flex flex-row justify-center gap-2 items-center">
            <div className="flex w-fit h-fit">
              <IoHeartOutline size={16} />
            </div>
            <div className="flex w-fit h-fit text-base">Favoritos</div>
          </div>
        </Button>
      </div>
    </div>
  );
}