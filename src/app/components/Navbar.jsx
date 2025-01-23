import Link from "next/link";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
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
                {user ? (
                  <>
                    <LogoutLink className="mx-2 btn btn-primary">
                      Log out
                    </LogoutLink>
                  </>
                ) : (
                  <>
                    <LoginLink className="mx-2 btn btn-primary">
                      Sign in
                    </LoginLink>
                    <RegisterLink className="mx-2 btn btn-primary">
                      Sign up
                    </RegisterLink>
                  </>
                )}
              </div>
            </ul>
          </div>
        </>
      </div>
    </nav>
  );
};

export default Navbar;
