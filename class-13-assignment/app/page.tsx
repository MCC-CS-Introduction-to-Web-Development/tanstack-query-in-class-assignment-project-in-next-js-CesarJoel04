"use client";

import React from 'react'
import AlbumData from './data/DataDisplay';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='text-3xl font-bold'>Class 13 Assignment - Next.js</div>
      <AlbumData />
    </QueryClientProvider>
  )
}