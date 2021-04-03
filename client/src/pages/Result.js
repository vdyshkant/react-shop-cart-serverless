import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'

function useQueryString() {
  return new URLSearchParams(useLocation().search)
}

export default function Result() {
  const queryString = useQueryString()
  const sessionId = queryString.get('session_id')

  const { isLoading, isError } = useQuery('Result', () =>
    sessionId ? axios(`/api/checkout_sessions/${sessionId}`).then((res) => res.data) : null
  )

  if (isLoading) return <LoadingSpinner />
  if (isError) return <div className="text-red-500 font-bold text-center mx-auto">Error loading result page</div>

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">Payment Accepted!</h1>
        </div>
      </div>
    </section>
  )
}
