
function onClick(){
  console.log('clicked');
}

const HittingAttemptBtn = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      ATT
    </button>
  )
}

export default HittingAttemptBtn