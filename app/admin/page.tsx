"use client"
import SectionTitle from '@/components/Common/SectionTitle';
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';
import Link from 'next/link';


interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function UsersTable({ users }: { users: User[] }) {
  return (
    <section id="portfolio" className="relative z-10 py-36 md:py-40 lg:py-28">
    
        <SectionTitle
          title="Bienvenue sur la page admin"
          paragraph="Vous avez accès en temps réel aux demandes des clients"
          center
          width="635px"
        />
        <div className="container py-12">

         <div className="flex items-center justify-center pr-16 lg:pr-0">
         <Link 
            href="/admin/postulants"
            className="ease-in-up rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
          >
            Postulants         
          </Link>

          <div style={{ width: '40px' }} />
          <Link 
            href="/admin/commandes"
            className="ease-in-up rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
          >
            Commandes
                          
          </Link>

          <div style={{ width: '20px' }} />
          <Link 
            href="/admin/messages"
            className="ease-in-up rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
          >
            Messages
                          
          </Link>
                       
          </div>
        </div>
       
    
    </section>
  );
}