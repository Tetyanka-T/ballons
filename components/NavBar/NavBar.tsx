 import { Navbar, Dropdown } from 'flowbite-react';

const NavBar = () => {
  return (
    <Navbar>
          <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="/categories/gender-party">Визначення статті малюка
                </Navbar.Link>
                <Navbar.Link active={true}>Виписка з пологового будинку
                  <Dropdown label={undefined} inline>
                    <Dropdown.Item>Всі
                      <Navbar.Link href="/categories/baby" active={true}>
                      </Navbar.Link>
                      </Dropdown.Item>
                    <Dropdown.Item>Хлопчик
                      <Navbar.Link href="/categories/baby/boy" active={true}>
                      </Navbar.Link>
                    </Dropdown.Item>
                    <Dropdown.Item>Дівчинка
                      <Navbar.Link href="/categories/baby/girl" active={true}>
                      </Navbar.Link>
                    </Dropdown.Item>
                  </Dropdown>
               </Navbar.Link>
               <Navbar.Link href="/categories/birthday">День народження
                  <Dropdown label={undefined} inline>
                    <Dropdown.Item>перший день народження
                      <Navbar.Link href="/categories/birthday/first" active={true}>
                      </Navbar.Link>
                    </Dropdown.Item>
                    <Dropdown.Item>для дівчинки
                      <Navbar.Link href="/categories/birthday/girls" active={true}>
                      </Navbar.Link>
                    </Dropdown.Item>
                    <Dropdown.Item>для хлопчика
                      <Navbar.Link href="/categories/birthday/boys" active={true}>
                      </Navbar.Link>
                    </Dropdown.Item>
                    <Dropdown.Item>для неї
                      <Navbar.Link href="/categories/birthday/she" active={true}>
                      </Navbar.Link>
                    </Dropdown.Item>
                    <Dropdown.Item>для нього
                      <Navbar.Link href="/categories/baby/he" active={true}>
                      </Navbar.Link>
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