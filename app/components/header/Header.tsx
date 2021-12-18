import {
    Link,
  } from "remix";


export const Header = ()=>{


    return (
    <header className="fixed w-full flex flex-col lg:flex-row z-40">
        <div className="w-full">
        <nav aria-label="Main navigation" className="flex items-center lg:flex-shrink-0 text-white p-6 bg-teal-900 w-full lg:w-auto bg-opacity-100">
            <ul>
            <li>
                <Link to="/">Strona Główna</Link>
            </li>
            </ul>
        </nav>
        </div>
    </header>
  )}