'use client';

import { useEffect, useState } from 'react';
import { Button } from './Button';
import { SelectBox } from './Select';
import axios from 'axios';
import { useJobs } from '@/context/jobsData';

const payPeriod = ['YEARLY', 'HOURLY'];

export function Filter() {
  const { setJobs, setLoading } = useJobs();
  const [skills, setSkills] = useState<string[]>([]);
  const [location, setLocation] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<string[]>([]);
  const [selectedPayPeriod, setSelectedPayPeriod] = useState<string[]>([]);

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
  };

  useEffect(() => {
    handleFilter();
  }, []);

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
      <div className="flex w-32">
        <SelectBox
          placeholder="UR"
          item={location}
          selectedItems={selectedLocation}
          setSelectedItems={setSelectedLocation}
          label="Location"
        ></SelectBox>
      </div>
      <Button onClick={handleSendFilter}>Enviar</Button>
    </div>
  );
}
