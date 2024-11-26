'use client';

import { useEffect, useState } from 'react';
import { Button } from './Button';
import { SelectBox } from './Select';
import axios from 'axios';
import { useJobs } from '@/context/jobsData';
import { Combobox } from './Combobox';

// const payPeriod = ['YEARLY', 'HOURLY'];

//Componente de filtro
export function Filter() {
  // Utilização do contexto para buscar os dados dos trabalhos
  const { setJobs, setLoading } = useJobs();

  // Estados que serão utilizados
  const [skills, setSkills] = useState<string[]>([]);
  const [location, setLocation] = useState<string[]>([]);
  const [payPeriod, setPayPeriod] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<string[]>([]);
  const [selectedPayPeriod, setSelectedPayPeriod] = useState<string[]>([]);

  // Função para enviar o filtro
  const handleSendFilter = () => {
    setLoading(true);
    return axios
      .post(
        'http://localhost:3001/filter',
        {
          location: String(selectedLocation),
          jobSkills: selectedSkill,
          payPeriod: String(selectedPayPeriod),
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
        }
      )
      .then((res) => {
        setJobs(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false); // Para o loading independentemente do resultado
      });
  };

  // Função para buscar os filtros disponíveis
  const handleFilter = async () => {
    try {
      const skillsResponse = await axios.get<string[]>(
        'http://localhost:3001/skilltypes',
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
        }
      );
      setSkills(skillsResponse.data);

      const locationResponse = await axios.get<string[]>(
        'http://localhost:3001/locationtypes',
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
        }
      );
      setLocation(locationResponse.data);
    } catch (err) {
      console.log(err);
    }

    const payPeriodResponse = await axios.get<string[]>(
      'http://localhost:3001/payperiodtypes',
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
      }
    );
    setPayPeriod(payPeriodResponse.data);
  };

  // Efeito inicial que irá buscar os dados quando o componente for montado
  useEffect(() => {
    handleFilter();
  }, []);

  // Retorno do componente
  return (
    <div className="flex w-full flex-col md:flex-row gap-4 items-start md:items-end justify-center">
      <div className="flex w-72">
        <SelectBox
          placeholder="Selecione"
          selectedItems={selectedSkill}
          setSelectedItems={setSelectedSkill}
          multiple
          item={skills}
          label="Skills"
        ></SelectBox>
      </div>
      <div className="flex w-72">
        <SelectBox
          placeholder="Selecione"
          setSelectedItems={setSelectedPayPeriod}
          selectedItems={selectedPayPeriod}
          item={payPeriod}
          label="Pay Period"
        ></SelectBox>
      </div>
      <div className="flex min-w-72 w-fit">
        <Combobox
          placeholder="UR"
          items={location}
          selectedItems={selectedLocation}
          setSelectedItems={setSelectedLocation}
          label="Location"
        ></Combobox>
      </div>
      <Button onClick={handleSendFilter}>Enviar</Button>
    </div>
  );
}
