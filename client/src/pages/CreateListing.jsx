import React from 'react'

export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
        <h1 className = 'text-3xl font-semibold text-center my-7'>Create Listing</h1>
        <form className='flex flex-col sm:flex-row'>
            <div className="flex flex-col gap-4 flex-1">
                <input type = 'text' placeholder = 'Name' className='p-2 border border-gray-300 rounded-lg mb-3' id ='name' maxLength={62} minLength={10} required/>
                <input type = 'text' placeholder = 'Description' className='p-2 border border-gray-300 rounded-lg mb-3' id ='description' required/>
                <input type = 'text' placeholder = 'Address' className='p-2 border border-gray-300 rounded-lg mb-3' id ='address' required/>
            </div>
        </form>
      
    </main>
  )
}
