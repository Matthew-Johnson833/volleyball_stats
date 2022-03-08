function incrementHittingError(){
  console.log('Hitting Error');
}

const HittingAttemptBtn = () => {
  return (
    <button onClick={incrementHittingError}>
      ERR
    </button>
  )
}

export default HittingAttemptBtn