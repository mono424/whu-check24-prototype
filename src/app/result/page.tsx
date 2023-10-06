"use client";
import ResultCard from '@/components/result-card';
import useLocalStorage from "use-local-storage";
import { categories } from '@/constants';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Loading() {
  const [cat] = useLocalStorage("cat", 0);
  const router = useRouter();
  const category = categories[cat];

  useEffect(() => {
    const internval = setTimeout(() => {
      router.push('/result');
    }, 3000);
    return () => {
      clearTimeout(internval);
    };
  }, []);

  return (
    <main className="flex flex-col justify-center items-center">
      <img src={category.imageUrl} alt="logo" className="w-full" />

      <div className="flex flex-col justify-start items-start mx-3">
        <h3 className="mt-3 font-bold">Dein individuelles Angebot</h3>
        <div className="text-gray-500">Wir haben Dir ein individuelles Angebot erstellt. Das Angebot ist für die nächsten 60min für Dich reserviert.</div>
      </div>

      <div className="w-full">
        <ResultCard category={category} />
      </div>
    </main>
  )
}
