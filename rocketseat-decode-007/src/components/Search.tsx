import React from 'react'

export default function Search({ search, setSearch }: { search: string, setSearch: any }) {
    const handleOnChange = (event: any) => {
        setSearch(event.target.value.toLowerCase())
    }

    return (
        <div className="">
            <div className="flex border-2 rounded">
                <input
                    id='search'
                    name='search'
                    value={search}
                    onInput={handleOnChange}
                    placeholder="search" className="px-4 py-2 w-80" />            </div>
        </div>
    )
}