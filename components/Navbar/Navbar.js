import Link from 'next/link'

const Navbar = (props) => {

  const series = [
    {name: 'F1', url: '/f1'},
    {name: 'MotoGP', url: '/motogp'},
    {name: 'WEC', url: '/wec'},
    {name: 'BTCC', url: '/btcc'},
    {name: 'BritishGT', url: '/britishgt'},

  ]

  return (
    <div className={"max-w-screen-lg my-1 mx-auto font-sans flex text-2xl"}>
      {series.map(item => (
        <Link href={item.url} key={item.name}>
          <a className={'mr-2 hover:bg-red-500 px-3 py-2 rounded-md'}>{item.name}</a>
        </Link>))
      }
    </div>
  )
}

export default Navbar;