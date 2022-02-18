function incrementHittingAttempt(){
  console.log('Hitting Attempt');
}

const HittingAttemptBtn = () => {
  return (
    <button onClick={incrementHittingAttempt}>
      ATT
    </button>
  )
}

export default HittingAttemptBtn