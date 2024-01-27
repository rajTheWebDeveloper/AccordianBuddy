import React, { useState } from 'react'
import questions from '../utils/data'
import Query from './Query'

const Accordian = () => {
    let [accordianData,setAccordianData]=useState(questions)
  return (
    <main className="w-[100vw] h-screen bg-sky-100 overflow-x-hidden pb-24">
      <section className="bg-white w-[95vw] max-w-[800px] mx-auto mt-24 px-3 py-4 rounded-md shadow-xl md:px-8 md:py-4">
        <h1 className="text-4xl md:text-5xl text-center text-sky-950">
          Queries
        </h1>
        <article className="mt-8">
          {accordianData.map((query,idx) => {
            return <Query query={query} key={idx}/>
          })}
        </article>
      </section>
    </main>
  )
}

export default Accordian