import './Header.css'

const Header =()=>{
    return (
        <>
        <div className='mainHeader'>
            <h1 className='title'>ReactMeals</h1>
            <h3 className='cart'>Your Cart <span> 0 </span></h3>
        </div>
        </>
    )
}

export default Header