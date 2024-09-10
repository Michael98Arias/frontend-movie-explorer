"use client";

import { useTranslations } from 'next-intl';

export default function Navbar() {
  const t = useTranslations('HomePage');

  return (
    <div className="navbar bg-base-100">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-start-1 w-14">
          <img alt="Picture of popcorn" src="/img/popC.png" />
          <h3>{t("NavBar.title")}</h3>
        </div>
        <div className="col-start-2">
          <button className="btn btn-ghost">{t("NavBar.labelButton.buttonOne")}</button>
        </div>
        <div className="col-start-3">
          <button className="btn btn-ghost">{t("NavBar.labelButton.buttonTwo")}</button>
        </div>
        <div className="col-end-7 col-span-1 dropdown dropdown-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">Login</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-start-1 col-end-7 ...">04</div>
      </div>
    </div>
  );
}
