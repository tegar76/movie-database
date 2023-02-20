import React, { useEffect, useState } from 'react'

export default function Counter() {

  // state terdiri dari variabel dan fungsi prngrmbalian (angka) dan (setAngka())
  const [angka, setAngka] = useState(0)

  function tambah() {
    setAngka(angka + 1)
  }

  function updateDOM(){
    console.log("Lifecycle didmount")
    document.title = `Hasil: ${angka}`
  }

  // useEffect
  // Melakukan side effect: mengakses dom
  // akan berjalan pada lifecycle mount dan update
  // untuk membatasi update pada useEffect isi variabel yang akan diupdate pada parameter ke 2 misalnya [angka]
  useEffect(updateDOM, [angka])

  console.log("lifecycle dirender")

  return (
    <div className='text-center'>
      <p>hasil: {angka}</p>
      <button className='bg-yellow-300 mt-5' onClick={tambah}>Add</button>
    </div>
  )
}
