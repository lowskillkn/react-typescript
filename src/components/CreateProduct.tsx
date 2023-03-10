import axios from 'axios'
import React, { useState } from 'react'
import { productData } from '../data/products'
import { IProduct } from '../models'
import ErrorMessage from './ErrorMessage'

interface CreateProductProps {
  onCreate: (product: IProduct) => void
}

const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')

    if (!value.trim().length) {
      setError('Please enter valid title.')
      return
    }

    productData.title = value
    const response = await axios.post<IProduct>(
      'https://fakestoreapi.com/products',
      productData
    )

    onCreate(response.data)
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />
      <ErrorMessage error={error} />
      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:text-white"
      >
        Create
      </button>
    </form>
  )
}

export default CreateProduct
