import './diceimage.styles.css'

const Diceimage = ({randomNum}) => {
    return (
        <>
        <div className='diceimage'>
            <img src={`/src/assets/images/dice-${randomNum}.png`} alt="" />
        </div>
        </>
    )
}

export default Diceimage;