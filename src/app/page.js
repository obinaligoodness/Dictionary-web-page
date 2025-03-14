"use client"
import { useContext,useState } from "react";
import Header from "@/components/Header"
import { FontContext } from "@/FontProvider";
import SearchComponent from "@/components/SearchComponent";
import SearchResult from "@/components/SearchResult";
export default function Home() {
  const { font} = useContext(FontContext);
  const [search,setSearch]= useState("")
  return (
    <div className={` ${font} min-h-screen text-black dark:text-[#f2f3f8] bg-white dark:bg-[#050505] font-sans px-8 sm:px-14 lg:px-56`}>
      <Header/>
      <SearchComponent setSearchProps={setSearch}/>
      <SearchResult search={search}/>
    </div>
  );
}
