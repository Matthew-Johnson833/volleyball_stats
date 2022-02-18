function incrementKill(){
  console.log('Successful Kill');
}

const HittingKillBtn = () => {
  return (
    <button onClick={incrementKill}>
      KILL
    </button>
  )
}

export default HittingKillBtn