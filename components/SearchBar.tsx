import React from 'react'
import Form from "next/form";
import SearchBarReset from './SearchBarReset';
import { Search } from 'lucide-react';

const SearchBar = ({query}:{ query?: string }) => {
  
  return (
    <Form action="/" scroll={false} className="search-form">
        <input 
            name="query"
            defaultValue={query}
            className="search-input"
            placeholder="Search Plans"
        />
        <div className="flex gap-2">
            {query && <SearchBarReset/>}
            <button type="submit" className="search-btn text-white">
                <Search className="size-5"/>
            </button>
        </div>
    </Form>
  )
}

export default SearchBar