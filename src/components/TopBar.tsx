import logo from './../assets/logo.svg';

const TopBar = () => {
  return (
    <div className='flex flex-row justify-between items-center px-2 bg-base-300 h-full w-full border-b border-gray-400'>
        <a href="/" className="flex flex-row items-center">
            <img src={logo} width="30px"/>
            <h1 className="px-3 text-black text-xl">Product Name</h1>
        </a>
        <div className='flex flex-row items-center'>
            <h1 className='px-5'>name@email.com (role)</h1>
            <button className="btn btn-sm btn-primary text-lg">Logout</button>
        </div>
    </div>
  )
}

export default TopBar