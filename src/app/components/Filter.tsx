import { Button } from './Button';
import { SelectBox } from './Select';

const selectItems = [
  'option 1',
  'option 2',
  'option 3',
  'option 4',
  'option 5',
];

export function Filter() {
  return (
    <div className="flex w-full flex-row gap-4 items-end justify-center">
      <div className="flex w-72">
        <SelectBox
          placeholder="Selecione"
          item={selectItems}
          label="Skills"
        ></SelectBox>
      </div>
      <div className="flex w-72">
        <SelectBox
          placeholder="Selecione"
          item={selectItems}
          label="Skills"
        ></SelectBox>
      </div>
      <div className="flex w-72">
        <SelectBox
          placeholder="Selecione"
          item={selectItems}
          label="Skills"
        ></SelectBox>
      </div>
      <div className="flex w-32">
        <SelectBox
          placeholder="UR"
          item={selectItems}
          label="Skills"
        ></SelectBox>
      </div>
      <Button>Enviar</Button>
    </div>
  );
}
