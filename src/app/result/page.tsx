"use client";
import ResultCard from '@/components/result-card';
import { categories } from '@/services/state';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Loading() {
  const router = useRouter();
  const category = categories[0];

  useEffect(() => {
    setTimeout(() => {
      router.push('/result');
    }, 3000);
  }, []);

  return (
    <main className="flex flex-col justify-center items-center">
      <img src={category.imageUrl} alt="logo" className="w-full" />

      <div className="flex flex-col justify-start items-start mx-3">
        <h3 className="mt-3 font-bold">Dein individuelles Angebot</h3>
        <div className="text-gray-500">Wir haben dir ein individuelles Angebot erstellt. Das Angebot ist für die nächsten 60min reserviert für dich.</div>
      </div>

      <div className="w-full">
        <ResultCard imageUrl='/img/vac2.jpg' location='Playa de Muro' title='Spanien Urlaub' price='399,-' />
      </div>
    </main>
  )
}
