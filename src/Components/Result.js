import React from 'react'

const Result = (props) => {
    const result =props.data;
    console.log(result)
  return (
    <div >
      <a href={result} target="_blank" rel="noopener noreferrer">{result}</a>
    </div>
  )
}

export default Result
