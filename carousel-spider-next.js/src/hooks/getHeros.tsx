"use client";

import { useState, useEffect } from 'react';

const useHeroes = () => {
  const [dataHeroes, setDataHeroes] = useState([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      const res = await fetch(`${process.env.DOMAIN_ORIGIN}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      setDataHeroes(data);
    };

    fetchHeroes();
  }, []);

  return { dataHeroes };
};

export default useHeroes;

