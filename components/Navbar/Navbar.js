import Link from 'next/link'

const Navbar = (props) => {

  const series = [
    {name: 'F1', url: '/f1'},
    {name: 'F2', url: '/f2'},
    {name: 'F3', url: '/f3'},
    {name: 'Formula E', url: '/fe'},
    {name: 'W Series', url: '/wseries'},
    {name: 'MotoGP', url: '/motogp'},
    {name: 'Indycar', url: '/indycar'},
  ]

  return (
    <div className={"max-w-screen-lg mx-auto font-sans flex text-2xl"}>
      {series.map(item => (
        <Link href={item.url} key={item.name}>
          <a className={'mr-2'}>{item.name}</a>
        </Link>))
      }
    </div>
  )
}

export default Navbar;