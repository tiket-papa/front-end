'use client'

import { increment } from '@/redux/Features'
import { type RootState } from '@/redux/strore'
import { useDispatch, useSelector } from 'react-redux'

export default function ReduxTest () {
  const dispatch = useDispatch()
  const result = useSelector((state: RootState) => state.counter.value)
  return (
      <>
          <div className="py-5 rounded border px-3 my-4">
              <p className=' text-center font-bold'>{result}</p>
          </div>
          <div className="text-center">

              <button className='border p-3 rounded' onClick={() => dispatch(increment())}>tambah</button>
          </div>
      </>
  )
}
