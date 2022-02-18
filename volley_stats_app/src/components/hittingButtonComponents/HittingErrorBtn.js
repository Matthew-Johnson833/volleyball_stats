
function onClick(){
  console.log('clicked');
}

const HittingAttemptBtn = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      ERR
    </button>
  )
}

export default HittingAttemptBtn