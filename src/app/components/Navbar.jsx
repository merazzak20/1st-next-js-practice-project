import Link from "next/link";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const Navbar = () => {
  return (
    <nav className="bg-gray-300 p-5">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <>
          <div>Logo</div>
          <div>
            <ul className="space-x-6">
              <Link className="px-2 py-1 border-blue-600 border-2" href="/">
                Home
              </Link>
              <Link
                className="px-2 py-1 border-blue-600 border-2"
                href="/About"
              >
                About
              </Link>
              <div className="mt-5 inline-block">
                <LoginLink className="mx-2 btn btn-primary">Sign in</LoginLink>
                <RegisterLink className="mx-2 btn btn-primary">
                  Sign up
                </RegisterLink>
                <LogoutLink className="mx-2 btn btn-primary">
                  Log out
                </LogoutLink>
              </div>
            </ul>
          </div>
        </>
      </div>
    </nav>
  );
};

export default Navbar;
