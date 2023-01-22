 import { Navbar, Dropdown } from 'flowbite-react';
 import Link from 'next/link';

const NavBar = () => {
  return (
    <Navbar>
          <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="/categories">Всі композиції з кульок
                </Navbar.Link>
                <Navbar.Link href="/categories/gender-party">Gender party
                </Navbar.Link>
                <Navbar.Link href=''>Виписка з пологового будинку
                  <Dropdown label={undefined} inline>
                    <Dropdown.Item>Всі
                      <Link href="/categories/baby">
                      </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>Для дівчинки
                      <Link href="/categories/baby/girl">
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item> Для хлопчика
                      <Link href="/categories/baby/boy">
                      </Link>
                    </Dropdown.Item>
                  </Dropdown>
               </Navbar.Link>
               <Navbar.Link href="">День народження
                  <Dropdown label={undefined} inline>
                    <Dropdown.Item>Всі
                      <Link href="/categories/birthday">
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>Перший день народження
                      <Link href="/categories/birthday/first">
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>Для дівчинки
                      <Link href="/categories/birthday/girls">
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>Для хлопчика
                      <Link href="/categories/birthday/boys">
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>Для неї
                      <Link href="/categories/birthday/she">
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>Для нього
                      <Link href="/categories/baby/he">
                      </Link>
                    </Dropdown.Item>
                    </Dropdown>
               </Navbar.Link>
               <Navbar.Link href="/categories/photo-zone">Фотозони
               </Navbar.Link>
              <Navbar.Link href="/categories/design">Оформлення фасадів
              </Navbar.Link>
              <Navbar.Link href="/categories/thematics">Тематичні свята
              </Navbar.Link>
           </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;



// function NavbarsExample(): JSX.Element {
//     return (
//       <Navbar fluid rounded>
//         <Navbar.Brand href="https://flowbite.com/">
//           <Image
//             alt="Flowbite logo"
//             height="32"
//             src="https://flowbite.com/docs/images/logo.svg"
//             width="32"
//           />
//           <span className="self-center whitespace-nowrap pl-3 text-xl font-semibold dark:text-white">
//             Flowbite
//           </span>
//         </Navbar.Brand>
//         <div className="flex md:order-2">
//           <Dropdown
//             inline
//             label={
//               <Avatar
//                 alt="User settings"
//                 img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
//                 rounded
//               />
//             }
//           >
//             <Dropdown.Header>
//               <span className="block text-sm">Bonnie Green</span>
//               <span className="block truncate text-sm font-medium">
//                 name@flowbite.com
//               </span>
//             </Dropdown.Header>
//             <Dropdown.Item>Dashboard</Dropdown.Item>
//             <Dropdown.Item>Settings</Dropdown.Item>
//             <Dropdown.Item>Earnings</Dropdown.Item>
//             <Dropdown.Divider />
//             <Dropdown.Item>Sign out</Dropdown.Item>
//           </Dropdown>
//           <Navbar.Toggle />
//         </div>
//         <Navbar.Collapse>
//           <Navbar.Link href="/navbars" active>
//             Home
//           </Navbar.Link>
//           <Navbar.Link href="/navbars">About</Navbar.Link>
//           <Navbar.Link href="/navbars">Services</Navbar.Link>
//           <Navbar.Link href="/navbars">Pricing</Navbar.Link>
//           <Navbar.Link href="/navbars">Contact</Navbar.Link>
//         </Navbar.Collapse>
//       </Navbar>
//     );
//   }