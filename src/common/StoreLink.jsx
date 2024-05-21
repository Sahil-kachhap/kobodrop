function  StoreLink({href, logo, storename}) {
  return (
    <a href={href} className="flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-900 active:bg-zinc-500">
        <img src={logo} alt="appstore-logo" className="w-5"/>
            <div>
                <p className="text-xs">Download on the</p>
                <p>{storename}</p>
            </div>
    </a>
  )
}

export default StoreLink